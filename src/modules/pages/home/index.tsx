import AddBank from "@common/component/add-bank";
import { AddBankModal } from "@common/component/modals/add-bank";
import TransactionHistory from "@common/component/transaction-history";
import { getBankAccounts, setNFCToken } from "@common/service/storage";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const toggleModal = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (id) {
      setNFCToken(id);
    }
  }, [id]);

  return (
    <>
      {getBankAccounts().length ? (
        <TransactionHistory toggleModal={toggleModal} />
      ) : (
        <AddBank toggleModal={toggleModal} />
      )}
      <AddBankModal isOpen={open} toggleOpen={toggleModal} />
    </>
  );
};

export default Home;
