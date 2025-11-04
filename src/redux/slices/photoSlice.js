import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch photos
export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10");
  return res.data;
});

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default photoSlice.reducer;
