import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

const MainLayout = (props) => {
    return (
        <div className="fullHeight">
            <Header {...props} />
            <div className="main">
                {props.children}
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;