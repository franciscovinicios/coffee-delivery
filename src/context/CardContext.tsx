import { createContext, ReactNode, useState } from "react";
import { CoffeItem } from "../pages/Home/CardCoffee";

interface CartProviderProps {
  children: ReactNode;
}

export interface CartItem extends CoffeItem {
  amount: number;
}

interface CartContextData {
  cart: CartItem[];
  addProduct: (product: CartItem) => void;
  removeProductCart: (productId: number) => void;
  cartItemsTotal: number;
  changeCartItemQuantity: (
    product: CartItem,
    type: "increment" | "decrement"
  ) => void;
  cleanCart: () => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addProduct = (product: CartItem) => {
    const updateCart = [...cart];

    const productExists = updateCart.find((item) => item.id === product.id);

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + product.amount;

    if (productExists) {
      productExists.amount = amount;
    } else {
      const newProduct = {
        ...product,
        amount: amount,
      };
      updateCart.push(newProduct);
    }
    setCart(updateCart);
  };

  const removeProductCart = (productId: number) => {
    const updateCart = [...cart];
    const productIndex = updateCart.findIndex((item) => item.id === productId);

    if (productIndex >= 0) {
      updateCart.splice(productIndex, 1);
      setCart(updateCart);
    } else {
      throw Error();
    }
  };

  function changeCartItemQuantity(product: CartItem, type: string) {
    const updateCart = [...cart];
    const productExists = updateCart.find((item) => item.id === product.id);

    if (productExists) {
      if (type === "increment") {
        productExists.amount = product.amount + 1;
        console.log(type);
      } else {
        if (type === "decrement") {
          productExists.amount = product.amount - 1;
        }
      }
    }
    setCart(updateCart);
  }

  function cleanCart() {
    setCart([]);
  }

  const cartItemsTotal = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.amount;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProductCart,
        cartItemsTotal,
        changeCartItemQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
