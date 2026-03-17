import { createStore } from "vuex";
import type { RootState } from "@reduxjs/toolkit/query";
import { auth } from "./auth";
export const store = createStore<RootState>({
  modules: {
    auth,
  },
});
