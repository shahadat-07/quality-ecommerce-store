import React from 'react';
import Men from '../../assets/mens.jpg';
import Women from '../../assets/womens.jpg';
import './styles.scss'

const Directory = () => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item"
                    style={{
                        backgroundImage: `url(${Women})`
                    }}>
                    <a>Shop Womens</a>
                </div>
                <div className="item"
                    style={{
                        backgroundImage: `url(${Men})`
                    }}>
                    <a>Shop Mens</a>
                </div>
            </div>
        </div>
    );
};

export default Directory;