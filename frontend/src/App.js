// import Home from './components/Home';
import Navbar from './components/Navbar';
import FridgeItemsList from './components/FridgeItemsList';
import AddItemForm from './components/AddItemForm';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: "100%"
  }
});

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <FridgeItemsList />
    </div>
  );
}

export default App;
