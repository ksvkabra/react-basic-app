## React Basics

React is a javascript library. It is generally used in building single page applications.

Here we will learn basics of React.

### 1. Initial Setup

- The simplest way to add react app is using npx as follows:
  > \$ npx create-react-app <app_name>

This creates a react app with the following structure my-app

<img src=".\public\basicStructure.png" />

#### Talking about the setup

- There is a `index.html` file in public folder. That file renders the react application in browser.

- By default there is a `div` with `id=root` in the `index.html` file. The `id` is selected in the react application and the complete code is rendered in the `div` block.

- In `src` folder there is a file `index.js`, it has a import `ReactDOM`, in the `ReactDOM` there is a method `render`, which takes the component to be rendered and the id from html file (for our case it is the root id from `index.html` file)

- In the initial setup `App` component is rendered in the `ReactDOM`, will talk about components later. The `App.js` file has an exported function `App` , that `App` function is the component used in `index.js`.

- A `git` repository is initialized with all initial files committed.

- `Unit testing` with jest and react-testing-library is added.

- There are some other files here which can be overlooked for now.

> Command to run the application: \$ npm start

> Command to run testing: \$ npm test

> command to make build of app: \$ npm build

### 2. React Components

- Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

#### Types of components in React

- There are two ways a component can be created

  1. Class Component - The Class component is javascript class which extends `Component` property exported from `react`. The `Component` abstract has some methods defined which can be implemented in out component to control the `lifecycle` of a react component, these are called lifecycle methods. Also a class component has a state, the State of a component is an object that holds some information that may change over the lifetime of the component. we initialize our state property of class in the `constructor` and to update state their is a method called `setState` in the `Component`. The class has a `render` lifecycle method which returns `jsx`, that render method is called by default when a component is mounted on the DOM.

  2. Functional Component - The Functional component is a javascript function also called `stateless` component, as the functional components have no state of their own. The functional components in React are straight forward, we do some logic and return jsx from the component.

  > NOTE: JSX is html like syntax. We always have to import React from `react` in all the components where we are using `jsx`.

#### Creating and Using a new component in React

- Creating a class Component, for example see the `ClassForm` component in `/src/components/ClassForm.js`. Lets break the class `ClassForm`.

  - ClassForm extends Component imported from class, this makes the `ClassForm` a component.

  - there is a `constructor` with argument props, props is an object which have properties received when a component is used. To see how `ClassForm` component is used take a look in App.js file, here ClassForm component in enclosed in angle brackets.
    Now, how to pass props to ClassForm component. We can pass props like we add attributes in an html tag.

  for example

  > `<ExampleComponent keshav="username" isVisible="true" />`
  > In this component example, the `ExampleComponent` has two props, `keshav` and `isVisible`.

  The props object is passed to super, then the state in initialzed for the component.

  - Then there are two methods defined handleChange and handleSubmit, these methods are user defined and to be called to use. The handleChange method is called to for event `onChange` in the input tag below in `jsx`. The handleSubmit is called on form `onSubmit` event.

  - `render` method is one of the lifecycle hooks of a component. This method returns the `jsx` and is called on every change in the UI. If render function in not defined in the class component, then react throws an error, because no `jsx` in returned from the component.

  - taking a look in the `handleChange` function, when the input field is changed the, the `handleChange` function is called, here we are using `setState` and passing an object with one property only, instead of the complete state.What `setState` method do is it takes the passed object and deep compares it with the `state`, if there is any change, then it returns a new State and the state of component is updated.

- Creating a Functional Component, for example see the `FunctionalForm` component in `/src/components/FunctionForm.js`. Lets break the function `FunctionForm`.

  - By importing `react` and returning `jsx`, a function becomes a react component, what happens in between does not matter.

  - Here we have almost similar implementation of the `Form` as we earlier discussed the `ClassForm` component, the only change here is that this function, so output will be same, but there will small changes. Let's see what changes

  - React introduced `hooks`, with React version 16.8, so to use hooks in the functional components, your version should be `react>=16.8`. Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes

  - There are some inbuilt hooks provided by React like `useState, useReducer, useContext, useRef, useEffect` etc.

  - We will be using `useState` hook for our example, lets see what useState hooks do, and why it is helpful.

  - In the `FunctionForm` component, we have used `useState` hook, it is taking an object in argument and returns ab array with two values, destructured in `formState and setFormstate`. The `useState`, takes any type of value in argument and returns an array. The first value of array is the value which we passed in the useState call argument and the second value is a function with which we can change the value of the first argument at any time. For example `formState` is an object with two properties. Now see the `handleChange` function we are creating a new object `updatedState` and assigning new values to it and then passing the `updatedState` as an argument to `setFormState`. The `setFormState` function updates the value of `formState` with passed values in the function call.

  > NOTE: The `setFormState` function and other functions like that which are returned by `useState` in second argument are simple functions which assign new values to the varaibles first index in array returned by `useState`. It does not compare previous and newvalues like setState does, so use the function properly.

  Lets see how components are building block in react

  - Lets now go through `/src/components/FunctionForm.js`.

    - The Form.js file has three components Form, Button and Input. The Form component is exported from their.

    - Now see closely, we have defined a `Button` and `Input` component, from the `Button` component a html button is returned and from the `Input` component an html input field is returned.

    - Now in form component we have used the `Input` component and added 5 attributes namely `type, value, placeholder, handleChange and name`, and these attributes are passed into `props` object in the `Input` component. In the input component we have destructured the props and used these values in input html tag.

    - How to use a variable in `jsx` in React component? A variable can be used by enclosing it in curly braces. Like in the Input component, the variables are enclosed in curly braces.

### 3. Relation in components

### 4. React hooks

### 5. React lifecycle methods
