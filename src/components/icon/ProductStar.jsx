import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { updateProductFavouriteStatus } from "../../util/updateProductFavouriteStatus.js";

export const ProductStar = ({
  product,
  isFavouriteProduct,
  setIsFavouriteProduct,
}) => {
  return (
    <FontAwesomeIcon
      icon={faStar}
      className={`${isFavouriteProduct} text-2xl`}
      onClick={() => {
        updateProductFavouriteStatus(product, setIsFavouriteProduct);
      }}
    />
  );
};
