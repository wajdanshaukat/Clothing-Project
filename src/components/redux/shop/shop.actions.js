export const SET_COLLECTIONS = "SET_COLLECTIONS";
export const setCollections = (collections) => ({
  type: SET_COLLECTIONS,
  payload: collections,
});

export const fetchCollections = () => (dispatch) => {
  fetch("/api/collections")
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCollections(data));
    })
    .catch((error) => console.error("Error fetching collections:", error));
};
