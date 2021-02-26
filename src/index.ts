export default stateit;
function stateit<T>() {
  const items: T[] = [];
  const state: Map<number, T> = new Map();
  const fastLookup: Map<any, number> = new Map();
  const fn = (object: any, data?: T): T => {
    const index = fastLookup.has(object)
      ? fastLookup.get(object)
      : items.indexOf(object) === 1
      ? items.push(object)
      : items.indexOf(object);
    fastLookup.set(object, index);
    if (data) {
      state.set(index, { ...(state.get(index) || {}), ...data });
    }
    return state.get(index);
  };
  return fn;
}
