import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://ibrars-smile.herokuapp.com/services')
        .then(res  => res.json())
        .then(data => setServices(data));

    }, [])

    return (
        <Container>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
            {
                services.slice(0,6).map(service => <HomeService service={service} key={service._id} />)
            }
        </div>
        </Container>
        
    );
};

export default Services;