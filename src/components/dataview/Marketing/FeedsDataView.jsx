import { feedsPageSize } from "../../../util/constants.js";
import { DataView } from "primereact/dataview";
import FeedCard from "../../card/FeedCard.jsx";
import { Panel } from "primereact/panel";

export const FeedsDataView = ({ feeds }) => {
  const isFeedsListOnePage = (feeds) => {
    return feeds.length > feedsPageSize;
  };

  const itemTemplate = (feed) => {
    if (!feed) {
      return;
    }
    return (
      <div className="col-12 md:col-4 lg:col-4 mt-4 gap-2 p-2">
        <FeedCard feed={feed} />
      </div>
    );
  };

  return (
    <Panel header="What's new dynamic content" className="text-xl">
      <DataView
        value={feeds}
        itemTemplate={itemTemplate}
        layout="grid"
        paginator={isFeedsListOnePage(feeds)}
        rows={feedsPageSize}
      />
    </Panel>
  );
};
