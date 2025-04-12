import React from "react";

function Profile({ data, setData, err }) {
  let { name, age, email } = data;
  let handlChangeEvent = (value, fieldName) => {
    setData((prev) => ({ ...prev, [fieldName]: value }));
  };
  return (
    <div>
      <div>
        <label>name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            handlChangeEvent(e.target.value, "name");
          }}
        />
        {err.name ? <label className="error">{err.name}</label> : ""}
      </div>
      <div>
        <label>age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => {
            handlChangeEvent(e.target.value, "age");
          }}
        />
        {err.age ? <label className="error">{err.age}</label> : ""}
      </div>
      <div>
        <label>email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            handlChangeEvent(e.target.value, "email");
          }}
        />
        {err.email ? <label className="error">{err.email}</label> : ""}
      </div>
    </div>
  );
}

export default Profile;
