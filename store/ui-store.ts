import { create } from "zustand";

type UiState = {
  isSearchOpen: boolean;
  isMobileNavOpen: boolean;
  isQuickViewOpen: boolean;
  quickViewProductId?: string;
  openSearch: () => void;
  closeSearch: () => void;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  isSearchOpen: false,
  isMobileNavOpen: false,
  isQuickViewOpen: false,
  quickViewProductId: undefined,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleMobileNav: () => set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  openQuickView: (productId) => set({ isQuickViewOpen: true, quickViewProductId: productId }),
  closeQuickView: () => set({ isQuickViewOpen: false, quickViewProductId: undefined })
}));
