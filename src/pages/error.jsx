import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router-dom";
import {
  // faChevronLeft,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
// import { dept_footprint, pool_footprint } from "../util/constants.js";

export default function Error() {
  // const navigate = useNavigate();
  return (
    <>
      <div className="card relative flex h-screen flex-col">
        <div className="relative m-auto flex grow">
          <div className="">
            <div id="error" className="grid text-center">
              <div className="col-12 justify-content-center text-3xl font-bold text-blue-500">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="py-6 text-red-600"
                    style={{ fontSize: "2em" }}
                  />
                </div>
                <div>Product details not found</div>
              </div>
              <div className="col-12">An unexpected error has occurred.</div>
              <div className="col-12">
                {/*<i>{error.statusText || error.message}</i>*/}
              </div>
              <div className="col-12">
                Our team has been notified and will be fixing this issue soon.
              </div>
              {/*<div className="col-12">*/}
              {/* */}
              {/*  <div*/}
              {/*    className=" cursor-pointer text-sm text-blue-500 hover:font-bold hover:underline"*/}
              {/*    onClick={(event) => {*/}
              {/*      event.preventDefault();*/}
              {/*      navigate(`/${pool_footprint}/${dept_footprint}`);*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    <FontAwesomeIcon*/}
              {/*      icon={faChevronLeft}*/}
              {/*      className="text-blue-500"*/}
              {/*    />*/}
              {/*    <span className="pl-1">BACK TO PRODUCTS</span>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
