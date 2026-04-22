import { createStore } from "vuex";
import { auth } from "../auth";
import { credit } from "../credit";
import type { RootState } from "../../types/RootType";

export const store = createStore<RootState>({
  modules: {
    auth,
    credit,
  },
});
