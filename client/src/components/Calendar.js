import React, { Component } from "react";
// import API from "../utils/API";
import withAuth from './../components/withAuth';
import API from "../utils/API";
import BigCalendar from 'react-big-calendar'
import events from './events'
import dates from '../../src/utils/dates'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

class Calendar extends Component {
  state = {
    events: []
  }

  componentDidMount() {
    API.getCalendar()
    .then(res => {
      this.setState({ events: res.data })
    })
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }


  render() {
    return (
      <BigCalendar
        selectable
        events={this.state.events}
        views={allViews}
        step={60}
        showMultiDayTimes
        max={dates.add(dates.endOf(new Date(2019, 17, 1), 'day'), -1, 'hours')}
        defaultDate={new Date(2019, 3, 1)}
        localizer={localizer}
        onSelectSlot={this.handleSelect}
        onSelectEvent={event => alert(event.title)}
    />
    )
  }

}

export default withAuth(Calendar);