import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Todo from "./Components/Todo/Todo";
import Crypto from "./Components/Crypto/Crypto";
import Weather from "./Components/Weather/Weather";
import Greeting from "./Components/Greeting/Greeting";
import Time from "./Components/Time/Time";
import GoogleSlides from "./Components/GoogleSlides/GoogleSlides";

function App() {
  return (
    <div className="app-wrapper">
      <div className="fixed top-0 z-[-10] h-full w-full">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,rgba(0,9,29,1)_1px)] bg-[size:20px_20px]" />
        </div>
      </div>
      <div className="App relative z-10">
        <div className="item1">
          <Bookmarks />
        </div>
        <div className="item2">
          <Time />
        </div>
        <div className="item3">
          <Greeting />
        </div>
        <div className="item4">
          <Weather />
        </div>
        <div className="item5">
          <Todo />
        </div>
        <div className="item6">
          <Crypto />
        </div>
        <div className="item7">
          <GoogleSlides />
        </div>
      </div>
    </div>
  );
}

export default App;
