import { create } from "zustand";
const useStore = create((set, get) => ({
  user: null,
  theme: "light",
  setUser: (data) => set({ user: data }),
  changeTheme: () => {
    let theme = get().theme;
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.classList.remove(newTheme === "light" ? "dark" : "light");
    document.body.classList.add(newTheme === "light" ? "light" : "dark");
    return set({ theme: newTheme });
  },
}));
export default useStore;
