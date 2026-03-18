
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const products = require('./data/products.json');

console.log("Keys:", Object.keys(products).join(', '));
if (products.products) {
    console.log("Products Count:", products.products.length);
} else {
    console.log("Products array missing!");
}
if (products.categories) {
    console.log("Categories Count:", products.categories.length);
} else {
    console.log("Categories array missing!");
}
