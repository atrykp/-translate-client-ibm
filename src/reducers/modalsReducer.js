import { UPDATE_MODAL_STATUS } from "../actions/actions";

export const NOTIFICATION = "notification";
export const EDIT_MODAL = "editModal";

export const FLASH_CARDS = "flashCards";
export const TRANSLATION_ELEMENTS = "translationElements";

let modalsStore = [
  { id: NOTIFICATION, content: "", isActive: false },
  {
    id: EDIT_MODAL,
    fromWord: "",
    toWord: "",
    isActive: false,
    _id: "",
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
