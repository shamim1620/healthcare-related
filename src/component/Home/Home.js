import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ambulance from "../../media/image/ambulance.jpg";
import doctor from "../../media/image/doctors.jpg";
import room from "../../media/image/room.jpg";
import Cart from '../Cart/Cart';
import "./Home.css";


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container">
            <Carousel>
                <Carousel.Item interval={1000} >
                    <img
                        className="img-fluid w-100"
                        src={doctor}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Doctors</h3>
                        <p>We have  the best doctors in this country</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="img-fluid w-100"
                        src={ambulance}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Ambulance</h3>
                        <p>24 hours ambulance service</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="img-fluid w-100"
                        src={room}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Clean Room</h3>
                        <p>We provide the best quality room in the country </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="mt-4">
                <h3> Our Services</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.slice(0, 6).map(service => <Cart
                            key={service.id}
                            service={service}></Cart>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;