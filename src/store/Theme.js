import { create } from 'zustand';

const useTheme = create((set) => ({
  theme: {
    first: '#eb667b',
    second: '#3d4b92',
    third: '#a49eff',
    fourth: '#fff',
    fifth: '#ff9a66',
  },
  increasePopulation: () => set((state) => ({ theme: state.theme + 1 })),
  updateTheme: (payload) => {
    set({ theme: payload });
  },
}));

export default useTheme;
