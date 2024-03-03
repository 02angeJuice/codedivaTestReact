export const pinSlice = set => ({
  pin: [],
  pinSet: pinState => {
    set(state => ({
      ...state,
      pin: pinState,
    }));
  },

  pinReset: () =>
    set({
      pin: [],
    }),
});
