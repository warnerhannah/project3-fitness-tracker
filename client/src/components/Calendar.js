import React, { Component } from "react";
import API from "../utils/API";
import BigCalendar from 'react-big-calendar'
import events from './events'
import dates from '../../src/utils/dates'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer


let Basic = (props) => (
  <BigCalendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2019, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date(2019, 3, 1)}
    localizer={localizer}
  />
)

export default Basic;
