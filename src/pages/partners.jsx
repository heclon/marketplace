import { PartnersLayout } from "../components/dataview/Partners/PartnersLayout.jsx";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/spinner/LoadingSpinner.jsx";
import { useNavigate } from "react-router-dom";
import {
  fetchMockedSuggestedPools,
  fetchMockedVisitedPools,
} from "../service/MockPoolService.js";
import { fetchMockedFeeds } from "../service/MockedFeedService.js";
// import { fetchPools } from "../service/PoolService.js";

function Partners() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [visitedPools, setVisitedPools] = useState([]);
  const [suggestedPools, setSuggestedPools] = useState([]);
  const [feeds, setFeeds] = useState([]);
  // 1. Validate user session otherwise redirect to login
  // useEffect(() => {
  //   if (!result) {
  //      redirect("/login");
  //   }
  // }, [navigate, result]);

  const getVisitedPools = async () => {
    // 2.1 GET call to /environment/get for pools data
    // const results = await fetchPools();
    const results = await fetchMockedVisitedPools();
    setVisitedPools(results);
    setIsLoading(false);
  };

  const getSuggestedPools = async () => {
    // 2.1 GET call to /environment/get for pools data
    // const results = await fetchPools();
    const results = await fetchMockedSuggestedPools();
    setSuggestedPools(results);
    setIsLoading(false);
  };

  const getFeeds = async () => {
    const result = await fetchMockedFeeds();
    // const advisor = null
    if (result !== null) {
      setFeeds(result);
    } else {
      console.log("Feed is not loaded! ");
    }
  };

  useEffect(() => {
    getVisitedPools();
    getSuggestedPools();
    getFeeds();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  // 2.2. Show the Spinner until data is loaded
  return (
    <div id="product-list">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <PartnersLayout
          visitedPools={visitedPools}
          suggestedPools={suggestedPools}
          feeds={feeds}
        />
      )}
    </div>
  );
}

export default Partners;
