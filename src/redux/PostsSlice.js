import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

export default postsSlice.reducer;
