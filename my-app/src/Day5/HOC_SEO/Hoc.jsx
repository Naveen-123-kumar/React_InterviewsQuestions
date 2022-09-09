import React from "react";
export default function Hoc() {
  return (
    <>
      <h1>
        Higher Order Component in react is advance concept in reactjs.When we
        take another functional components as a argument or return a component
        then that is called higher order component.It helps us not to write same
        component again and again and code also looks clean and easy to handle
        or understand.
      </h1>
      <div>
        Do you know about SEO ? Is it true that react js supports SEO support
      </div>
      <h1>
        SEO stands for search engine optimization.It help us to improve quality
        and quantity of website traffic to website or page from search
        engine.Yes,It is true that react js supports SEO support.React helps
        build a very user-friendly UI that is also valuable by SEO
      </h1>
      <br />
      <br />

      <div>What is clean up in useEffect</div>
      <h1>
        React’s useEffect cleanup function saves applications from unwanted
        behaviors like memory leaks by cleaning up effects. In doing so, we can
        optimize our application’s performance.
      </h1>
      <br />
      <br />
      <div>What is the use of useCallback and useMemo?</div>
      <h1>
        useCallback and useMemo accept two arguments a callbackfunction and
        dependency.The only difference is that useMemo returns the memorized
        value and useCallback return a memorized callback function.Both will
        render only when dependency will updated.UseCallback is used to optimize
        the rendering behavior of your React function components, while useMemo
        is used to memorize expensive functions to avoid having to call them on
        every render.
      </h1>
      <br />
      <br />
      <div>Why do we need keys in react list?</div>
      <h1>
        We need keys in react to uniquely identify the which items to be
        changed. or to give unique identy to each and every element of react.
      </h1>
      <br />
      <br />
      <div>Do you know about redux?</div>
      <h1>
        yes,I know about redux.Redux is a open-source javascript library which
        is used to manage and centralizing state.It is most commonly used with
        react,Angular and vue.There are three phases in redux....
      </h1>
      <p>Action,Reducers,store</p>
    </>
  );
}
