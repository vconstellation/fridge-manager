import { Container, makeStyles, Typography, List, ListItem, ListItemText, Button, IconButton, Divider } from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForever';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';

const useStyles = makeStyles({
    container: {
        padding: 16,
    },
    list: {
        textAlign: ""
    }
});

const FridgeItemsList = () => {

    const classes = useStyles();

    const [fridgeItems, setFridgeItems] = useState(null);

    //current date
    const newDate = new Date(Date()).toLocaleDateString()

    //use effect that updates state with every refresh
    useEffect(() => {
        axios.get("/api/fridgeItems/").then((res) => {
            const data = res.data;
            setFridgeItems(data);
        })
    }, [])

    const refreshState = () => {
        axios.get("/api/fridgeItems/").then((res) => {
            const data = res.data;
            setFridgeItems(data);
    })}

    const handleDelete = (item) => {
        const newFridgeItems = fridgeItems.filter(fridgeItem => fridgeItem.id !== item.id);
        setFridgeItems(newFridgeItems);
        axios.delete(`/api/fridgeItems/${item.id}/`);
    }

    return (
        <Container className={classes.container} maxWidth="md">
            <h4>Current date: {newDate}</h4>
            <AddItemForm refreshState={refreshState} />
            <List>
                {fridgeItems && fridgeItems.map(item => {
                    return (
                        <ListItem ckey={item.id} button>
                            <ListItemText primary={item.item_name} />
                            <ListItemText className={classes.list} primary={item.exp_date} />
                            <ListItemText className={classes.list} primary={item.time_until_expired} secondary="days until expired"/>
                            <IconButton onClick={() => handleDelete(item)}>
                                <DeleteForever />
                            </IconButton>
                            <Divider />
                        </ListItem>
                    )
                })}
            </List>
            <Divider />
        </Container>


    )
}

export default FridgeItemsList;