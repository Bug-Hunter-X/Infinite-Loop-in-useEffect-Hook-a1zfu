# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook.  The `MyComponent` attempts to reset the `count` state when it exceeds 5. However, this creates a continuous loop because each state update triggers another `useEffect` call.

## Bug Description
The issue lies in the `useEffect`'s dependency array `[count]`.  When `setCount(0)` is called, the component re-renders. This leads to a change in the `count` value, thus triggering another execution of `useEffect`, and restarting the cycle.

## Solution
The solution involves carefully managing state updates within `useEffect` to avoid infinite loops.  Using a conditional check and preventing unnecessary state changes can resolve this common React bug.