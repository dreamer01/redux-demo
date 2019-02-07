export const addUser = user => ({
  type: "ADD_USER",
  payload: user
});

export const deleteUser = user => ({
  type: "DELETE_USER",
  payload: user
});
