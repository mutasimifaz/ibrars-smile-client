import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Service.css'
const Service = ({service}) => {
    const { name, photoUrl, price,provider } = service?.data;
    const {description} = service?.data;
  const { isLoading } = useAuth();
    
    const history = useHistory();
    const handleBooking = id => {
        history.push(`/orderReview/${id}`)
    }
    return (
        
        <div>
          {isLoading && <Box pt={0.5}>
            <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width="100%" />
            </Box>}
          <div className="col">
                  <div className="card border-0">
                      <img src={photoUrl} alt={name}></img>
                    <div className="card-body border-0">
                      <h3 className="card-title"><b>{name}</b></h3>
                      <p><small>by</small> {provider}</p>
                      <h5>BDT {price}</h5>
                      <p>{description.slice(0, 100)}...</p>
                    </div>
                    <div className="m-3">
                        <button onClick={() => handleBooking(service._id)} className="button-orange">Buy Now <i className="fa-solid fa-cart-plus ico"></i></button>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default Service;