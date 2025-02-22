# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error and its solution. The error arises when a function expecting a number receives a string argument. TypeScript's type system prevents this, ensuring type safety.

## Bug
The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call `add` with a string and a number, leading to a type error.

## Solution
The solution involves ensuring that the arguments passed to `add` are numbers. This can be done using type guards or input validation.