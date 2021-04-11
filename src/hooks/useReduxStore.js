import { useSelector } from "react-redux";

const useReduxStore = (name = null) => {
  const reduxStore = useSelector((state) => state);
  if (name) {
    return reduxStore.modalsReducer.filter((element) => element.id === name);
  }
  return reduxStore;
};

export default useReduxStore;
