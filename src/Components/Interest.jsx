import React from "react";

function Interest({ data, setData, err }) {
  console.log(data);
  let handleChek = (e) => {
    // console.log(e.target.checked);
    // let newIntrest = e.target.checked
    //   ? [...data.interest, e.target.name]
    //   : data.interest.filter((elem) => e.target.name !== elem);
    // // console.log(newIntrest);
    // let newObj = { ...data.interest, interest: newIntrest };
    // console.log(newObj);
    // setData(newObj);
    // let newObj = { ...data };
    // console.log(newObj);
    let intrestArr = data.interest;
    let updatedInterest = e.target.checked
      ? [...intrestArr, e.target.name]
      : intrestArr.filter((elem) => elem !== e.target.name);
    setData({ ...data, interest: updatedInterest });
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="coding"
          checked={data.interest.includes("coding")}
          onChange={handleChek}
        />
        <label> coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="music"
          checked={data.interest.includes("music")}
          onChange={handleChek}
        />
        <label> music</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="movie"
          checked={data.interest.includes("movie")}
          onChange={handleChek}
        />
        <label> movie</label>
      </div>
      {err.interest ? <label className="error">{err.interest}</label> : ""}
    </div>
  );
}

export default Interest;
