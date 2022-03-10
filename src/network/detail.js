import { request } from "./request";

export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}
export function getRecommend(iid) {
  return request({
    url: "/recommend",
    params: {
      iid,
    },
  });
}

//针对商品详情页进行数据封装
export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.discountDesc;
    this.conDesc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.highPrice;
    this.discount = itemInfo.lowNowPrice;
    this.realPice = itemInfo.price;
    this.columns = columns;
    this.services = services;
  }
}
export class ShopInfo {
  constructor(ShopInfo) {
    this.name = ShopInfo.name;
    this.level = ShopInfo.level;
    this.logo = ShopInfo.shopLogo;
    this.shopUrl = ShopInfo.shopUrl;
    this.score = ShopInfo.score;
    this.cFans = ShopInfo.cFans;
    this.cGoods = ShopInfo.cGoods;
    this.cSells = ShopInfo.cSells;
  }
}
export class GoodsParams {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.set = info.set;
    this.sizes = rule.tables;
    this.know = rule.disclaimer;
  }
}
