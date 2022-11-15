import { API, URL_API } from "./const.api";

export const ProductAPI = {
  getProducts:() =>  API.get(`${URL_API}/api/product`),
  getCategories: () => API.get(`${URL_API}/categories`),
};
