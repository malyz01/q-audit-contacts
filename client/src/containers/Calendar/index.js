import React from "react";

class Calendar extends React.Component {
  state = {
    events: [
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
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };

  render() {
    return (
      <div className="App">
        <DnDCalendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          onDoubleClickEvent={el => console.log(el)}
          style={{
            height: "80vh",
            width: "80vw",
            margin: "auto",
            paddingTop: "4rem"
          }}
        />
      </div>
    );
  }
}

export default Calendar;
