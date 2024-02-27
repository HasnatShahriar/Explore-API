const shop ={
  name : 'Innovation Shopping Center',
  address : {
    street : 'kalihati school road',
    upazila : 'kalihati',
    district : 'tangail',
    country : 'bd'
  }
}
console.log(shop);
const jsonShop = JSON.stringify(shop);
console.log(jsonShop);
const shopNormal = JSON.parse(jsonShop);
console.log(shopNormal);