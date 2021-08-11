import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

function NewProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState([]);
  const [searchPlanet, setSearchPlanet] = useState([
    { column: 'population', comparison: 'menor que', value: 0 },
  ]);

  // didMount
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const data = await fetch(endpoint)
        .then((results) => results.json());
      setPlanets(data.results);
    };
    getPlanets();
  }, []);

  const objects = {
    filter,
    setFilter,
    planets,
    searchPlanet,
    setSearchPlanet,
  };

  return (
    <MyContext.Provider value={ objects }>
      { children }
    </MyContext.Provider>
  );
}

NewProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default NewProvider;