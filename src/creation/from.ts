import { Product } from '../models/product';
import { from } from 'rxjs';

let product1 = new Product();
let product2 = new Product();

product1.id=1
product1.name="Laptop"
product1.price=500

product2.id=2
product2.name="Monitor"
product2.price=200


const obs = from([product1,product2])

obs.subscribe((product)=>{
    console.log("Recibimos producto:")
    console.log(product)
})
