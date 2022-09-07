// 1) What is Virtual DOM?
// Ans->DOM stands for document Object Model.It is blue print of real dom.DOM represents the entire UI of our application.The DOM is represented as a tree data structure.It has not power to directly change the layout of the document.If there is any change in application then it compares it with real dom and render that part only.Due to which our application becomes faster.

// 2) What is SPA?
// Ans->SPA stands for Single Page Application.It is a very common way of programming websites these days. The idea is that the website loads all the HTML/JS the first time we visit. When we then navigate, the browser will only rerender the content without refreshing the website. 

// 3)What is difference between class and functional component?
// 1.class components
// A class component requires you to extend from React. Component and create a render function which returns a React element.
// It must have the render() method returning JSX (which is syntactically similar to HTML)
// Also known as Stateful components because they implement logic and state.
// React lifecycle methods can be used inside class components (for example componentDidMount).
// It requires different syntax inside a class component to implement hooks. example: constructor(props) { super(props); this.state = {name: ‘ ‘} }
// Constructor are used as it needs to store state.

// 2.Functional Components
// A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
// There is no render method used in functional components.
// Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
// React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
// Hooks can be easily used in functional components to make them Stateful. example: const [name,SetName]= React.useState(" ")
// Constructors are not used.

// 4)What does mean by state and its use in react?
// Ans->React components has a built-in state object.The state object is where we store property values that belongs to the component.When the state object changes, the component re-renders.

// 5)What is JSX and why do we use it instead of js?
// Ans->JSX stands for JavaScript XML.It is simply extension of of js.We can directly write html and js in same file.JS is simply a scripting language, adding functionality into your website. JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript.

// 6)What is package.json?
// Ans->It constains all the metadata of our appication.It contains all dependacies, script and versions.It is also called as heart of Node js project.
