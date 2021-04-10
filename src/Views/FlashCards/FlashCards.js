import FlashCardsList from "../../components/Organisms/FlashCardsList/FlashCardsList";
import MainTemplate from "../../templates/MainTemplate";
import EditModal from "../../components/Molecules/EditModal/EditModal";
import { useSelector } from "react-redux";

const FlashCards = () => {
  const [editModal] = useSelector((state) => state.modalsReducer).filter(
    (element) => element.id === "editModal"
  );

  return (
    <>
      {editModal?.isActive && <EditModal />}
      <FlashCardsList />
      <MainTemplate />
    </>
  );
};

export default FlashCards;
