import { filter, from } from 'rxjs'
import { Product } from '../models/product'

let product1 = new Product()
let product2 = new Product()
let product3 = new Product()
let product4 = new Product()

product1 = {
    id:1,
    name:"laptop",
    price:500
}
product2 = {
    id:2,
    name:"monitor",
    price:200
}
product3 = {
    id:3,
    name:"PC",
    price:800
}
product4 = {
    id:4,
    name:"micro",
    price:20
}

const obsProducts = from([product1,product2,product3,product4])

obsProducts.subscribe(x=>console.log("P:" + x.name));

obsProducts
    .pipe(filter(product => product.price > 300))
    .subscribe(x=>console.log("F:" + x.name));