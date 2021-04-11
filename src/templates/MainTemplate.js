import Notification from "../components/Atoms/Notification/Notification";
import BottomBar from "../components/Organisms/BottomBar/BottomBar";
import useReduxStore from "../hooks/useReduxStore";

const MainTemplate = () => {
  const [notificationModal] = useReduxStore("notification");

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
