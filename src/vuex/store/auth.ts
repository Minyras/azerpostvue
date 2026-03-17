import type { Module } from "vuex";
import axios from "axios";

export interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
}

export const auth: Module<AuthState, RootState> = {
  namespaced: true,

  state: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },

  mutations: {
    SET_LOADING(state, payload: boolean) {
      state.loading = payload;
    },
    SET_USER(state, user: any) {
      state.user = user;
    },
    SET_TOKEN(state, token: string) {
      state.token = token;
    },
    SET_ERROR(state, error: string | null) {
      state.error = error;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
    },
  },

  actions: {
    async login({ commit }, payload: { username: string; password: string }) {
      try {
        commit("SET_LOADING", true);
        commit("SET_ERROR", null);

        const res = await axios.post("/api/login", payload);

        const { user, token } = res.data;

        commit("SET_USER", user);
        commit("SET_TOKEN", token);

        localStorage.setItem("token", token);
      } catch (err: any) {
        commit("SET_ERROR", err.response?.data?.message || "Login failed");
      } finally {
        commit("SET_LOADING", false);
      }
    },

    logout({ commit }) {
      commit("LOGOUT");
      localStorage.removeItem("token");
    },
  },

  getters: {
    isAuthenticated: (state): boolean => {
      return !!state.token;
    },
  },
};
