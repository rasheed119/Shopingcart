import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content({object, count, setcount}) {
  const [show, setshow] = useState(true)

  function addtocart(){
    setshow(!show)
    setcount(count + 1);
  }

  function removefromcart(){
    setshow(!show);
    setcount(count - 1);
  }

  return (
    <div className='col mb-5'>
    <div class="card h-100">
          <img className="card-img-top p-3" src={object.product_image} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">        
              <h5 className="fw-bolder">{object.product_name}</h5>
               {object.product_price}
              <div>{object.product_rating}</div>
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                {show ? 
              <Button onClick={addtocart} variant='primary'>Add to Cart</Button>
              :
              <Button onClick={removefromcart} variant='danger'>Remove from cart</Button>  
              }
                </div>
          </div>
      </div>
  </div>
  )
}

export default Content