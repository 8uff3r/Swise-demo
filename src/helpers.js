export default {
  getImageUrl(name) {
    return new URL(`../assets/${name}`, import.meta.url).href;
  },
};
