//import React, { useCallback, useState } from "react";
import React from "react";

//import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import settings from "./settings";

function App() {
  console.log("in App ");
  console.log("settings=");
  //console.log(settings);
  const newset = settings;
  console.log(`newset=${newset}`);
  //const isAdmin = settings.IS_ADMIN;
  return <h1>Initial Dummy Heading</h1>;
}

export default App;
