import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const ButtonRight = ({ product, label }) => {
  const navigate = useNavigate();
  return (
    <Button
      label={label}
      className="cursor-pointer justify-center border-none bg-blue-500 text-xs text-white hover:bg-blue-900 hover:text-white"
      onClick={(event) => {
        event.preventDefault();
        navigate("/product-invest", {
          state: { productEmafUrl: product.raw_emaf_url },
        });
      }}
      style={{
        width: "80px",
        height: "20px",
        padding: 0,
        alignContent: "center",
        justifyContent: "center",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        borderTopRightRadius: "2px",
        borderBottomRightRadius: "2px",
      }}
    />
  );
};
