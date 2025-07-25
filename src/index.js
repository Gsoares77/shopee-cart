import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

// carrin'ho do Usuario
const myCart = [];

// lista de favoritos
const myWhishList = [

]

console.log("Welcome to the your shopee cart!!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("lamborghini", 39.99, 3)

// adicionar dois itens do carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// remover itens do carrinho
await cartService.removeItem(myCart, item1)
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)
await cartService.displayCart(myCart)

// deletar dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);


await cartService.calculateTotal(myCart)