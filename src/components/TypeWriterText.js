import React from "react";
import Typewriter from "typewriter-effect";
import "./TypeWriterText.css"; // Import the CSS file for styling

const TypeWriterText = () => {
  return (
    <>
      <div className="typewriter-container">
        <p className="typewriter-text"><span style={{color:'blue'}}>Name: </span>Andrew Onyancha </p>
        <div className="mine">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">Innovative!</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-2">Resilient!</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text-3">Visionary!</span>`)
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
        </div>
      </div>
    </>
  );
};

export default TypeWriterText;
