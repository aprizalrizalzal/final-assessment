import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should sum correctly for positive numbers", () => {
  // Arrange
  const a = 1;
  const b = 1;

  // Action
  const actualValue = sum(a, b);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 for non-numeric inputs", () => {
  // Arrange
  const a = "string";
  const b = 1;

  // Action
  const actualValue = sum(a, b);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 for negative numbers", () => {
  // Arrange
  const a = -1;
  const b = 1;

  // Action
  const actualValue = sum(a, b);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if both numbers are negative", () => {
  // Arrange
  const a = -1;
  const b = -1;

  // Action
  const actualValue = sum(a, b);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return correct sum for multiple positive numbers", () => {
  // Arrange
  const a = 5;
  const b = 10;

  // Action
  const actualValue = sum(a, b);

  // Assert
  const expectedValue = 15;
  assert.equal(actualValue, expectedValue);
});
