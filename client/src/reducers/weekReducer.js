import { FETCH_WEEK } from "../actions/types";

export default function(state = [], action) {
   switch (action.type) {
      case FETCH_WEEK:
         return action.payload || false;
      default:
         return state;
   }
}
