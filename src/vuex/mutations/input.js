import { INPUT } from "../actions/input";

export const input = {
  [INPUT] (state, keyword) {
    state.input.value = keyword
  },
};
