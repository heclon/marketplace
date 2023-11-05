import { PartnersDataView } from "./PartnersDataView.jsx";
import SuggestedFundsCarousel from "../../carousel/SuggestedFundsCarousel.jsx";
import { FeedsDataView } from "../Marketing/FeedsDataView.jsx";

export const PartnersLayout = ({ visitedPools, suggestedPools, feeds }) => {
  return (
    <div className="card p-fluid text-gray-500">
      {/*THIS WILL BE SHOWN ONLY IF THERE ARE NO FUNDS VIEWED BY YOUR TEAM*/}
      {/*TODO: Change inequality operator for equality operator*/}
      {visitedPools.length !== 0 && (
        <div id="dynamic-content-dataview" className="py-2">
          <FeedsDataView feeds={feeds} />
        </div>
      )}
      <div id="partners-dataview" className="pb-6 pt-2">
        <PartnersDataView visitedPools={visitedPools} />
      </div>

      {suggestedPools.length > 1 && (
        <>
          <div id="suggested-partners-carousel" className="py-2">
            <SuggestedFundsCarousel
              suggestedPools={suggestedPools}
              autoplayInterval={3000}
            />
          </div>
        </>
      )}
    </div>
  );
};
