import { ScrollPanel } from "primereact/scrollpanel";

export const ScrollableProductDescription = ({ description }) => {
  return (
    <>
      {description !== "" ? (
        <div className="scrollpanel-description mt-1 flex align-top">
          <ScrollPanel
            style={{ width: "95%", height: "55px", wordBreak: "keep-all" }}
          >
            <p className="text-md font-normal text-blue-700 ">{description}</p>
          </ScrollPanel>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
