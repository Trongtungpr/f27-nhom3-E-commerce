import { API, URL_API } from "./const.api";

export const ProductAPI = {
  getProducts: (data) => API.get(`${URL_API}/product`),
};
