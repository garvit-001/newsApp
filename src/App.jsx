import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Welcome from "./components/Welcome";

function App() {
  let variable = "rgn";
  const [progess, setProgess] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Welcome name={"Flexiple"} />
      <LoadingBar
        color="#f11946"
        progress={progess}
        height={3}
        onLoaderFinished={() => {}}
      />
      <Routes>
        <Route
          exact
          path="/business"
          element={
            <News
              setProgess={setProgess}
              key="business"
              pageSize={5}
              country={"in"}
              category={"business"}
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgess={setProgess}
              key="entertainment"
              pageSize={5}
              country={"in"}
              category={"entertainment"}
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgess={setProgess}
              key="general"
              pageSize={5}
              country={"in"}
              category={"general"}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgess={setProgess}
              key="health"
              pageSize={5}
              country={"in"}
              category={"health"}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgess={setProgess}
              key="science"
              pageSize={5}
              country={"in"}
              category={"science"}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgess={setProgess}
              key="sports"
              pageSize={5}
              country={"in"}
              category={"sports"}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgess={setProgess}
              key="technology"
              pageSize={5}
              country={"in"}
              category={"technology"}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
