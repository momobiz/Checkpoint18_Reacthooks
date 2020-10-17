import React from 'react';


const Filter = ({setRate}) => {

    return (
        <div>
          <select className="custom-select col-sm-12" onChange={(event)=>setRate(event.target.value)}>
                <option value="0"> Recherche par Taux </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>

        </div>
    );
}

export default Filter;
