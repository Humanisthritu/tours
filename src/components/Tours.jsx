import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
    <section>
        <div className="title">
            <h1>
                Our tours
            </h1>
            </div>
            <div className="underline"></div>
            <div>
                {tours.map
                ((tour) =>{
                    return(
                        <>
                           <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                        </>
                    )
                })}
            </div>
        
    </section>
   
  )
}

export default Tours