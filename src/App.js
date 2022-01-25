import React, { useEffect } from "react";
import './App.css';

const App = () => {
  const checkIfWalletIsConnected = () => {
    /*
    * First make sure we have access to windows.ethereum
    */
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
    } else {
      console.log('We have the ethereum object', ethereum);
    }
  }

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>
        
        <div className="bio">
          I am Nika and I am getting into web3, that's pretty cool right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={null}>
          Wave at me
        </button>
      </div>
    </div>
  );
}

export default App
