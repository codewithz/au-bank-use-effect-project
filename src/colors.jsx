export function getColors() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const colors = ["Green", "Red", "Blue", "Yellow"];
      resolve(colors);
    }, 10000);
  });
  return p;
}
