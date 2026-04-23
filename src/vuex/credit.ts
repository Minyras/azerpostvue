import type { Module } from "vuex";
import axios from "axios";
import type { CreditState } from "@/types/creditType";
import type { RootState } from "@/types/RootType";
import api from "@/services/api";

export interface CreditModuleState {
  credits: CreditState[];
  loading: boolean;
  error: string | null;
}

export const credit: Module<CreditModuleState, RootState> = {
  namespaced: true,

  state: {
    credits: [],
    loading: false,
    error: null,
  },

  mutations: {
    SET_LOADING(state: any, payload: boolean) {
      state.loading = payload;
    },

    SET_CREDITS(state: any, credits: CreditState[]) {
      state.credits = credits;
    },

    SET_ERROR(state: any, error: string | null) {
      state.error = error;
    },
  },

  actions: {
    async fetchCredits({ commit, rootState }) {
      try {
        commit("SET_LOADING", true);
        commit("SET_ERROR", null);

        const res = await api.get("/credits", {
          headers: {
            Authorization: `Bearer ${rootState.auth.token}`,
          },
        });

        commit("SET_CREDITS", res.data);
      } catch (err: any) {
        commit("SET_ERROR", err.response?.data?.message || "Fetch failed");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    totalAmount: (state: any): number => {
      return state.credits.reduce(
        (sum: number, c: CreditState) => sum + c.amount,
        0,
      );
    },
  },
};
