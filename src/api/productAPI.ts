import { HttpUtils } from "../utils/HttpUtils.ts";

export const PRODUCT_ENDPOINTS = {
  getProducts: "products",
  createProduct: "products",
};

export class ProductAPI {
  public static async getProducts() {
    try {
      const response = await fetch(
        `${HttpUtils.getBaseUrl()}${PRODUCT_ENDPOINTS.getProducts}`,
        {
          headers: {
            Authorization: HttpUtils.getBearerToken(),
          },
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
