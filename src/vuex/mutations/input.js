import { REQUEST_INPUT, SUCCESS_INPUT, FAILED_INPUT } from "../actions/input";

export const input = {
  [REQUEST_INPUT] () {
  },
  [SUCCESS_INPUT] (state, hoge) {
    state.input.value = hoge.keyword;
    state.input.total = hoge.name;
  },
  [FAILED_INPUT] () {
  },
};
