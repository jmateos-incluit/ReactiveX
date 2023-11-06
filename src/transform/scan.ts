import { Product } from '../models/product'
import {filter, from, map, scan} from 'rxjs'

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

const products = [product1,product2,product3,product4]

const obsProducts = from(products)

obsProducts
    .pipe(filter(p=>p.price>300))
    .pipe(map(product => {product.price = product.price * 1.2; return product}))
    .pipe(scan((acc,product)=>acc+product.price,0))
    .subscribe(x=>console.log(x))