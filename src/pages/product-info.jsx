import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../components/spinner/LoadingSpinner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { dept_footprint, pool_footprint } from "../util/constants.js";

export default function ProductInfo() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { finalUrl } = state;
  const [loading, setLoading] = useState(true);

  const hideSpinner = () => {
    setLoading(false);
  };

  // console.log("ProductInfo received and will show iframe finalUrl: ", finalUrl);

  return (
    <>
      <div className="card min-h-screen flex-row">
        <div id="product-info" className="pt-1">
          <div
            className="w-fit cursor-pointer text-sm text-blue-500 hover:font-bold hover:underline"
            onClick={(event) => {
              event.preventDefault();
              navigate(`/${pool_footprint}/${dept_footprint}`);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-blue-500" />
            <span className="pl-1">BACK TO PRODUCTS</span>
          </div>

          <div className="w-auto p-0">
            {loading ? (
              <div className="justify-content-center card-container flex flex-wrap">
                <LoadingSpinner />
              </div>
            ) : null}
            <div className="scaled-iframe">
              <iframe
                src={finalUrl}
                className="h-screen w-full"
                onLoad={() => {
                  // console.log("Loading iframe finalUrl: ", finalUrl);
                  hideSpinner();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
