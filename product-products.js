import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { Model, Collection } from "./model-collection.js";

const add = (a, b) => a + b;

class Product extends Model{

}

class Products extends Collection {
    totalPrice(){
        return _.go(
            this,
            _.map(p => p.get('price')),
            _.reduce(add)
        )
    }
}

const products = new Products();
products.add(new Product({ id: 1, price: 10000}));
console.log(products.totalPrice());
products.add(new Product({ id: 3, price: 25000}));
console.log(products.totalPrice());
products.add(new Product({ id: 5, price: 35000}));
console.log(products.totalPrice());