import { request } from "./request"

export function getDetail(iid){
  return request({
    url:'/detail',
    params: {
      iid
    }
  })  
}
//商品信息展示
export class  Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;

  }
}

//商户信息展示
export class Shop {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sell = shopInfo.cSells;
    this.goodcount = shopInfo.cGoods;
    this.fans = shopInfo.cFans;
    this.score = shopInfo.score;
  }
}

export class GoodsParams {
  constructor(info,rule) {
    this.image = info.image ? info.image[0]:''; 
    this.info = info.set;
    this.rules = rule.tables;
  }
}