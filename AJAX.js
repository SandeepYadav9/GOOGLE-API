import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Sandeep...");
  useEffect(() => {
    console.log("First time render...");

    var sendDataToServer = new XMLHttpRequest();

    sendDataToServer.onreadystatechange = () => {
      if (
        sendDataToServer.readyState === 4 &&
        sendDataToServer.status === 200
      ) {
        var reciveDataInStringFormate = sendDataToServer.reciveText;
        var reciveDataInJSONformate = JSON.parse(reciveDataInStringFormate);

        setName(reciveDataInJSONformate.data.first_name);
      }
    };

    sendDataToServer.open("GET", "https://reqres.in/api/users/1");
    sendDataToServer.send();
  }, []);
  const onClickHandler = () => {
    setName("Desigion");
  };
  return (
    <div>
      <span>{name}</span>
      <button onClick={onClickHandler}>update</button>
    </div>
  );
}

export default App;
