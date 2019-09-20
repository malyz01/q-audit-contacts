import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    start: new Date(),
    end: new Date(moment().add(1, "days")),
    title: "info for provider"
  },
  {
    start: new Date(),
    end: new Date(),
    title: "2nd"
  }
];

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

// class Calendar extends React.Component {
//   state = {
//     events: [
//       {
//         start: new Date(),
//         end: new Date(moment().add(1, "days")),
//         title: "info for provider"
//       },
//       {
//         start: new Date(),
//         end: new Date(),
//         title: "2nd"
//       }
//     ]
//   };

//   onEventResize = (type, { event, start, end, allDay }) => {
//     this.setState(state => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: state.events };
//     });
//   };

//   onEventDrop = ({ event, start, end, allDay }) => {
//     console.log(start);
//   };

//   render() {
//     return (
//       <div className="App">
//         <DnDCalendar
//           defaultDate={new Date()}
//           defaultView="month"
//           events={this.state.events}
//           localizer={localizer}
//           onEventDrop={this.onEventDrop}
//           onEventResize={this.onEventResize}
//           resizable
//           onDoubleClickEvent={el => console.log(el)}
//           style={{
//             height: "80vh",
//             width: "80vw",
//             margin: "auto",
//             paddingTop: "4rem"
//           }}
//         />
//       </div>
//     );
//   }
// }

export default MyCalendar;
