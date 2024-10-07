export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for this endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count); // Update the count

  // Check if the count is 5 or more
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
