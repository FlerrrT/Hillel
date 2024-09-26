import React from 'react';
import './App.css';

function App() {
  const character = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "1988Y",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    species: [],
    vehicles: [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    starships: [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    created: "2614-12-89T13:50:51.6440002",
    edited: "2014-12-26721:17:56.8916002",
    url: "https://swapi.dev/api/people/1/"
  };

  return (
    <div className="container mt-4">
      <h1>SWAPI Character Information</h1>
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">{character.name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Height:</strong> {character.height} cm</li>
            <li className="list-group-item"><strong>Mass:</strong> {character.mass} kg</li>
            <li className="list-group-item"><strong>Hair Color:</strong> {character.hair_color}</li>
            <li className="list-group-item"><strong>Skin Color:</strong> {character.skin_color}</li>
            <li className="list-group-item"><strong>Eye Color:</strong> {character.eye_color}</li>
            <li className="list-group-item"><strong>Birth Year:</strong> {character.birth_year}</li>
            <li className="list-group-item"><strong>Gender:</strong> {character.gender}</li>
            <li className="list-group-item"><strong>Homeworld:</strong> <a href={character.homeworld} target="_blank" rel="noopener noreferrer">{character.homeworld}</a></li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h3>Films</h3>
          <ul>
            {character.films.map((film, index) => (
              <li key={index}>
                <a href={film} target="_blank" rel="noopener noreferrer">Film {index + 1}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h3>Vehicles</h3>
          <ul>
            {character.vehicles.map((vehicle, index) => (
              <li key={index}>
                <a href={vehicle} target="_blank" rel="noopener noreferrer">Vehicle {index + 1}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h3>Starships</h3>
          <ul>
            {character.starships.map((starship, index) => (
              <li key={index}>
                <a href={starship} target="_blank" rel="noopener noreferrer">Starship {index + 1}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h3>Additional Information</h3>
          <p><strong>Created:</strong> {character.created}</p>
          <p><strong>Edited:</strong> {character.edited}</p>
          <p><strong>Profile URL:</strong> <a href={character.url} target="_blank" rel="noopener noreferrer">{character.url}</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;