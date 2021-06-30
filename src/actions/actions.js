export const UPDATE_MODAL_STATUS = "UPDATE_MODAL_STATUS";

export const updateModalStatus = (id, obj) => ({
  type: UPDATE_MODAL_STATUS,
  payload: {
    id,
    obj,
  },
});
