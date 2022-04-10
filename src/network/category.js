import { request } from "./request";
export function getCategory() {
  return request({
    url: "/category",
  });
}
export function subCategory(maitKey) {
  return request({
    url: "/subcategory",
    params: { maitKey },
  });
}
