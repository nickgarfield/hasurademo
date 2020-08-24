import React from "react";
import { AuthenticationForm, useCurrentUser } from "feather-client-react";
import Todos from "./Todos";

const styles = {
  title: provided => ({
    ...provided,
    fontFamily: "Didot",
    fontSize: "48px",
    fontWeight: 700
    // color: "#fff"
  }),
  inputTitle: provided => ({
    ...provided,
    fontFamily: "Optima",
    padding: "0px 8px",
    fontWeight: 600

    // fontWeight: 700
    // fontFamily: "Merriweather"
    // color: "#fff"
  }),
  inputField: provided => ({
    ...provided,
    fontFamily: "Optima",
    border: "none",
    background: "#fff",
    borderRadius: "12px"
    // borderBottom: "1px solid #f00"
  }),
  forgotPasswordButton: provided => ({
    ...provided,
    fontFamily: "Optima",
    padding: "0px 8px",
    color: "#355c7d",
    fontWeight: 600
  }),
  primaryCtaButton: provided => ({
    ...provided,
    fontFamily: "Optima",
    borderRadius: "12px",
    background: "#355c7d",
    fontWeight: 800
  }),
  secondaryCtaButton: provided => ({
    ...provided,
    fontFamily: "Optima",
    color: "#355c7d"
  })
};

function App(props) {
  const { loading, currentUser } = useCurrentUser();
  if (loading) return null;
  if (!currentUser)
    return (
      <div className="app">
        <AuthenticationForm styles={styles} />
      </div>
    );
  return (
    <div className="app">
      <div className="app-header">
        <h1>My to-do list</h1>
        <p>{currentUser.email}</p>
      </div>
      <Todos />
    </div>
  );
}

export default App;
