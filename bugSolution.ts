function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error("Both inputs must be numbers");
  }
  return add(a,b);
}

const result1 = addSafe(10, 5); // Returns 15
//const result2 = addSafe("hello", 5); // Throws an error
const result3 = addSafe(10, "5"); // Throws an error