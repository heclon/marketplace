import { ConnexianModal } from "../modal/ConnexianModal.jsx";
import { Panel } from "primereact/panel";

export default function FeedCard({ feed }) {
  console.log(feed);
  const { title, text, image, videoUrl } = feed;

  return (
    <>
      {/*Its text*/}
      {videoUrl === "" && (
        <div className="card border-1 h-30rem gap-2 border-gray-300">
          <div className="flex gap-2">
            <img
              alt=""
              src={image}
              className="h-3rem md:h-4rem object-scale-down"
            />
            <div className="pt-2 align-middle text-lg font-bold">{title}</div>
          </div>
          <div className="text-md pt-4">{text}</div>
        </div>
      )}
      {/*Its video*/}
      {videoUrl !== "" && image === "" && (
        <div className="card border-1 h-30rem gap-2 border-gray-300">
          <div className="py-4 text-2xl font-semibold text-blue-800">
            Video from a button
          </div>
          <div className="text-md py-4 font-normal">{text}</div>
          <div className="flex gap-2">
            <ConnexianModal feed={feed} useImage={false} />
          </div>
        </div>
      )}
      {/*Its video*/}
      {videoUrl !== "" && image !== "" && (
        <div className="card border-1 h-auto gap-2 border-gray-300">
          <ConnexianModal feed={feed} useImage={true} />
        </div>
      )}
    </>
  );
}
