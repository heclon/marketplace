import { Chips } from "primereact/chips";
import { RadioButton } from "primereact/radiobutton";
import { categoryOptions } from "../../../util/constants.js";

export const ProductSearchBar = ({
  selectedCategory,
  setSelectedCategory,
  keywords,
  setKeywords,
}) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-12 md:col-6 pt-6 md:pt-4">
          <span className="p-float-label">
            <Chips
              id="searchKeywords"
              value={keywords}
              onChange={(e) => {
                const lowercaseWords = e.value.map((word) =>
                  word.toLowerCase(),
                );
                setKeywords(lowercaseWords);
              }}
            />
            <label
              htmlFor="searchValues"
              className="text-xs text-gray-500 lg:text-sm"
            >
              Search by fund manager, product, description, or tags.
            </label>
          </span>
        </div>
        <div className="col-12 md:col-6 pl-5 pt-3 md:pt-4">
          <div className="max-w-30rem grid md:flex">
            {categoryOptions.map((category) => {
              return (
                <div
                  key={category.key}
                  className="col-6 md:col-3 field-radiobutton mt-2 text-sm"
                >
                  <RadioButton
                    id="category"
                    name="category"
                    inputId={category.key}
                    value={category}
                    onChange={(category) => {
                      setSelectedCategory(category.value.key);
                    }}
                    checked={selectedCategory === category.key}
                  />
                  <label htmlFor={category.key}>{category.name}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
