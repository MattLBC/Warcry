import React, { useState, useEffect } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { listTodos, listUnits } from "./graphql/queries";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { UserContext } from "./context/User";
import Header from "./components/Header";
import UserWarbands from "./components/UserWarbands";
import WarbandBuilder from "./components/WarbandBuilder";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetchAllUnits();
  }, []);

  async function fetchAllUnits() {
    try {
      const unitsData = await API.graphql(graphqlOperation(listUnits));
      const units = unitsData.data.listUnits.items;
      setUnits(units);
    } catch (err) {
      console.log("error fetching units");
    }
  }

  // async function addTodo() {
  //   try {
  //     if (!formState.name || !formState.description) return;
  //     const todo = { ...formState };
  //     setTodos([...todos, todo]);
  //     setFormState(initialState);
  //     await API.graphql(graphqlOperation(createTodo, { input: todo }));
  //   } catch (err) {
  //     console.log("error creat|ing todo:", err);
  //   }
  // }

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UserWarbands />} />
          <Route path="/warband_builder" element={<WarbandBuilder />} />
        </Routes>
        {/* <div style={styles.container}>
          <div>
          {units.map((unit) => {
            return (
              <div>
                <h3>{unit.Name}</h3>
                <p>{unit.Faction}</p>
                <p>{unit.Move}</p>
                <p>{unit.Points}</p>
                <p>{unit.Toughness}</p>
                <p>{unit.Wounds}</p>
                <div>
                  {unit.Runemarks.map((runemark) => {
                    return <p>{runemark}</p>;
                  })}
                </div>
                <div>
                  {unit.Attacks.map((attack) => {
                    const attackObj = JSON.parse(attack)
                    return (
                    <div>
                      <p>{attackObj.Attacks}</p>
                      <p>{attackObj.Strength}</p>
                      <p>{attackObj.Damage}</p>
                      <p>{attackObj.Range}</p>
                    </div>);
                  })}
                </div>
              </div>
            );
          })}
          </div>
        </div>
        <Heading level={1}>Hello {user.username}</Heading> */}
        <Button onClick={signOut}>Sign out</Button>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default withAuthenticator(App);
