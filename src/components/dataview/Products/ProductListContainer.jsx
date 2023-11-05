import { getProductFavouriteStatus } from "./ProductStar.jsx";
import { useState } from "react";
import { Tag } from "../../tag/Tag.jsx";
import { ProductImage } from "../../image/ProductImage.jsx";
import { PriceLabel } from "../../label/PriceLabel.jsx";
import { ProductStar } from "../../icon/ProductStar.jsx";
import { ButtonLeft } from "../../button/ButtonLeft.jsx";
import { ButtonRight } from "../../button/ButtonRight.jsx";
import { ScrollableProductDescription } from "../../scrollableTextArea/ScrollableProductDescription.jsx";

export const ProductListContainer = (product) => {
  const [isFavouriteProduct, setIsFavouriteProduct] = useState(
    getProductFavouriteStatus(product),
  );

  return (
    <>
      {/*MAIN CONTAINER CONTAINS ITEMS ONLY*/}
      <div className="col-12 relative">
        {/*Image and name*/}
        <div className="flex flex-col gap-0">
          <div className="px-1 pt-1">
            <ProductImage productImageUrl={product.image} />
          </div>
          <div className="col-8 md:text-md left-1 justify-start pr-4 text-sm font-bold uppercase text-blue-700 md:pr-0">
            {product.full_name}
          </div>
        </div>
        {/*Description*/}
        <ScrollableProductDescription product={product} />
        {/*Labels*/}
        <div className="align-items-center flex py-1">
          <div className="flex flex-wrap ">
            <div>
              <h5 className="m-1 rounded-none border-0 bg-blue-100 text-xs font-semibold uppercase text-blue-700">
                {product.category}
              </h5>
            </div>
            <div className="flex flex-wrap">
              {product.tags &&
                product.tags.map((tag) => (
                  <div key={tag}>
                    <Tag tag={tag} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*<div className="absolute right-0 top-0 mt-2 h-14 w-14 grow-0 cursor-pointer">*/}
        {/*  /!*Product favourite star*!/*/}
        {/*  <ProductStar*/}
        {/*    product={product}*/}
        {/*    isFavouriteProduct={isFavouriteProduct}*/}
        {/*    setIsFavouriteProduct={setIsFavouriteProduct}*/}
        {/*  />*/}
        {/*</div>*/}

        <div className="justify-content-between align-items-end mb-2 flex flex-row gap-1">
          {/*Price*/}
          <PriceLabel product={product} />
          {/*Buttons*/}
          <div className="transition-duration-500 bottom-0 right-0 transition-colors">
            <ButtonLeft product={product} label="MORE INFO" />
            <ButtonRight product={product} label="INVEST NOW" />
          </div>
        </div>
      </div>
    </>
  );
};
