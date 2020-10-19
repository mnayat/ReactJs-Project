import React  from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const  EventForm = (props:any) => {

    const {
        modalId,
        title,
        closeModal,
        eventname,
        inputChange,
        checkbox,
        oncheckboxChange,
        showtime,
        startDate,
        endDate,
        onInputChange,
        color,
        colors,
        handleChange,
        eventType,
        buttonText,
        colorObj,
    } = props;
  //  const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="modal" id={modalId} data-tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                    onClick={closeModal}>
                     x
                    </button>
                </div>
                <div className="modal-body p-3">
                    <form>
                        <div className="form-group">
                            <label className="control-label">Event Title</label>
                            <input
                                className="form-control fom-white"
                                placeholder ="Enter Title"
                                type ="text"
                                name="event-name"
                                value={eventname}
                                onChange={inputChange}
                            />
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type ="checkbox"
                                name="checkbox"
                                value={checkbox}
                                checked={checkbox}
                                onChange={oncheckboxChange}
                            />
                             <label className="control-label">All-day event? (optional)</label>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Start</label>
                            <div className="row">
                                {
                                    !showtime ?
                                    <div className="col-md-12">
                                    <DatePicker 
                                        selected={startDate} 
                                        onChange={onInputChange('startDate')}
                                        showTimeSelect
                                        timeFormat="p"
                                        timeIntervals={1}
                                        dateFormat="Pp"
                                        />
                                    </div> :
                                    <div className="col-md-12">
                                    <DatePicker 
                                        selected={startDate} 
                                        onChange={onInputChange('startDate')}
                                     
                                        dateFormat="Pp"
                                        />
                                    </div>
                                }
                                
                            </div>
                            
                        </div>   
                        <div className="form-group">
                            <label className="control-label">End</label>
                            <div className="row">
                            {
                                    !showtime ?
                                    <div className="col-md-12">
                                    <DatePicker 
                                        selected={endDate} 
                                        onChange={onInputChange('endDate')}
                                        showTimeSelect
                                        timeFormat="p"
                                        timeIntervals={1}
                                        dateFormat="Pp"
                                        />
                                    </div> :
                                    <div className="col-md-12">
                                    <DatePicker 
                                        selected={endDate} 
                                        onChange={onInputChange('endDate')}
                                     
                                        dateFormat="Pp"
                                        />
                                    </div>
                                }
                            </div>
                        </div> 
                        <div className="form-group">
                            <label className="control-label">Choose Event Color</label>
                           <select className="form-control form-white" name="event-color">
                              {
                                  colors.map((color:string) =>
                                     <option
                                      value ={color}
                                      key ={color}
                                     >
                                            {color}
                                     </option>
                                    )
                              }
                           </select>
                        </div> 
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary save"
                    data-dismiss="modal"
                     onClick={eventType}
                     disabled={
                         !eventname || !startDate || !color 
                     }
                    >
                        {buttonText}
                        </button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal"
                    onClick={closeModal}>
                        Close
                        </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default EventForm;
