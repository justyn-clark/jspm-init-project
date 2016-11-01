import React from 'react';
import Box from './Box';

class Grid extends React.Component {

    render() {
        return (
            <div className="row small-up-2 medium-up-3 large-up-4">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        );
    }
}

export default Grid