import type { Store as VuexStore, Module as VuexModule } from "vuex";

declare module "vuex" {
  export type Store<S> = VuexStore<S>;
  export type Module<S, R> = VuexModule<S, R>;
}
