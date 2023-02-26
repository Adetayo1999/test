import AddBank from "@common/component/add-bank";
import { AddBankModal } from "@common/component/modals/add-bank";
import TransactionHistory from "@common/component/transaction-history";
import { getBankAccounts } from "@common/service/storage";
import { useCallback, useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

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
