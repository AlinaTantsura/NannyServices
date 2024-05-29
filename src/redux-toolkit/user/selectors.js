export const selectToken = state => state.user.user.token;
export const selectEmail = state => state.user.user.email;
export const selectId = state => state.user.user.id;
export const selectName = state => state.user.user.name;
export const selectIsLogIn = state => state.user.user.isLogIn;
export const selectError = state => state.user.error;
export const selectIsLoading = state => state.user.isLoading;