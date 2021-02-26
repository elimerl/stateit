import stateit from "./src/index";
import test from "ava";
test("Storing state on objects", (t) => {
  const state = stateit<{ message: string }>();
  const obj = { num: 3 };
  state(obj, { message: "Hello world!" });
  t.deepEqual(obj, { num: 3 });
  t.is(state(obj).message, "Hello world!");
});
