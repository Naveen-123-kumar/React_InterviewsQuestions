import React from "react";

const ReactEvent = () => {
  return (
    <>
      <h1>What is an Event is React?</h1>
      <h3>
        React Event is named in camelCase.It is similar to HTML DOM events.It is
        used to perform user Events.Such as onClick,onChange,onmouseEnter etc.{" "}
      </h3>
      <br />
      <br />


      <h1>What is memory leak and how to overcome?</h1>
      <h3>
        React components that perform state updates and run asynchronous
        operations can cause memory leak issues if the state is updated after
        the component is unmounted. Here is a normal scenario that causes this
        memory leak issue:
      </h3>
      <h3>
        Memory leak occurs when programmers create memory in heap form and
        forget to delete it.It takes a lot of space of our of our memory due to
        which our computer become slow and reduces the performance.
      </h3>


      <br />
      <br />
      <h3>
        We can overcome this problem by cleans up memory.Using AbortController
        and Using Boolean Flag is method to do the same.
      </h3>

      <br />
      <br />
      <h1>Do you prefer function-based or class component and why ?</h1>
      <h3>
        I will prefer functional component because it is easy to write and
        understand.In functional componenents we have to write less code as
        compare to class component.
      </h3>
      <br />
      <br />


      <h1>Explain reducer as pure function in redux.</h1>
      <h3>
        In Redux, a reducer is a pure function that takes an action and the
        previous state of the application and returns the new state. The action
        describes what happened and it is the reducer's job to return the new
        state based on that action.
      </h3>
      <br />
      <br />


      <h1>Why do we use redux thunk?</h1>
      <h3>
        Redux Thunk is a middleware that lets you call action creators that
        return a function instead of an action object. That function receives
        the store's dispatch method, which is then used to dispatch regular
        synchronous actions inside the function's body once the asynchronous
        operations have been completed.
      </h3>
      <br />
      <br />


      <h1>What do you know about NPM?</h1>
      <h3>
        It stand for Node Package Manager.It is world's largest software
        registry used to install pakages.Packages intalled by using NPM
        installed globally.
      </h3>
    </>
  );
};

export default ReactEvent;
