import { Product } from '../models/product'
import {from,take,filter} from 'rxjs'

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

console.log("Pipe Filter & Take")
obsProducts
    .pipe(filter(p=>p.price>500))
    .pipe(take(1))
    .subscribe(x=>{
        console.log(x)
    })

console.log("Pipe Take & Filter")
obsProducts
    .pipe(take(2))
    .pipe(filter(p=>p.price>500))
    .subscribe(x=>{
        console.log(x)
    })


console.log("Pipe Filter")
obsProducts
    .pipe(filter(p=>p.price>500))
    .subscribe(x=>{
        console.log(x)
    })


