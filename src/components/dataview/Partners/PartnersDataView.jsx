import { poolsPageSize } from "../../../util/constants.js";
import { DataView } from "primereact/dataview";
import FundCard from "../../card/FundCard.jsx";
import { Panel } from "primereact/panel";

export const PartnersDataView = ({ visitedPools }) => {
  const isPoolListOnePage = (visitedPools) => {
    return visitedPools.length > poolsPageSize;
  };

  const itemTemplate = (pool) => {
    if (!pool) {
      return;
    }
    return (
      <div className="col-12 md:col-6 lg:col-4 xl:col-3 relative mt-4 p-2">
        <FundCard pool={pool} />
      </div>
    );
  };

  return (
    <Panel header="Connexian partners previously visited" className="text-xl">
      <DataView
        value={visitedPools}
        itemTemplate={itemTemplate}
        layout="grid"
        paginator={isPoolListOnePage(visitedPools)}
        rows={poolsPageSize}
      />
    </Panel>
  );
};
