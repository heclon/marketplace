import axios from "axios";
import { mapProductsFromCampaign } from "../util/mapProductsFromCampaign.js";

export const fetchProducts = async (urlElements) => {
  const params = {
    pool_footprint: urlElements[3],
    department_footprint: urlElements[4],
  };

  try {
    const response = await axios.get(
      `${document._settings.my_api.url}/environment/get`,
      { params },
    );
    console.log("Response: ", response);
    // Map products
    const products = mapProductsFromCampaign(response.data.data.data.campaigns);
    console.log("Products: ", products);
    return products;
  } catch (error) {
    console.log(error);
  }
};
