import { useState, useEffect } from "react";
import FactionsList from "./FactionsList";

function WarbandBuilder() {
  const [alliance, setAlliance] = useState("");
  const [factions, setFactions] = useState([]);
  const [units, setUnits] = useState([]);

  const handleAlliance = (event) => {
    setAlliance(event.target.value);
  };

  const handleFactions = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFactions([...factions, value]);
    } else {
      setFactions(factions.filter((faction) => faction !== value));
    }
  };

  

  return (
    <div>
      <h1>Warband builder</h1>
      {!alliance ? (
        <div>
          <label>
            Which grand alliance are you playing?
            <select onChange={handleAlliance}>
              <option value="">Select</option>
              <option value="Order">Order</option>
              <option value="Chaos">Chaos</option>
              <option value="Destruction">Destruction</option>
              <option value="Death">Death</option>
            </select>
          </label>
        </div>
      ) : (
        <div>
          <h2>Which {alliance} factions will you use?</h2>
          <div>
            {FactionsList[alliance].map((faction) => (
              <label>
                <input
                  type="checkbox"
                  name="faction"
                  value={faction}
                  onChange={handleFactions}
                />{" "}
                {faction}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WarbandBuilder;
