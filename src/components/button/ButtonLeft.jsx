import { Button } from "primereact/button";
import { pool_footprint } from "../../util/constants.js";
import { useNavigate } from "react-router-dom";

export const ButtonLeft = ({ product, label }) => {
  const navigate = useNavigate();
  const finalUrl = `${product.info}?campaign_footprint=${product.campaign_footprint}&pool_footprint=${pool_footprint}`;
  // console.log("Loading iframe with finalUrl: ", finalUrl);
  return (
    <Button
      label={label}
      className="cursor-pointer justify-center border-none bg-blue-200 text-xs text-blue-700 hover:bg-blue-900 hover:text-white"
      onClick={(event) => {
        event.preventDefault();

        if (product.details_page_source_type === "custom") {
          window.open(product.details_page_custom_url, "_blank", "noreferrer");
        } else {
          navigate("/product-info", {
            state: {
              finalUrl: finalUrl,
            },
          });
        }
      }}
      style={{
        width: "80px",
        height: "20px",
        padding: 0,
        alignContent: "center",
        justifyContent: "center",
        borderTopLeftRadius: "2px",
        borderBottomLeftRadius: "2px",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      }}
    />
  );
};
