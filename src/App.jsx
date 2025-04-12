import { act, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Components/Profile";
import Interest from "./Components/Interest";
import Settings from "./Components/Settings";

function App() {
  let tabs = [
    {
      name: "profile",
      component: Profile,
      validate: () => {
        let obj = {};
        if (!data.name || data.name.length < 2) {
          obj.name = "please Enter tha valid name";
        }
        if (!data.age || data.age < 19) {
          obj.age = "please Enter tha valid age";
        }
        if (!data.email || !data.email.includes("@", ".com")) {
          obj.email = "email is not correct";
        }
        setErr(obj);
        return !Object.keys(obj).length > 0;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        let obj = {};
        debugger;
        if (!data.interest.length) {
          obj.interest = "pleasee select at least one";
        }
        return !Object.keys(obj).length > 0;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  let [activeTab, setActiveTab] = useState(0);
  let ActiveComp = tabs[activeTab].component;
  let [err, setErr] = useState({});

  let [data, setData] = useState({
    name: "ajay",
    age: "27",
    email: "demo@gamil.com",
    interest: ["anime", "coding", "readig book"],
    theme: "dark",
  });
  let handlePrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  let handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  let handleSubmit = () => {
    console.log(data);
  };

  return (
    <>
      <div className="tab-heading">
        {tabs.map((tab, ind) => {
          return (
            <div
              className="heading"
              key={ind}
              onClick={() => {
                tabs[activeTab].validate() && setActiveTab(ind);
              }}
            >
              {tab.name}
            </div>
          );
        })}
      </div>

      <div className="tab-body">
        <ActiveComp data={data} setData={setData} err={err} />
      </div>
      {activeTab > 0 ? <button onClick={handlePrev}>prev</button> : ""}
      {activeTab == tabs.length - 1 ? (
        <button onClick={handleSubmit}>submit</button>
      ) : (
        ""
      )}
      {activeTab < tabs.length - 1 ? (
        <button onClick={handleNext}>next</button>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
