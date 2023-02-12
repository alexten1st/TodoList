import { INIT, TOGGLE_SORT } from "../actionCreators/metaActionCreators";

export function initMetaAC(payload) {
    return { type: INIT, payload };
  }
export function toggleSortAC(payload) {
   return {type: TOGGLE_SORT, payload}
}