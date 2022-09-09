// Difference between callback and useCallback Hook ?
// Ans->The React useCallback Hook returns a memoized callback function.This allows us to isolate resource intensive functions so that they will not automatically run on every render.The useCallback Hook only runs when one of its dependencies update.This can improve performance.

//callback->


// What is Props Drilling Concept ?What is State Uplifting ?
// Ans-> Prop drilling refers to the process of sending props from a higher-level component to a lower-level component.
// The common approach to share state between two components is to move the state to common parent of the two components.This approach is called as lifting state up in React.js

// Difference between useEffect and useContext ?
// Ans->The useEffect Hook allows you to perform side effects in your components.useEffect accepts two arguments.The second argument is optional.useEffect(<function>, <dependency>).
// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.In reactContext there are there are two phases createContext and usecontext.