import React from 'react';
import {BrowserRouter, Route, Routes as RoutesRD} from 'react-router-dom';

import Main from './pages/Main'
import Repositorio from './pages/Repositorio'

const Routes = () => {
    return (
    <BrowserRouter>
        <RoutesRD>
            <Route path="/" element={<Main/>}/>

            <Route path="/repositorio/:repositorio" element={<Repositorio/>}/>

        </RoutesRD>
    </BrowserRouter>
    );
    }
     
     
    export default Routes;