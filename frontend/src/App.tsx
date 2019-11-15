import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Slider } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import 'typeface-public-sans';
import { ReactComponent as Smiley5 } from './assets/noun_happiest.svg'
import { ReactComponent as Smiley4 } from './assets/noun_smiley.svg'
import { ReactComponent as Smiley3 } from './assets/noun_neutral.svg'
import { ReactComponent as Smiley2 } from './assets/noun_sad.svg'
import { ReactComponent as Smiley1 } from './assets/noun_cry.svg'

const getSmiley = (happiness:number) => {
  if ( happiness < 20) {
    return <Smiley1 />
  } else if ( happiness < 40 ) {
    return <Smiley2 />
  } else if ( happiness < 60 ) {
    return <Smiley3 />
  } else if ( happiness < 80 ) {
    return <Smiley4 />
  } else {
    return <Smiley5 />
  }
}

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);


  return (
    <Container>
      <p>Hei, How are you feeling?</p>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={ 50 }
        value = { sliderValue }
        onChange= { (e, val) => setSliderValue(val as number) }
      />
      { getSmiley(sliderValue) }
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default App;
