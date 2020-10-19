import React from 'react'
import AddEvent from '../modal/AddEvent'

const Sidebar = () => {
    return (
        <div className="col-lg-3">
           <button data-toggle="modal" data-target="#add-event" className="btn btn-primary btn-block">
               Create new Event
           </button>
           <div className='m-t-20'>
               <br />
               {/* display events */}
               <div className="external-event bg-primary">
                  Watch movies
               </div>
               <div className="external-event bg-success">
                  Call friends
               </div>
               <div className="external-event bg-danger">
                  Eat Dinner
               </div>
           </div>
           
           <AddEvent />
        </div>
    )
}

export default Sidebar;
