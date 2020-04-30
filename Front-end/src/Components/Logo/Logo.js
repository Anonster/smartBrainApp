import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./icon.png";

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 55 }}
        style={{ height: 130, width: 130 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className='Tilt-inner pa3'
        >
          <img
            src={brain}
            style={{ alignSelf: "center" }}
            className='logo'
            alt='logo'
          />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
