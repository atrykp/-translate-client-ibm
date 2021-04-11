import FlashCardsList from "../../components/Organisms/FlashCardsList/FlashCardsList";
import MainTemplate from "../../templates/MainTemplate";
import EditModal from "../../components/Molecules/EditModal/EditModal";
import useReduxStore from "../../hooks/useReduxStore";

const FlashCards = () => {
  const [editModal] = useReduxStore("editModal");

  return (
    <>
      {editModal?.isActive && <EditModal />}
      <FlashCardsList />
      <MainTemplate />
    </>
  );
};

export default FlashCards;
