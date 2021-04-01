import { useSelector } from "react-redux";

const ListPage = () => {
  const translationList = useSelector((state) => state.listReducer);
  const arr = translationList.map((element) => element.translation);

  return <>{translationList.length < 1 ? <h1>list is empty</h1> : arr}</>;
};

export default ListPage;
