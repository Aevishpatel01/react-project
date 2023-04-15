import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import FunctionRoutemenu from './FunctionRoutemenu';
import Clock from './01Clock';
class FunctionRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionRoutemenu />} >
                        <Route path="functionalclock" element={<Clock />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default FunctionRoute;
