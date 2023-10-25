import React from "react";
import "./App.css";
import Card from "./components/Card";
import MyButton from "./components/MyButtonn";
import Stil from "./components/Stil";
import Media from "./components/Media";
import ParentComponent from "./components/ParentComponentt.jsx";
// import photo from "./assets/images/photo.png";
import LoginGoogleForm from "./components/LoginGoogleForm";

const App = () => {
  return (
    <div>
      <Card />
      <MyButton />
      <Stil />
      <Media />
      <ParentComponent />
      <LoginGoogleForm />

      {/* <img src={photo} alt="logo" /> */}
    </div>
  );
};

export default App;
