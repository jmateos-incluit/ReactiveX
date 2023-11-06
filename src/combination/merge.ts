import { Product } from '../models/product';
import { Client } from '../models/client';
import { of, merge } from 'rxjs';

let product1 = new Product()
let product2 = new Product()
let client1 = new Client()
let client2 = new Client()

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

client1 = {
    id:1,
    name:"Joaquin"
}

client2 = {
    id:2,
    name:"Eduardo"
}

const obs1 = of(product1)
const obs2 = of(product2)
const obs3 = of(client1)
const obs4 = of(client2)

obs1.subscribe(x=>console.log(x))
obs2.subscribe(x=>console.log(x))
obs3.subscribe(x=>console.log(x))
obs4.subscribe(x=>console.log(x))

merge(obs1,obs2,obs3,obs4).subscribe(x=>{
    console.log("merge")
    console.log(x)
})