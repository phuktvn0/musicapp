import "./App.css";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import React from "react";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
