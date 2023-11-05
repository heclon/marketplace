import { ProductDataView } from "../components/dataview/Products/ProductDataView.jsx";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/spinner/LoadingSpinner.jsx";
import { validateTokenIsValid } from "../util/validateTokenIsValid.js";
import { useNavigate } from "react-router-dom";
import { Categories, dept_footprint, pool_footprint } from "../util/constants.js";
import { fetchMockedProducts } from "../service/MockProductService.js";
// import { fetchProducts } from "../service/ProductService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const urlElements = window.location.href.split("/");
const isPoolFootprintValid = validateTokenIsValid(urlElements[3]);
const isDeptFootprintValid = validateTokenIsValid(urlElements[4]);

function ProductList() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(Categories.ALL);
  const [keywords, setKeywords] = useState([]);

  // 1. Validate user session otherwise redirect to login
  // useEffect(() => {
  //   if (!result) {
  //      redirect("/login");
  //   }
  // }, [navigate, result]);

  // 2. Validate that the URL contains the <pool_footprint> / <dept_footprint>, both md5 tokens
  // e.g: channel.fundsflow.digital/<pool_footprint>/<dept_footprint>
  if (!isPoolFootprintValid || !isDeptFootprintValid) {
    console.log("redirecting to the error page due to incorrect footprints!");
    navigate(`/error`);
  }

  const areKeywordsInProduct = (product) => {
    if (keywords.length > 0) {
      const regex = new RegExp(keywords.join("|"), "i");

      if (regex.test(product.full_name)) {
        return true;
      }
      if (regex.test(product.description)) {
        return true;
      }
      const tags = product.tags;
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if (regex.test(tag)) {
          return true;
        }
      }
      return false;
    }
  };

  const getProducts = async () => {
    // 2.1 GET call to /environment/get for product data
    // const results = await fetchProducts(urlElements);
    const results = await fetchMockedProducts();

    //Initialise filtered with results
    let filtered = [...results];

    //Filter by category
    if (
      selectedCategory === Categories.RETAIL ||
      selectedCategory === Categories.WHOLESALE
    ) {
      filtered = results.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    //Filter by keywords if any
    if (keywords.length > 0) {
      filtered = filtered.filter(areKeywordsInProduct);
    }

    setProducts(filtered);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();

    return () => {
      // this now gets called when the component unmounts
    };
  }, [keywords, selectedCategory]);

  // 2.2. Show the Spinner until data is loaded
  return (
    <div id="product-list">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <ProductDataView
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            keywords={keywords}
            setKeywords={setKeywords}
          />
        </div>
      )}
    </div>
  );
}

export default ProductList;
