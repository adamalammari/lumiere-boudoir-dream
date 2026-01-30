import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedScent?: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number, color?: string, scent?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      
      addToCart: (product, quantity = 1, color, scent) => {
        set((state) => {
          const existingItem = state.cart.find(
            item => item.product.id === product.id && 
            item.selectedColor === color && 
            item.selectedScent === scent
          );
          
          if (existingItem) {
            return {
              cart: state.cart.map(item =>
                item.product.id === product.id && 
                item.selectedColor === color && 
                item.selectedScent === scent
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          
          return {
            cart: [...state.cart, { product, quantity, selectedColor: color, selectedScent: scent }]
          };
        });
      },
      
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter(item => item.product.id !== productId)
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set((state) => ({
          cart: state.cart.map(item =>
            item.product.id === productId ? { ...item, quantity } : item
          )
        }));
      },
      
      clearCart: () => set({ cart: [] }),
      
      addToWishlist: (product) => {
        set((state) => {
          if (state.wishlist.find(p => p.id === product.id)) {
            return state;
          }
          return { wishlist: [...state.wishlist, product] };
        });
      },
      
      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter(p => p.id !== productId)
        }));
      },
      
      isInWishlist: (productId) => {
        return get().wishlist.some(p => p.id === productId);
      },
      
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'lumiere-store'
    }
  )
);
