import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';

const CustomCalendar = () => {
  // array of government holidays
  const governmentHolidays = ['2023-06-01','2023-07-12','2023-06-05'];
  const saturdayColor = 'highlight-saturday';
  const sundayColor = 'highlight-sunday';
  const holidayColor='highlight-holiday';

  // Function to check if a date is a Saturday, Sunday, or government holiday
  const highlightDate = (date) => {
    const isSaturday = date.getDay() === 6 ; // Saturday: 6
    const isSunday = date.getDay() === 0; // Sunday: 0
    const isHoliday = governmentHolidays.includes(date.toISOString().split('T')[0]);

    if (isSaturday) {
      return saturdayColor;
    }
    if (isSunday) {
      return sundayColor;
    }
    if (isHoliday) {
      return holidayColor;
    }
    return null;
  };

  return (
    <div className="custom-calendar">
      <Calendar tileClassName={({date})=>highlightDate(date)}/>
    </div>
  );
};

export default CustomCalendar;
