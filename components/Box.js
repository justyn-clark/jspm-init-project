import React from 'react';
import BoxTitle from './BoxTitle';

const Box = () => {

    const imgs = {
        title: "Box",
        src: "http://placehold.it/550x550",
        alt: "Box"
    }

    return (
        <div className="column">
            <img className="thumbnail" src={imgs.src} title={imgs.title} alt={imgs.alt} />
            <BoxTitle className="text-center"/>
        </div>

    );
};

export default Box


// class Box extends React.Component {
//     render() {
//         return (
//             <div className="column">
//                 <img className="thumbnail" src="http://placehold.it/550x550" />
//             </div>
//         );
//     }
//
// }
