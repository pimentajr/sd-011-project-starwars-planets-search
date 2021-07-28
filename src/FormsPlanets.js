import React from 'react';
import Context from './context/Context';

function FormPlanets() {
  const { filterPlanetName, setFilterPlanetName } = React.useContext(Context);

  const handleChange = ({ target }) => {
    setFilterPlanetName({
      ...filterPlanetName,
      filters: {
        filterByName: {
          name: target.value,
        },
      },
    });
  };

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default FormPlanets;