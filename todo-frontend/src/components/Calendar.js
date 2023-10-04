import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth,
  });

  return (
    <div className="container mt-4 mb-4 pe-5">
      <div className="text-center">
        <button className="btn btn-link" onClick={prevMonth}>
          &lt; Previous Month
        </button>
        <span>{format(currentDate, 'MMMM yyyy')}</span>
        <button className="btn btn-link" onClick={nextMonth}>
          Next Month &gt;
        </button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {daysInMonth.map((day) => (
            <tr key={day}>
              {Array.from({ length: 7 }).map((_, index) => {
                const currentDay = addMonths(day, index);
                const isCurrentMonth = currentDay >= startOfCurrentMonth && currentDay <= endOfCurrentMonth;

                return (
                  <td
                    key={currentDay}
                    className={isCurrentMonth ? 'text-center' : 'text-muted text-center'}
                  >
                    {isCurrentMonth ? format(currentDay, 'd') : ''}
                    {isToday(currentDay) ? <span className="badge bg-primary">Today</span> : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
