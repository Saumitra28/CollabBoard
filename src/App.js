import "./App.css";
import React from "react";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Todo from "./Components/Todo/Todo";
import Weather from "./Components/Weather/Weather";
import Time from "./Components/Time/Time";
import GoogleSlides from "./Components/GoogleSlides/GoogleSlides";
import PomodoroTimer from "./Components/Pomodoro/PomodoroTimer";
import GoogleMeet from "./Components/GoogleMeet/GoogleMeet";
import Dailygrowth from "./Components/DailyGrowth/Daliygrowth";
import PollWithResults from "./Components/PollWithResults/PollWithResults";
import IssueTracker from "./Components/IssueTracker/IssueTracker";
import GoogleSheetChart from "./Components/GooglesheetsChart/GooglesheetsChart";
import Chatbot from "./Components/ChatBot/ChatBot";
import Announcements from './Components/Announcements/Announcements'

function App() {
  return (
    <div className="app-wrapper">
      <div className="fixed top-0 z-[-10] h-full w-full">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,rgba(0,9,29,1)_1px)] bg-[size:20px_20px]" />
        </div>
      </div>
      <div className="announcements">
        <Announcements />
      </div>
      <div className="App relative z-10">
        <div className="item1">
          <Bookmarks />
        </div>
        <div className="item2">
          <Time />
          <div className="item3">
            <Todo />
          </div>
          <div className="item4">
            <GoogleMeet />
          </div>
        </div>
        <div className="item5">
          <PomodoroTimer />
        </div>
        <div className="item6">
          <Weather />
          <div className="item8">
            <Dailygrowth />
          </div>
        </div>
        <div className="item7">
          <GoogleSlides />
        </div>
        <div className="item8">
          <PollWithResults />
        </div>
        <div className="item9">
          <IssueTracker />
        </div>
        <div className="item10">
          <GoogleSheetChart />
        </div>
        <div className="item11">
          <Chatbot />

        </div>
      </div>
    </div>
  );
}

export default App;
