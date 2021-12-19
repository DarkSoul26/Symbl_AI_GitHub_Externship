import React from "react";
import data from "../Data/data.json";
export default function RenderData() {
  data.data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
  return (
    <>
      {data.data.map(function (dataAll, idx) {
        return (
          <tr>
            <td key={idx}>{dataAll.id}</td>
            <th key={idx}>{dataAll.name}</th>
          </tr>
        );
      })}
    </>
  );
}
