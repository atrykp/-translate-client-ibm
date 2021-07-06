import { useDispatch } from "react-redux";
import { updateModalStatus } from "../actions/actions";
export const useRemoveNotification = () => {
  const dispatch = useDispatch();
  const removeNotification = (time) => {
    setTimeout(() => {
      dispatch(
        updateModalStatus("notification", {
          content: "",
          isActive: false,
        })
      );
    }, time);
  };
  return removeNotification;
};
