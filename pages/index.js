import Head from 'next/head'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Switch from '@material-ui/core/Switch';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Slider from '@material-ui/core/Slider';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function valuetext(value) {
  return `${value}°C`;
}

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Home() {
  return (
  <div>
      <Head>
      <title>ออกแบบและพัฒนาเว็บไซด์</title>
    </Head>
    <main>
    <h1><center>Index Page</center></h1>
    <br />
    <center>
    <Link href="/"><a>Home</a></Link> | 
    <Link href="/about"><a> about</a></Link> | 
    <Link href="/service"><a> service</a></Link> | 
    <Link href="/products/P001"><a> Products</a></Link> 
    <br />
    <TextField id="standard-basic" label="Standard" />
    <br />
    <br />
    <Button variant="contained" color="primary">
      Helloworld
    </Button>
    <br />
    <br />
    <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    <br />
    <br />
    <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    <br />
    <br />
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
    <br />
    <br />
    <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
    <br />
    <br />
    <Typography id="discrete-slider-small-steps" gutterBottom>
        Small steps
      </Typography>
      <Slider
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    <br />
    <br />
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
    <br />
    <br />
    <Paper elevation={10} />
      <Paper />
    <Paper elevation={33} />
    </center>
    </main>
  </div>
  )
}
