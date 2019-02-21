import React from 'react';
import Header from '../shared/Header';
import '../../styles/main.scss';

const BaseLayout = (props) => {

    return (
        <React.Fragment>
            <Header />
            {props.children}
        </React.Fragment>
    )
}

export default BaseLayout;