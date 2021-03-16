import { Modal, Button } from '@material-ui/core';
import { useState } from 'react';

const AddItemForm = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>Open modal</Button>
            <Modal open={open} onClose={handleClose}>
                <div>
                    Test
                </div>
            </Modal>
        </div>
    )
}

export default AddItemForm;