import { Container, makeStyles, Typography, List, ListItem, ListItemText, Button } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    container: {
        padding: 16,
    }
});

const FridgeItemsList = () => {

    const classes = useStyles();

    const [fridgeItems, setFridgeItems] = useState(null);

    useEffect(() => {
        axios.get("/api/fridgeItems/").then((res) => {
            const data = res.data;
            setFridgeItems(data);
        })
    }, [])

    const handleDelete = (item) => {
        const newFridgeItems = fridgeItems.filter(fridgeItem => fridgeItem.id !== item.id);
        setFridgeItems(newFridgeItems);
        axios.delete(`/api/fridgeItems/${item.id}/`);
    }

    return (
        <Container className={classes.container} maxWidth="md">
           <List>
                {fridgeItems && fridgeItems.map(item => {
                    return (
                        <ListItem key={item.id} button>
                            <ListItemText primary={item.item_name} />
                            <ListItemText primary={item.exp_date} />
                            <Button variant="contained" color="error" onClick={() => handleDelete(item)}>Delete?</Button>
                        </ListItem>
                    )
                })}
            </List>
            <Button variant="contained" color="primary">test</Button>
        </Container>
    )
}

export default FridgeItemsList;