import { dept_footprint, pool_footprint } from "../../util/constants.js";
import { useNavigate } from "react-router-dom";

export default function PoolCard({ pool }) {
  const navigate = useNavigate();
  const { image, pool_name } = pool;
  console.log(pool_name);

  const connexianMarketPage = `/${pool_footprint}/${dept_footprint}`;
  return (
    <div className="card border-1 justify-content-center h-15rem relative flex cursor-pointer border-gray-300 hover:bg-gray-200">
      <div className="md:w-25rem h:full grid grid-flow-row shadow-none">
        <img alt={pool_name} src={image} className="h-fit w-fit" />
        {pool_name === "Connexian Adviser Platform" && (
          <div className="justify-content-center flex w-full flex-wrap">
            <div className="justify-center gap-2 pb-4">
              <a
                className="text-lg font-semibold text-blue-500 hover:underline"
                onClick={() => {
                  console.log(
                    "Redirecting to connexianMarketPage: ",
                    connexianMarketPage,
                  );
                  navigate(connexianMarketPage);
                }}
              >
                See all products
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
