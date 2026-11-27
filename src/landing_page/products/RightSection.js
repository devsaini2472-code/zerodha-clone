import React from 'react';

function RightSection({imageURL, productName, ProductDescription, tryDemo, learnMore,}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-6 p-5 mt-5">
                    <h1 className="text-muted fs-3 mb-4">{productName}</h1>
                    <p>{ProductDescription}</p>
                    <div>
                    
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div> 
                    
                    
                </div>
                <div className="col-6 ">
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;