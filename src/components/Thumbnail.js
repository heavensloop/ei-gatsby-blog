import React from 'react'; // Import the Component component from React



function Thumbnail({image,title,description}) {
    return (
        <div  className="showcase w-80" data-target="showcase">
        <div className="showcase1 row">
            
            <div className="col-6 project-image">
                <img src={image} style={{width: "100%"}} alt="melineo"/>
            </div>
            
            <div className="col-6">
                <div>

                <h3 className="h3 project-title">{title}</h3>
                <p className="showcase__description project-description">
                    {description}
                </p>
                {/* <p className="color-gray">Lorem ipsum</p> */}

                </div>
            </div>
        
        </div>
        
        <hr/>
    </div>
    );
  }



export default Thumbnail;