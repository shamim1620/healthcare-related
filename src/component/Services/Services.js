import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Services = (props) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                services.map(service => <Cart service={service}></Cart>)
            }

        </div>
    );
};

export default Services;