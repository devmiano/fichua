import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set) => ({
	count: 1,

	increment: () =>
		set((state) => ({
			count: state.count + 1,
		})),

	decrement: () =>
		set((state) => ({
			count: state.count - 1,
		})),

	reset: () => set({ count: 1 }),
});

store = persist(store, { name: 'store' });

export const useStore = create(store);

// fetchCategories: async () => {
// 	set(() => ({ loading: true }));
// 	try {
// 		const response = await axios.get(
// 			'https://fichuastore.herokuapp.com/api/shop/categories/'
// 		);
// 		set((state) => ({
// 			categories: (state.categories = response.data),
// 			loading: false,
// 		}));
// 	} catch (err) {
// 		set(() => ({ hasErrors: true, loading: false }));
// 	}
// },

// 	addCategories: (category) => {
// 	set((state) => ({
// 		categories: [...state.categories, category],
// 	}));
// },
