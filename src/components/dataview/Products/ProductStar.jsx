export const getProductFavouriteStatus = (product) => {
  if (product.favourite) return "fa-solid text-yellow-300";
  else return "fa-regular text-blue-100";
};
