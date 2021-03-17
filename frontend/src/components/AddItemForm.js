import { Button, makeStyles, Dialog, TextField, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core';
import { useState, forwardRef } from 'react';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    modal: {
        alignItems: "baseline",
        display: "flex",
    },
    title: {
      fontSize: 22,
    },
    pos: {
      marginBottom: 22,
    },
  });


const AddItemForm = (props) => {

    //Init makeStyles function
    const classes = useStyles();

    //State used to open / close modal
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    //form fields
    const [itemName, setItemName] = useState('');
    const [expDate, setExpDate] = useState('');

    const handleSubmit = (e) => {
        //Prevent refresh of the site on click
        e.preventDefault();
        const product = {
            item_name: itemName,
            exp_date: expDate
        }

        console.log(product);

        axios.post("api/fridgeItems/", product)
            .then(handleClose())
            .then(props.refreshState())

    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add a product
            </Button>
            
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new item</DialogTitle>
                <DialogContent>
                    <form className={classes.pos} onSubmit={handleSubmit}>
                        <div>
                            <Typography>Product's name:</Typography>
                            <TextField label="ex. Paprika" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
                        </div>
                        <br/>
                        <div>
                            <Typography>Date of expiration:</Typography>
                            <TextField type="date" value={expDate} onChange={(e) => setExpDate(e.target.value)} fullWidth />
                        </div>
                        <div>
                            <br />
                            <Button type="submit" variant="contained">Submit</Button>
                            <Button onClick={handleClose} color="primary">Cancel</Button>    
                        </div>  
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddItemForm;

