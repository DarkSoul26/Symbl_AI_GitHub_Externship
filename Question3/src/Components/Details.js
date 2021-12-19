import "./Details.css";
import React from "react";
import RenderData from "./RenderData";
import Header from "./Header";
import Footer from "./Footer";
const Details = () => {
  return (
    <div>
      <Header />
      <h1>Symblai Externship Assignment: Information Engineer Externship</h1>
      <h4>
        Display the "id" and "name" (which is provided in the form of JSON
        format), also sort the data according to the "id".
      </h4>

      <table className="container">
        <thead>
          <tr>
            <td>
              <h2 className="head">Id</h2>
            </td>
            <td>
              <h2 className="head">Name</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          <RenderData />
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Details;
