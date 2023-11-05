import { useState } from "react";
import { getProductFavouriteStatus } from "./ProductStar.jsx";
import { Tag } from "../../tag/Tag.jsx";
import { ProductImage } from "../../image/ProductImage.jsx";
import { PriceLabel } from "../../label/PriceLabel.jsx";
// import { ProductStar } from "../../icon/ProductStar.jsx";
import { ButtonLeft } from "../../button/ButtonLeft.jsx";
import { ButtonRight } from "../../button/ButtonRight.jsx";
import { ScrollableProductDescription } from "../../scrollableTextArea/ScrollableProductDescription.jsx";

export const ProductGridContainer = (product) => {
  // const [isFavouriteProduct, setIsFavouriteProduct] = useState(
  //   getProductFavouriteStatus(product),
  // );

  return (
    <>
      {/*MAIN CONTAINER*/}
      <div className="col-12 md:col-6 lg:col-4 xl:col-3 relative mt-2 p-2">
        {/*Item card container*/}
        <div className="border-1 surface-border surface-card border-round h-17rem">
          {/*Top-right corner category label*/}
          <div className="justify-content-end flex flex-wrap">
            <h5 className="-mt-2 mr-2 rounded-none border-0 bg-gray-100 text-xs font-semibold uppercase text-blue-700">
              {product.category}
            </h5>
          </div>

          {/*Content: logo, title, des, labels, star*/}
          <div className="grid grid-flow-row place-items-start px-3 pt-1">
            {/*Image and name*/}
            <div className="align-items-center flex flex-row gap-1">
              <div className="pl-3">
                <ProductImage productImageUrl={product.image} />
              </div>
              <span className="text-md flex h-32 w-full justify-start align-top font-bold uppercase text-blue-700">
                {product.full_name}
              </span>
            </div>
          </div>

          <div className="border-none">
            <div className="absolute bottom-0 grid-flow-col grid-rows-2 border-none pb-4 pl-3 text-sm font-semibold">
              {/*Description*/}
              <ScrollableProductDescription description={product.description} />
              {/*Labels*/}
              <div className="my-2 flex border-none">
                {product.tags &&
                  product.tags.map((tag) => (
                    <div key={tag}>
                      <Tag tag={tag} />
                    </div>
                  ))}
              </div>
              {/*Price*/}
              <div className="">
                <PriceLabel product={product} />
              </div>
            </div>
            {/*Product favourite star and buttons*/}
            <div className="transition-duration-500 absolute bottom-0 right-0 pb-4 pr-4 transition-colors">
              {/*<div className="mb-3 mr-0 mt-2 h-14 w-14 cursor-pointer text-right lg:mr-3">*/}
              {/*  <ProductStar*/}
              {/*    product={product}*/}
              {/*    isFavouriteProduct={isFavouriteProduct}*/}
              {/*    setIsFavouriteProduct={setIsFavouriteProduct}*/}
              {/*  />*/}
              {/*</div>*/}
              {/*Buttons*/}
              <ButtonLeft product={product} label="MORE INFO" />
              <ButtonRight product={product} label="INVEST NOW" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
