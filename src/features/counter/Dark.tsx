import { useAppSelector } from "../../app/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { isEqual } from "lodash";

const selectNumCompletedTodos = createSelector(
  (state: RootState) => state,
  (state) => state.counter.ok
);

/* const selectNumCompletedTodos1 = createSelector(
    (state: RootState) => { console.log(1); return state.counter.ok.ok },
    (state: RootState) => { console.log(2); return state.counter.ok.ok },
    (ok, ok1) => { console.log(ok, ok1); return ok + ok1 }
) */

const selectNumCompletedTodos2 = createSelector(
  (state: RootState) => state.counter.ok.ok,
  (state: RootState) => state.counter.ok.ok,
  (ok: number, ok1: number) => `${ok} + ${ok1}`,
  {
    memoizeOptions: {
      equalityCheck: (a, b) => {
        console.log(a, b);
        return a === b;
      },
    },
  }
);

export default function Dark() {
  //const numCompletedTodos = useAppSelector(selectNumCompletedTodos)
  //const numCompletedTodos = useAppSelector(selectNumCompletedTodos1)

  console.log("Dark");
  return <div>Dark</div>;
}
