import { create } from "zustand";

const useCommentsStore = create((set) => ({
  comments: [],
  setComments: (comments) => set(() => ({ comments: comments })),
}));

export default useCommentsStore;
