import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'rsuite';
  
const CreateRegistrarModal = (props) => {
    const [open, setOpen] = useState(false);
    const [messageArr, setMessageArr] = useState([]);
    const [data, setData] = useState({
        name: "",
    });

	useEffect(() => {
		const clearMessageArr = window.setInterval(() => {
			setMessageArr([]);
		}, 5000);
	
		return () => { 
			window.clearInterval(clearMessageArr);
		}
	}, [messageArr]);

    const insertData = async () => {
        var formData = new FormData();
        formData.append('action', 'insert_custom');
        formData.append('enviornment', window.location.hostname);
        formData.append('table', 'registrars');
        formData.append('params', JSON.stringify({
            name: data.name
        }));

        await fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then((result) => {
            props.doSetRegistrars(result);
        })
        .catch((error) => {
            setMessageArr([error.message]);
            console.error("There has been a problem with your fetch operation:", error);
        });
    }
  
    const handleClose = async (submit = false) => {
        if(submit) {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                enviornment: window.location.hostname,
                action: 'get_custom',
                fetchtype: 'single',
                table: 'registrars',
                where: 'name=:name',
                params: `name:${data.name}`
            }))
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                if(result === false) {
                    insertData();
                    setOpen(false);
                } else {
                    setMessageArr(['That name already exists.']);
                }
            },
            (error) => {
                console.log(error)
                setMessageArr([error.message]);
            });
        } else {
            setOpen(false);
        }
    };
    const handleOpen = () => {
        setData({
            name: "",
        });
        setOpen(true);
    };

    return (
        <>
            <Modal open={open} onClose={() => handleClose(false)} size="xs" backdrop="static">
                <Modal.Header>
                    <Modal.Title>Add New Registrar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {messageArr && 
                        <div className='site-messages'>
                            <ul>
                                {messageArr.map((message, index) => (
                                    <li key={index}>{message}</li>
                                ))}
                            </ul>
                        </div>
                    }
                    <Form fluid onChange={setData} formValue={data}>
                        <Form.Group controlId="name">
                            <Form.ControlLabel>Name</Form.ControlLabel>
                            <Form.Control name="name" />
                            <Form.HelpText>Required</Form.HelpText>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleClose(true)} appearance="primary">
                        Confirm
                    </Button>
                    <Button onClick={() => handleClose(false)} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <span className='create-registrar-modal-link' onClick={handleOpen}>Add New Registrar</span>
        </>
    );
};
  
export default CreateRegistrarModal;