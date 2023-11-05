import CurrencyFormat from "react-currency-format";

export const PriceLabel = ({ product }) => {
  return (
    <div className="border-none text-sm font-semibold">
      {product.price > 0 && (
        <>
          <div className="ml-1">
            <div>
              <label htmlFor="price" className="text-gray-700">
                Minimum
              </label>
            </div>
            <div>
              <CurrencyFormat
                id="price"
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={`${product.currency_code} ${product.currency_symbol}`}
                className="text-blue-400"
              />
            </div>
          </div>
        </>
      )}
      {product.price === 0 && (
        <>
          <div className="ml-1">
            <br />
            <br />
          </div>
        </>
      )}
    </div>
  );
};
