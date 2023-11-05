import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { PlayButtonOverlay } from "../image/PlayButtonOverlay.jsx";
// import FundCard from "../card/FundCard.jsx";
export const ConnexianModal = ({ feed, useImage }) => {
  const { header, title, subTitle, text, image, videoUrl } = feed;
  const [visible, setVisible] = useState(false);

  const headerContent = (
    <div className="text-4xl font-bold text-blue-800">{header}</div>
  );

  return (
    <>
      {useImage === false && (
        <Button
          label="View terms and conditions"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
      )}
      {useImage === true && (
        <div className="grid">
          <div
            className="h:full container -m-4 mb-3 grid w-fit grid-flow-row place-items-center justify-center shadow-none"
            // className="container place-items-center justify-center shadow-none"
            onClick={() => setVisible(true)}
          >
            <img
              alt={title}
              src={image}
              className="h-fit w-fit cursor-pointer"
              onClick={() => setVisible(true)}
            />
            <PlayButtonOverlay />
          </div>
          <div className="pt-2 align-middle text-2xl font-bold text-blue-800">
            {title}
          </div>
          <div className="text-md pt-4">{text}</div>
        </div>
      )}
      <Dialog
        header={headerContent}
        visible={visible}
        style={{ width: "auto" }}
        breakpoints={{ "960px": "50vw", "641px": "100vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="scaled-iframe">
          <iframe
            width="830"
            height="460"
            src={`${videoUrl}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Divider />
          <div className="p-2 text-xl font-bold text-blue-800">{title}</div>
          <div className="p-2 text-lg font-normal text-blue-800">{text}</div>
        </div>
      </Dialog>
    </>
  );
};
