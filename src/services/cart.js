// quais ações meu carrinho pode fazer?


// CASOS DE USO
// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
};

// calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nshopee cart TOTAL is!")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`TOTAL: ${result}`);
};


// deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index != +1) {
        userCart.splice(index, 1);
    }
};

// remover um item
async function removeItem(userCart, item) {
    // primeiro encotrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    // caso o item não seja encontrado
    if (indexFound == -1) {
        console.log("item não encontrado")
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }


    // transforma o indice visual do usuario, para o indice do backend    
    // const deleteIndex = index - 1;

    // é maior do que  zero e se é menor do que o tamanho do carrinho
    // if(index >= 0 && index < userCart.length){
    //     userCart.splice(index, 1)
    // }
};

async function displayCart(userCart) {
    console.log("\nshopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | subtotal= | ${item.subtotal()}`)
    })
}




export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
    displayCart
}