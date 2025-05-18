// Description: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// - MinStack() initializes the stack object.
// - void push(int val) pushes the element val onto the stack.
// - void pop() removes the element on the top of the stack.
// - int top() gets the top element of the stack.
// - int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Link: https://leetcode.com/problems/min-stack/description/

// Time complexity: O(1)
// Space complexity: O(n)

class MinStack {
  private stack: { value: number; minValue: number }[] = [];

  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push({ value: val, minValue: val });
    } else {
      const newMinValue = Math.min(
        val,
        this.stack[this.stack.length - 1].minValue
      );
      this.stack.push({ value: val, minValue: newMinValue });
    }
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].value;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].minValue;
  }
}
