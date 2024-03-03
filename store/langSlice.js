export const langSlice = set => ({
  lang: 'en',
  langSet: setlang => {
    set(state => ({lang: setlang}));
  },
});
