export const updateProductFavouriteStatus = (
  product,
  setIsFavouriteProduct,
) => {
  // TODO: Call the API to update the product favourite status
  const newValue = !product.favourite;
  product.favourite = newValue;
  let message = "";
  if (newValue) {
    setIsFavouriteProduct("fa-solid text-yellow-300");
    message = "Product added to my favourites";
  } else {
    setIsFavouriteProduct("fa-regular text-blue-100");
    message = "Product removed from my favourites";
  }
  console.log(message, product.full_name);
};
