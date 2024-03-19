import { create } from "zustand";
import { fetchComments } from "../api";

const useCommentsStore = create((set) => ({
  comments: [],
  setComments: (comments) => set(() => ({ comments: comments })),
  fetch: async () => {
    const response = await fetchComments();
    set({ comments: response.data });
  },
}));

export default useCommentsStore;
