import { wrapper } from "../wrapper/wrapper";
import { BASE_URL } from "../models/shared-url";

export function GetAllProducts() {
    return wrapper.get(`${BASE_URL}/benirvingplt/products/products`);
}
