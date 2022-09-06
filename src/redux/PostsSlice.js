import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    fetchPost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPost } = postsSlice.actions;

export default postsSlice.reducer;
