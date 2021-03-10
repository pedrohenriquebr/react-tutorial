import {useState} from "react";
import Table from "./Table";
import Form from "./Form";

const App = () => {
  const [state, setState ] =  useState({
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  });

  const removeCharacter = (index) => {
    const { characters } = state;

    setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  const handleSubmit = (character) => {
    setState({ characters: [...state.characters, character] });
  };

    return (
      <div className="container">
        <Table
          characterData={state.characters}
          removeCharacter={removeCharacter}
        />
        <Form handleSubmit={handleSubmit} />
      </div>
    );
}
export default App;