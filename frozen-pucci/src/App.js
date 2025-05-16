import React, { useEffect, useState } from "react";
import axios from "axios";

// Component for the Frozen API Data
const FrozenData = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFrozenData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/16489?api_key=YOUR_API_KEY"
        );
        // Supponiamo che la risposta abbia un campo "characters" con i dati dei personaggi
        setCharacters(response.data.cast); // Dipende dal formato della risposta API
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchFrozenData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Frozen Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Component to display Enrico Pucci Easter egg
const EnricoPucci = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#ffcc00", borderRadius: "8px" }}>
      <h3>Enrico Pucci from JoJo's Bizarre Adventure</h3>
      <p>“The only thing that matters is completing my plan!”</p>
    </div>
  );
};

// Main App Component
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

