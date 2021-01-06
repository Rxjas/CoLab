import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Sidebar from "../components/Sidebar";
import PersonalCard from "../components/";

const Grid = () => {
  return (
    <>
      <Sidebar />
      <CardDeck>
      {/* need to pass through search terms and loop over results */}
      {/* {element.map(infos => {
        <PersonalCard
          {{ infos }} <-- is that how we deconstruct an object within react parenthesis?
        />
      })} */}
      </CardDeck>
      <p>the grid</p>
    </>
  );
};

export default Grid;