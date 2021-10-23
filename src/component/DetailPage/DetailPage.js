import React from 'react';
import { useParams } from 'react-router';

const DetailPage = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>this is detail page: {serviceId}</h2>
        </div>
    );
};

export default DetailPage;