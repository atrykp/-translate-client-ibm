import { UPDATE_MODAL_STATUS } from "../actions/actions";

let modalsStore = [
  { id: "notification", content: "", isActive: false },
  {
    id: "editModal",
    from: "",
    to: "",
    isActive: false,
    elementId: "",
    section: "",
  },
];

const modalsReducer = (store = modalsStore, action) => {
  switch (action.type) {
    case UPDATE_MODAL_STATUS:
      return store.map((element) => {
        const { obj, id } = action.payload;
        if (id !== element.id) {
          return element;
        }
        return { ...element, ...obj };
      });
    default:
      return store;
  }
};

export default modalsReducer;
