import { useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { ProductSearchBar } from "../../search/ProductSearchBar/ProductSearchBar.jsx";
import { ProductListContainer } from "./ProductListContainer.jsx";
import { ProductGridContainer } from "./ProductGridContainer.jsx";
import { dept_footprint, pool_footprint, productsPageSize } from "../../../util/constants.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const ProductDataView = ({
  products,
  selectedCategory,
  setSelectedCategory,
  keywords,
  setKeywords,
}) => {
  const navigate = useNavigate();
  const [layout, setLayout] = useState("grid");
  const isProductListOnePage = (products) => {
    return products.length > productsPageSize;
  };

  const itemTemplate = (product, layout) => {
    if (!product) {
      return;
    }
    if (layout === "list") return ProductListContainer(product);
    else if (layout === "grid") return ProductGridContainer(product);
  };

  const header = () => {
    return (
      <>
        <div className="align-items-center justify-content-between relative flex h-full">
          <div className="md:col-11 sm:col-10 pl-1 text-2xl text-black">
            Products
          </div>
          <div className="absolute right-0">
            <DataViewLayoutOptions
              layout={layout}
              onChange={(e) => setLayout(e.value)}
            />
          </div>
        </div>
        <div className="text-gray-500">
          <ProductSearchBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            keywords={keywords}
            setKeywords={setKeywords}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="card p-fluid p-4 text-gray-500">
        <div
          className="w-fit cursor-pointer py-4 text-sm text-blue-500 hover:font-bold hover:underline"
          onClick={(event) => {
            event.preventDefault();
            navigate("/partners");
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-blue-500" />
          <span className=" pl-1">BACK TO CONNEXIAN PARTNERS</span>
        </div>
        <div>
          <DataView
            value={products}
            itemTemplate={itemTemplate}
            layout={layout}
            header={header()}
            paginator={isProductListOnePage(products)}
            rows={productsPageSize}
          />
        </div>
      </div>
    </>
  );
};
