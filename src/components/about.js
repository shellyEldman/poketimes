import React from 'react';
import Rainbow from '../hoc/rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis deleniti dicta ea eos, ipsum iure labore magni neque odit officia quaerat quas reprehenderit! Consequatur doloribus facere omnis quasi quibusdam!</p>
        </div>
    );
};

export default Rainbow(About);