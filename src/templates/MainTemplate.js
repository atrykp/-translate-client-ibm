import Notification from "../components/Atoms/Notification/Notification";
import BottomBar from "../components/Organisms/BottomBar/BottomBar";
import { useSelector } from "react-redux";

const MainTemplate = () => {
  const modals = useSelector((state) => state.modalsReducer);
  const [notificationModal] = modals.filter(
    (element) => element.id === "notification"
  );

  return (
    <>
      {notificationModal.isActive && (
        <Notification>{notificationModal.content}</Notification>
      )}
      <BottomBar />
    </>
  );
};

export default MainTemplate;
