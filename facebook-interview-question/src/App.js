import React, { useState } from "react";

function App() {
  const languages = [
    { id: 1, name: "React" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Vue" },
    { id: 4, name: "Dot Net" },
  ];

  const [firstBox, setFirstBox] = useState(languages);
  const [secondBox, setSecondBox] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  const onClickCheckbox = (e, x, side = null) => {
    let index = (side === "left" ? firstBox : secondBox).findIndex(
      (z) => z?.id === x?.id
    );
    let tempData = [...selectedValues];
    if (e.target.checked) {
      tempData = [...tempData, { ...x }];
    } else {
      tempData.splice(index, 1);
    }
    console.log(tempData);
    setSelectedValues(tempData);
  };

  const onMoveRight = (side = null) => {
    let tempBox = [];
    let tempSelected = selectedValues.map((ele) => ele?.id);
    if (side === "left") {
      firstBox.forEach((item1, i1) => {
        if (!tempSelected.includes(item1.id)) {
          tempBox.push(item1);
        }
      });
      setFirstBox(tempBox);
      setSecondBox([...secondBox, ...selectedValues]);
    } else {
      secondBox.forEach((item1, i1) => {
        if (!tempSelected.includes(item1.id)) {
          tempBox.push(item1);
        }
      });
      setSecondBox(tempBox);
      setFirstBox([...firstBox, ...selectedValues]);
    }
    setSelectedValues([]);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ borderStyle: "solid", padding: "20px" }}>
        {firstBox.map((x, i) => (
          <div key={x?.id} style={{ display: "flex", paddingTop: "20px" }}>
            <input
              type="checkbox"
              onChange={(e) => onClickCheckbox(e, x, "left")}
            />
            <div>{x?.name}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "20px",
          paddingTop: "50px",
        }}
      >
        <button onClick={() => onMoveRight("left")}>{">>>"}</button>
        <br />
        <button onClick={() => onMoveRight(null)}>{"<<<"}</button>
      </div>
      {secondBox?.length ? (
        <div
          style={{ paddingLeft: "30px", borderStyle: "solid", padding: "20px" }}
        >
          <div>
            {secondBox.map((x, i) => (
              <div key={x?.id} style={{ display: "flex", paddingTop: "20px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => onClickCheckbox(e, x, null)}
                />
                <div>{x?.name}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
