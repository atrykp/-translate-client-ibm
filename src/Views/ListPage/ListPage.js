import { useSelector } from "react-redux";
import TranslationList from "../../components/Organisms/TranslationList/TranslationList";

const ListPage = () => {
  const translationList = useSelector((state) => state.listReducer);
  const arr = translationList.map((element) => element.translation);

  return <>{<TranslationList></TranslationList>}</>;
};

export default ListPage;
