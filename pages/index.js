import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Button} from "@mui/material";
import {Grid} from "@material-ui/core";


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
            <Grid container xs={12} >
                <Grid xs={6}>
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
                </Grid>
                <Grid xs={6}>
                    <div>
                        <h1>
                            Consejos favoritos
                        </h1>
                    </div>


                    <ul>
                        <li> {advice}

                            <Button variant="contained" margin="5px" color="primary" >
                                Quitar de la lista
                            </Button>
                        </li>
                        <p></p>
                        <li>{advice}
                            <Button variant="contained" margin="5px" color="primary"  >
                                Quitar de la lista
                            </Button>
                        </li>
                        <p></p>
                        <li> {advice}
                            <Button variant="contained" margin="5px" color="primary"  >
                                Quitar de la lista
                            </Button>
                        </li>
                        <p></p>
                        <li> {advice}
                            <Button variant="contained" margin="5px" color="primary"  >
                                Quitar de la lista
                            </Button>
                        </li>
                        <p></p>
                        <li> {advice}
                            <Button variant="contained" margin="5px" color="primary"  >
                                Quitar de la lista
                            </Button></li>
                    </ul>
                </Grid>
            </Grid>

            <Grid container xs={12} >
                <Grid  xs={4}></Grid>
                <Grid xs={4}>
                    <h2>Buscador de consejos</h2>
                    <form>
                        <label>
                            Palabra:
                            <input type="text" name="palabra" />
                        </label>
                    </form>


                    <p></p>
                    <Button variant="contained" margin="5px" color="primary"  >
                        Buscar
                    </Button>
                    <h2>Resultados de busqueda </h2>
                    <ul>
                        <li> {advice}

                            <Button variant="contained" margin="5px" color="primary" >
                                Marcar como favorito
                            </Button>
                        </li>
                        <p></p>
                        <li>{advice}
                            <Button variant="contained" margin="5px" color="primary"  >
                                Marcar como favorito
                            </Button>
                        </li>
                        <p></p>
                        <li> {advice}
                            <Button variant="contained" margin="5px" color="primary"  >
                                Marcar como favorito
                            </Button>
                        </li>
                        <p></p>
                        <li> {advice}
                            <Button variant="contained" margin="5px" color="primary"  >
                                Marcar como favorito
                            </Button>
                        </li>
                        <p></p>
                        <li> {advice}
                            <Button variant="contained" margin="5px" color="primary"  >
                                Marcar como favorito
                            </Button>
                        </li>

                    </ul>
                </Grid>
            </Grid>
        </div>


    );
};
export default AdvicePage;
