import { API, URL_API } from "./const.api";

export const AuthAPI = {
  getProduct: (data) => API.get(`${URL_API}/auth/product`),
  getCategories: (data) => API.get(`${URL_API}/auth/categories`),
};
