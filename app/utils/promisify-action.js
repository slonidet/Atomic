export default (dispatch, actionCreator) => (payload) => new Promise((resolve, reject) => {
  dispatch(actionCreator({ ...payload, defer: { resolve, reject } }));
});
