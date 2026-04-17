import type { CreditState } from "./creditType";
import type { AuthState } from "./loginType";

export interface RootState {
  auth: AuthState;
  credit: CreditState;
}
