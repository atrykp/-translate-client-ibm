import { UPDATE_MODAL_STATUS } from "../actions/actions";

let modalsStore = [{ id: "notification", content: "", isActive: false }];

const modalsReducer = (store = modalsStore, action) => {
  switch (action.type) {
    case UPDATE_MODAL_STATUS:
      return store.map((element) => {
        const { obj, id } = action.payload;
        if (id !== element.id) {
          console.log("id nie pasuje");

          return element;
        }
        return { ...element, ...obj };
      });
    default:
      return store;
  }
};

export default modalsReducer;
