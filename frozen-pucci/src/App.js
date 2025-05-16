import React, { useEffect, useState } from "react";
import axios from "axios";

// Dati di Elsa e Anna (inclusi quelli che hai fornito)
const charactersData = [
  {
    name: "Elsa",
    films: ["Frozen", "Frozen 2"],
    shortFilms: ["Frozen Fever", "Frozen Olaf's Adventure"],
    allies: ["Anna", "Kristoff", "Olaf", "Sven", "Mathias", "Yelena", "Honeymaren"],
    enemies: ["Hans"],
    imageUrl: "https://static.wikia.nocookie.net/disney/images/9/95/Profile_-_Elsa.jpeg/revision/latest?cb=20200319054311",
    sourceUrl: "https://disney.fandom.com/wiki/elsa"
  },
  {
    name: "Anna",
    films: ["Frozen", "Frozen 2"],
    shortFilms: ["Frozen Fever", "Frozen Olaf's Adventure"],
    allies: ["Elsa", "Kristoff", "Olaf", "Sven", "Mathias"],
    enemies: ["Hans"],
    imageUrl: "https://static.wikia.nocookie.net/disney/images/0/0f/Profile_-_Anna.jpeg/revision/latest?cb=20200319054431",
    sourceUrl: "https://disney.fandom.com/wiki/anna"
  }
];

// Componente per visualizzare i personaggi di Frozen (Elsa, Anna)
const FrozenData = () => {
  const [characters, setCharacters] = useState(charactersData);
  
  return (
    <div>
      <h2>Frozen Characters</h2>
      {characters.map((character) => (
        <div key={character.name} style={{ marginBottom: "20px" }}>
          <h3>{character.name}</h3>
          <img src={character.imageUrl} alt={character.name} style={{ width: "200px", height: "300px", borderRadius: "8px" }} />
          <p><strong>Films:</strong> {character.films.join(", ")}</p>
          <p><strong>Short Films:</strong> {character.shortFilms.join(", ")}</p>
          <p><strong>Allies:</strong> {character.allies.join(", ")}</p>
          <p><strong>Enemies:</strong> {character.enemies.join(", ")}</p>
          <p><a href={character.sourceUrl} target="_blank" rel="noopener noreferrer">More Info</a></p>
        </div>
      ))}
    </div>
  );
};

// Componente per Enrico Pucci
const EnricoPucci = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#ffcc00", borderRadius: "8px" }}>
      <h3>Enrico Pucci from JoJo's Bizarre Adventure</h3>
      <p>“The only thing that matters is completing my plan!”</p>
    </div>
  );
};

// Componente principale App
const App = () => {
  return (
    <div className="App">
      <h1>Frozen and Enrico Pucci App</h1>
      <FrozenData />
      <EnricoPucci />
    </div>
  );
};

export default App;

