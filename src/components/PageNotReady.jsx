import React from "react";
import PageNotReadyImage from "../assets/page_not_ready.jpeg";

export default function PageNotReady() {
  return (
    <React.Fragment>
      <main>
        <div style={{ paddingTop: 100, backgroundColor: "#ffffff" }}>
          <div style={{ textAlign: "center", width: "100%" }}>
            <img alt="" width="75%" src={PageNotReadyImage} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
