import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'

function Quiz() {
    //setting initial field state
    const [flower, setFlower] = useState('');
    const [tree, setTree] = useState('');
    const [bird, setBird] = useState('');
    const [fish, setFish] = useState('');
    const [animal, setAnimal] = useState('');

    //setting initial error state
    const [flowerError, setFlowerError] = useState('');
    const [treeError, setTreeError] = useState('');
    const [birdError, setBirdError] = useState('');
    const [fishError, setFishError] = useState('');
    const [animalError, setAnimalError] = useState('');

    //validation
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <h1>South African National Symbols</h1>
            <Form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{color: '#00794c'}}>National Flower</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={flower}
                        label="Flower"
                        onChange={e => setFlower(e.target.value)}
                    >
                        <MenuItem value={1}>Barberton Lily</MenuItem>
                        <MenuItem value={2}>Protea</MenuItem>
                        <MenuItem value={3}>Rose</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{color: '#df3830'}}>National Tree</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tree}
                        label="Tree"
                        onChange={e => setTree(e.target.value)}
                    >
                        <MenuItem value={1}>Yellow-wood Tree</MenuItem>
                        <MenuItem value={2}>Bushwillow Tree</MenuItem>
                        <MenuItem value={3}>Marula Tree</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{color: '#161616'}}>National Bird</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={bird}
                        label="Bird"
                        onChange={e => setBird(e.target.value)}
                    >
                        <MenuItem value={1}>African Fish Eagle</MenuItem>
                        <MenuItem value={2}>Barn Owl</MenuItem>
                        <MenuItem value={3}>Blue Crane</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{color: '#fbb900'}}>National Fish</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fish}
                        label="Fish"
                        onChange={e => setFish(e.target.value)}
                    >
                        <MenuItem value={1}>Thorntail Stingray</MenuItem>
                        <MenuItem value={2}>Galjoen</MenuItem>
                        <MenuItem value={3}>Ghost Skate</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{color: '#012597'}}>National Animal</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={animal}
                        label="Animal"
                        onChange={e => setAnimal(e.target.value)}
                    >
                        <MenuItem value={1}>African Lion</MenuItem>
                        <MenuItem value={2}>Black Rhino</MenuItem>
                        <MenuItem value={3}>Springbok</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Quiz;
