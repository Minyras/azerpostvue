import type LoginPayload from "@/types/loginType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk<any, LoginPayload>(
  "auth/loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/login", payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);
