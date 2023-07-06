# Chapter-5 Let's Get Hooked

## 1. What is the difference between Named export, Default export, and * as export?

**Named Export:** Named export can export multiple values from a module by explicitly specifying their names. For example, consider a module called "math.js" that contains various mathematical functions. You can export specific functions like this:

 export const Component;
and to import:
 import `{Component}` from `"./Path"`

**Default Export:** A default export allows you to export a single value as the default export of a module. This value can be a function, object, or any other data type. A module can have only one default export. Here's an example:

 export default Component;
and to import:
 import `Component` from `"./path"`

**`* as` Export:** This syntax allows you to import all the named exports from a module into a single object. The `*` character is used to import everything, and the `as` keyword assigns an alias to the imported object. Here's an example:

 export const `Component1`
 export const `Component2`
and to import:
  import `*` as `Component` from `./path`

All the named exports are available as properties of the `Component` object, which you can then access using dot notation.


## 2. What is the importance of config.js file?

It serves as a central location to store and manage configuration settings for an application or project.

`config.js` file provides a centralized and flexible way to manage configuration settings for your application. It improves code organization, simplifies maintenance, and enhances security by separating sensitive information from your codebase.


## 3. What are React Hooks?

React Hooks are a feature introduced in React 16.8 that allow you to use state and other React features in functional components. 

React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your component hierarchy.

- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.

## 4. Why do we need useState Hook?

`useState` hook is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

Syntax for useState hook:

`const [state, setState] = useState(initialstate);`

Importing: To use useState you need to import useState from react as shown below:

`import React, { useState } from "react";`