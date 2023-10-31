import { useState } from "react";

import List from "./component/list/index.tsx";
import Map from "./component/map";

import { Point } from "./types/types.ts";

import { CITY } from "./mock/city.ts";
import { POINTS } from "./mock/points.ts";

import "./App.css";

function App() {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>();

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = POINTS.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint);
  };

  return (
    <>
      <header>
        <h1>Парки города {CITY.title}:</h1>
      </header>
      <main>
        <List points={POINTS} onListItemHover={handleListItemHover} />
        <Map city={CITY} points={POINTS} selectedPoint={selectedPoint} />
      </main>
    </>
  );
}

export default App;
