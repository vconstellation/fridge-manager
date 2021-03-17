import { Container, makeStyles, IconButton, Divider, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForever';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';

const useStyles = makeStyles({
    container: {
        padding: 16,
    },
    list: {
        textAlign: "center"
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
            const sortedData = data.sort((a, b) => a.time_until_expired - b.time_until_expired);
            setFridgeItems(sortedData);
        })
    }, [])
    //func that fires whenever someone adds a new product to the db
    const refreshState = () => {
        axios.get("/api/fridgeItems/").then((res) => {
            const data = res.data;
            const sortedData = data.sort((a, b) => a.time_until_expired - b.time_until_expired);
            setFridgeItems(sortedData);
    })}
    //function responsible for the deletion of records
    const handleDelete = (item) => {
        const newFridgeItems = fridgeItems.filter(fridgeItem => fridgeItem.id !== item.id);
        setFridgeItems(newFridgeItems);
        axios.delete(`/api/fridgeItems/${item.id}/`);
    }



    return (
        <Container className={classes.container} maxWidth="md">
            <h4>Current date: {newDate}</h4>
            <AddItemForm refreshState={refreshState} />
            <br />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Expiration date</TableCell>
                            <TableCell>Days remaining</TableCell>
                            <TableCell> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fridgeItems && fridgeItems.map((item) => (
                            <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                {item.item_name}
                            </TableCell>
                            <TableCell>
                                {item.exp_date}
                            </TableCell>
                            <TableCell>
                                {item.time_until_expired}
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleDelete(item)}>
                                    <DeleteForever />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider />
        </Container>


    )
}

export default FridgeItemsList;
