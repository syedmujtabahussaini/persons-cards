import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  return (
    <article className="person">
      <img
        src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`}
        alt="person pic"
      />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="personlist">
      <Person img="34" name="john" job="developer" />

      <Person img="44" name="bob" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          incidunt!
        </p>
      </Person>

      <Person img="53" name="david" job="the boss" />
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
