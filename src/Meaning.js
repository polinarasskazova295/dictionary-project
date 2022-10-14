import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props){
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <p>
                  <div className="defenition"> {definition.definition} </div>
                <div className="example">{definition.example}</div>
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </div>
            );
        })}
      </div>
    );
    }