import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database , you have to async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    console.log(storedCart);
    for (const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quality = storedCart[id];
             addedProduct.quality = quality;
             savedCart.push(addedProduct);
        }
    }
    
    return savedCart;
}

export default cartProductsLoader;