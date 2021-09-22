import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import {Button} from "@mui/material";


const AdvicePage = () => {
    const [advice, setAdvice] = useState(null);

    useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = () => {
        axios
            .get('https://api.adviceslip.com/advice')
            .then((response) => {
                setAdvice(response.data.slip.advice);

            })
    };
    return (

        <div className='app'>
            <div className='card'>
                <div>
                    <h1>Consejo del dia</h1>
                </div>
                <h4>{advice}</h4>

                <Button variant="contained" color="primary" >
                    Marcar como favorito
                </Button>

                <Button variant="contained" margin="5px" color="primary" onClick={getAdvice} >
                    Siguiente consejo
                </Button>
            </div>
        </div>


    );
};
export default AdvicePage;