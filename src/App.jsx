import { useState } from "react";
import "./assets/song.mp3";
import "./App.css";
import loading from "./assets/loading.gif";
// import { Howl } from "howler";

function App() {
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState("");
  const [load, setLoad] = useState(false);
  // const [voice, setVoice] = useState("");

  const apiKey = "f75ef5bb-d6e8-4a54-a287-8af2b10dc657";
  const apiUrl =
    "https://www.dictionaryapi.com/api/v3/references/learners/json/";
  // const apiSound = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const getdata = async () => {
    try {
      setLoad(true);
    const response = await fetch(`${apiUrl}${value}?key=${apiKey}`);
    const data = await response.json();
    setDisplay(data[0].shortdef);
    // getsound();
    setLoad(false);
    } catch (error) {
      console.log("error");
    }
  };

  // const getsound = async () => {
  //   const responseSound = await fetch(`${apiSound}${value}`);
  //   const sound = responseSound.json();
  //   console.log(sound);
  //   // setVoice(sound[0]);
  // };



  return (
    <div>
      <div className="h-20 w-screen bg-purple-500 text-4xl font-semibold p-5 text-center">
        Dictionary
      </div>

      <div className="mt-20">
        <div className="text-3xl text-center mb-10">
          Find any word exist in the world ! <br />
        </div>


        <div className="text-center">
        <h1> Please don't enter wrong spelling.</h1>
          <input
            type="search"
            placeholder="Type a word"
            onChange={(e) => setValue(e.target.value)}
            className="border-2 h-12 w-1/2 border-purple-500 bg-purple-100 p-3"
          />

          <button
            className="bg-purple-500 h-12 w-28  hover:bg-purple-700 text-white"
            onClick={() => getdata()}
          >
            Search
          </button>

          {load == true ? (
            <div className="mx-[40%] my-10">
              <img src={loading} alt="loading......" />
            </div>
          ) : ( 
            <div className="text-start p-5 mt-5 lg:mx-[20%]">
              <p>{display[0]}</p>
              <p>{display[1]}</p>
              <p>{display[2]}</p>
            </div>
          )}


          {/* <div>
            <h1>{voice}</h1>
            <audio src="src\assets/song.mp3"></audio>
          </div> */}


        </div>
      </div>
    </div>
  );
}

export default App;
