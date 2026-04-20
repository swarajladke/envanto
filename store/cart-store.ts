import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products } from "@/lib/data";
import { useToastStore } from "@/store/toast-store";

type CartItem = {
  productId: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  bumpKey: number;
  addItem: (productId: string) => void;
  incrementItem: (productId: string) => void;
  decrementItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      bumpKey: 0,
      addItem: (productId) => {
        set((state) => {
          const existing = state.items.find((item) => item.productId === productId);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
              ),
              bumpKey: state.bumpKey + 1
            };
          }
          return { items: [...state.items, { productId, quantity: 1 }], bumpKey: state.bumpKey + 1 };
        });
        useToastStore.getState().push("Added to cart", "success");
      },
      incrementItem: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
          ),
          bumpKey: state.bumpKey + 1
        })),
      decrementItem: (productId) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.productId === productId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
            )
            .filter((item) => item.quantity > 0)
        })),
      removeItem: (productId) => {
        set((state) => ({ items: state.items.filter((item) => item.productId !== productId) }));
        useToastStore.getState().push("Item removed", "neutral");
      },
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: () =>
        get().items.reduce((total, item) => {
          const product = products.find((entry) => entry.id === item.productId);
          if (!product) return total;
          return total + product.price * item.quantity;
        }, 0)
    }),
    {
      name: "pixelforge-cart"
    }
  )
);
