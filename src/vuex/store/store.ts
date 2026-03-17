import { createStore } from "vuex";

import { auth, type RootState } from "./auth";
export const store = createStore<RootState>({
  modules: {
    auth,
  },
});
