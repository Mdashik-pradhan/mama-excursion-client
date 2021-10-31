import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res  => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className="grid grid-rows-1 grid-cols-4">
            {
                services.map(service => <Service service={service} key={service._id} />)
            }
        </div>
    );
};

export default Services;