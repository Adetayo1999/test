import { SocketContextType } from "../../types/index";
import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { io } from "socket.io-client";

const SocketContext = createContext({} as SocketContextType);

type props = {
  children: React.ReactNode;
};

const SocketProvider = ({ children }: props) => {
  const [txn_reference, setTxnReference] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const socket = io(`${import.meta.env.VITE_AUTH_BASE_URL!}/nfc`);

  const handleTxRef = useCallback(
    (txRef: string) => setTxnReference(txRef),
    []
  );

  useEffect(() => {
    socket.on("connect", () => {
      console.log("CONNECTION ESTABLISHED");
      setSocketConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("CONNECTION CLOSED");
      setSocketConnected(false);
    });
  }, []);

  useEffect(() => {
    socket.on("customer:joined", (data) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    socket.on("customer:transaction:update", (data) => {
      console.log(data);
      if (data.status === "STARTED") {
        socket.emit("customer:started:ack", { txn_reference });
      }

      if (data.status === "CANCELLED") {
        socket.emit("customer:cancelled:ack", { txn_reference });
      }

      if (data.status === "COMPLETED") {
        socket.emit("customer:completed:ack", { txn_reference });
      }
    });
  }, [txn_reference]);

  return (
    <SocketContext.Provider value={{ socket, socketConnected, handleTxRef }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
export default SocketProvider;
