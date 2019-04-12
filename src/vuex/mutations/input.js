import { REQUEST_INPUT, SUCCESS_INPUT, FAILED_INPUT } from "../actions/input";

export const input = {
  [REQUEST_INPUT] () {
  },
  [SUCCESS_INPUT] (state, keyword) {
    state.input.value = keyword
  },
  [FAILED_INPUT] () {
  },
};
