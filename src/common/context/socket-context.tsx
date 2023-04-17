import { useRef } from "react";
import { SocketContextType, TXN_STATUS_TYPE } from "../../types/index";
import { useState, createContext, useContext, useCallback } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext({} as SocketContextType);

type props = {
  children: React.ReactNode;
};

const SocketProvider = ({ children }: props) => {
  const [txn_reference, setTxnReference] = useState("");
  const [txn_status, setTxnStatus] = useState<TXN_STATUS_TYPE>("");
  const [socketConnected, setSocketConnected] = useState(false);
  const socketRef = useRef({
    socket: io(`${import.meta.env.VITE_AUTH_BASE_URL!}/nfc`, {
      transports: ["websocket"],
    }),
  });

  const handleTxRef = useCallback(
    (txRef: string) => setTxnReference(txRef),
    []
  );

  socketRef.current.socket.on("connect", () => {
    console.log("CONNECTION ESTABLISHED");
    setSocketConnected(true);
  });

  socketRef.current.socket.on("disconnect", () => {
    console.log("CONNECTION CLOSED");
    setSocketConnected(false);
  });

  socketRef.current.socket.on("customer:joined", (data) => {
    if (data?.message === "Success") {
      setTxnStatus("customer_joined");
    }
  });

  socketRef.current.socket.on("customer:transaction:update", (data) => {
    console.log(data);
    if (data.status === "STARTED") {
      setTxnStatus("customer_started");
      socketRef.current.socket.emit("customer:started:ack", { txn_reference });
    }

    if (data.status === "CANCELLED") {
      setTxnStatus("customer_cancelled");
      socketRef.current.socket.emit("customer:cancelled:ack", {
        txn_reference,
      });
    }

    if (data.status === "COMPLETED") {
      setTxnStatus("customer__completed");
      socketRef.current.socket.emit("customer:completed:ack", {
        txn_reference,
      });
    }
  });

  return (
    <SocketContext.Provider
      value={{
        socket: socketRef.current.socket,
        socketConnected,
        handleTxRef,
        txn_status,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
export default SocketProvider;
