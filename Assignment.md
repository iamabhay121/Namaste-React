# Episode-6 Exploring the World

## 1. What is a Microservice?

A microservice is a software architectural style that structures an application as a collection of small, independent, and loosely coupled services. Each service in a microservices architecture represents a specific functional module and operates as a separate unit with its own dedicated processes. These services communicate with each other through well-defined APIs (Application Programming Interfaces) typically over HTTP or other lightweight protocols.

## 2. What is Monolith Architecture ?

In software development, a monolith architecture refers to a traditional and older style of designing applications where the entire application is built as a single, large, and tightly integrated unit. In a monolithic architecture, all the different components and functionalities of the application are bundled together into a single codebase, typically running in a single process and sharing the same database.

## 3. What is the difference between Monolith and Microservice?

Monolith and microservice architectures is the level of coupling and the size of the building blocks. Monoliths are a single, tightly integrated unit, while microservices are a collection of small, independent services that communicate through well-defined interfaces. Microservices provide advantages in terms of scalability, flexibility, and ease of maintenance, but they also come with increased complexity and operational challenges, which need to be carefully managed.

## 4. Why do we need a useEffect Hook ?

It serves the purpose of managing side effects in functional components. Side effects are any code that affects something outside the scope of the component, such as fetching data from an API, updating the document title, or subscribing to events.

Here are the main reasons why we need the useEffect hook:

* Lifecycle Management: In class components, React provides lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount to manage side effects. With functional components, the useEffect hook effectively replaces these lifecycle methods and allows us to handle side effects in a more declarative way.

* Executing Code After Rendering: The useEffect hook enables us to run code after the component has been rendered on the screen. It mimics the behavior of componentDidMount in class components, allowing us to perform actions like data fetching, subscriptions, or modifying the DOM.

* Dependency Tracking: The useEffect hook takes a second argument called the dependency array. This array specifies the values from the component's state or props that the effect depends on. When any of the dependencies change, the effect is re-executed. This helps in preventing unnecessary re-renders and optimizing performance.

* Cleaning Up Side Effects: The useEffect hook also handles cleanup operations. For example, if we subscribe to an event or set up a timer, we can use the useEffect hook to clean up those resources when the component is unmounted, ensuring that we avoid memory leaks.

* Asynchronous Operations: useEffect allows us to perform asynchronous operations, such as making API calls, inside the effect function. This ensures that we don't block the rendering of the component while waiting for the operation to complete.

## 5. What is optional chaining?

Optional chaining is a feature introduced in JavaScript (ECMAScript 2020) that provides a concise and safe way to access properties and methods of nested objects and arrays without raising an error if an intermediate value is null or undefined. It helps to avoid unnecessary checks for null or undefined values, making the code more readable and reducing the risk of encountering a "TypeError" when accessing nested properties.

The optional chaining syntax uses the question mark ? followed by a dot . to indicate that the property or method access should be conditional. If the value before the dot is null or undefined, the expression evaluates to undefined without throwing an error.


## 6. What is Shimmer UI?

Shimmer UI is a design technique used in user interfaces to provide a visual indication of loading content or data. It is commonly seen in applications and websites that involve asynchronous data fetching or loading. Shimmer UI creates a subtle animation or pattern that mimics the appearance of content being loaded, giving users feedback that the app or website is actively working and preventing them from perceiving a delay as an error.

Shimmer UI is especially useful when loading times are uncertain or when dealing with slow network connections. It is widely used by many popular applications and websites to enhance the perceived performance and provide better user feedback during loading operations.

## 7. What is the difference between JS Expression and JS Statement?

In JavaScript, both expressions and statements are fundamental building blocks of code, but they serve different purposes and have distinct characteristics:

**JavaScript Expression:**
- An expression is any piece of code that produces a value. It can be a combination of variables, constants, operators, and function calls that evaluates to a single value.
- Expressions can be used anywhere in JavaScript code where a value is expected, such as in assignments, function arguments, return statements, and more.
- Examples of JavaScript expressions:
  - `5 + 3` (evaluates to the value `8`)
  - `x * 2` (where `x` is a variable, evaluates to the value `2 * x`)
  - `Math.random()` (evaluates to a random number between 0 and 1)
  - `someFunction(10)` (evaluates to the return value of `someFunction` with the argument `10`)

**JavaScript Statement:**
- A statement is a complete instruction in JavaScript that performs some action. It is like a sentence in the code, telling the JavaScript engine to do something.
- Statements often include expressions, but they can also consist of keywords, control structures (if, for, while, etc.), and other elements that carry out specific tasks.
- Unlike expressions, statements do not produce a value directly.
- Examples of JavaScript statements:
  - `let x = 5;` (a variable declaration statement)
  - `if (age >= 18) { /* code block */ }` (an if statement)
  - `for (let i = 0; i < 5; i++) { /* code block */ }` (a for loop statement)
  - `return result;` (a return statement in a function)

In summary, expressions produce values, while statements are instructions that perform actions in JavaScript. Expressions can be used within statements to compute values that may be manipulated or used for various purposes. Understanding the distinction between expressions and statements is essential for writing effective and meaningful JavaScript code.

## 8. What is conditional rendering ? Explain with a code example.

Conditional rendering is a concept in front-end web development that involves displaying different content or components based on certain conditions or logical expressions. It allows developers to control what gets rendered on the user interface based on the state of the application, user input, or other factors.

In React, conditional rendering is often achieved using JavaScript's conditional statements, such as if statements, switch statements, or the ternary operator. Additionally, logical expressions, state variables, or props are often used to determine the conditions for rendering specific content.

---
**_code:_**

import React, { useState } from 'react';

const ExampleComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default ExampleComponent;

---

## 9. What is CORS?

CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control and restrict web page scripts from making requests to a different domain than the one that served the web page. In other words, CORS is a mechanism that allows web servers to specify which origins (domains) are permitted to access their resources.

CORS is a vital security mechanism that ensures safe cross-origin data access on the web while protecting against unauthorized cross-site access. It allows web developers to build web applications that can communicate with APIs and services hosted on different domains, promoting interoperability and enabling the development of powerful, distributed web applications.

## 10. What is async and await ?

`async` and `await` are features in JavaScript used to handle asynchronous operations in a more readable and synchronous-like manner. They were introduced in ECMAScript 2017 (ES8) and have become an essential part of modern JavaScript programming.

`async` and `await` provide a cleaner and more intuitive way to deal with asynchronous code, making it easier to reason about and maintain complex asynchronous workflows. They have become a popular choice for handling asynchronous operations in modern JavaScript applications.

## 11. What is the use of const json = await data.json().

The expression `const json = await data.json()`` is used to extract and parse the JSON data from an HTTP response received from a fetch operation or any other asynchronous operation that returns a Promise.

* `data`: It represents the result of an asynchronous operation, usually an HTTP response from a fetch request. The data object is a Promise that resolves to the HTTP response.

* `await`: The await keyword is used inside an async function to pause the execution of the function until the promise (in this case, the data promise) is settled (resolved or rejected).

* `data.json()`: This is a method call on the data object. In the context of an HTTP response, the json() method is a built-in method that reads the response body and parses it as JSON data. It returns a new Promise that resolves to the JSON data once it's been parsed.

* `const json = ...`: This line declares a constant variable named json to store the parsed JSON data. The await keyword is used here to ensure that the assignment to json happens only after the JSON data has been fully parsed and the Promise returned by data.json() has been resolved.