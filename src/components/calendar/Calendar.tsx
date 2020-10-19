import React from 'react'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
    return (
        <div className="col-lg-9"> 
            <div>
                <FullCalendar 
                initialView="dayGridMonth"
                plugins={[ dayGridPlugin,timeGridPlugin, interactionPlugin ]}
                 headerToolbar ={
                       { 
                           left: "prev,next today",
                           center:"title",
                           right: "dayGridMonth, timeGridWeek,timeGridDay"
                        }
                 }
                 
                />
            </div>
        </div>
    )
}


export default Calendar;
