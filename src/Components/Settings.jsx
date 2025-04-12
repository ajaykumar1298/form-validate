import React from "react";

function Settings({ data, setData }) {
  let handleRadioBtn = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={data.theme == "dark"}
          onChange={handleRadioBtn}
        />
        <label name="dark">dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={data.theme == "light"}
          onChange={handleRadioBtn}
        />
        <label name="light">light</label>
      </div>
    </div>
  );
}

export default Settings;
