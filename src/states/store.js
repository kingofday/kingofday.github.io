import { create } from 'zustand';
const useStore = create((set, get) => ({
    user: null,
    theme: "light",
    setUser: (data) => set({ user: data }),
    changeTheme: () => {
        let theme = get().theme;
        return set({ theme: theme === "light" ? "dark" : "light" })
    }
}));
export default useStore;