import { Carousel } from "primereact/carousel";
import FundCard from "../card/FundCard.jsx";
import { Panel } from "primereact/panel";

export default function SuggestedFundsCarousel({
  suggestedPools,
  autoplayInterval,
}) {
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "881px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const poolTemplate = (pool) => {
    return (
      <div className="h-20rem mt-4 px-1 text-center md:py-5">
        <FundCard pool={pool} />
      </div>
    );
  };

  return (
    <Panel header="Investment managers viewed by your team" className="text-xl">
      <div className="hidden md:inline">
        <div className="grid place-content-center md:grid-cols-1 lg:grid-cols-3">
          {/*<div className="md:col-1 lg:col-3 xl:col-4"></div>*/}
          <div className="lg:col-1"></div>
          {/*  <div className="md:col-1"></div>*/}
          <div className="md:col-12 lg:col-10">
            <Carousel
              value={suggestedPools}
              numVisible={2}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              itemTemplate={poolTemplate}
              circular
              autoplayInterval={autoplayInterval}
            />
          </div>
          <div className="lg:col-1"></div>
        </div>
      </div>
      {/*CAROUSEL FOR MOBILE - NOT RESP. OPTIONS*/}
      <div className="md:hidden">
        <Carousel
          value={suggestedPools}
          itemTemplate={poolTemplate}
          numVisible={1}
          numScroll={1}
        />
      </div>
    </Panel>
  );
}
