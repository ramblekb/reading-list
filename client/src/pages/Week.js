import React from "react";
import { Card, Container } from "@material-ui/core";
import { XGrid } from '@material-ui/x-grid';
import Navigation from "../components/Navigation";
import SimplePaper from "../components/SimplePaper";

function Week() {
  

  return (
     <div>
     <Navigation />
     <SimplePaper />
<Container />
      <XGrid />
      <Card />
      </div>
    );
  }


export default Week;
