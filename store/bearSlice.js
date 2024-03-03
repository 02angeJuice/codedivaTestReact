export const bearSlice = set => ({
  bears: 0,
  addBear: () => set(state => ({bears: state.bears + 1})),
  removeAllBear: () => set({bears: 0}),
  reset: () => {
    set({
      bears: 0,
    });
  },
});
