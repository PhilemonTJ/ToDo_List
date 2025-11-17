import React, { useState } from "react";

export default function Calendar({ tasks }) {
  const categoryIcons = {
    Birthday: "🎂",
    Work: "💼",
    Personal: "📝",
    Wishlist: "❤️",
    "No Category": "🥸"
  };

  const [currentDate, setCurrentDate] = useState({
    month: 10, // November (0-index → 10)
    year: 2025
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const { month, year } = currentDate;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (month === 0) {
      setCurrentDate({ month: 11, year: year - 1 });
    } else {
      setCurrentDate({ month: month - 1, year });
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setCurrentDate({ month: 0, year: year + 1 });
    } else {
      setCurrentDate({ month: month + 1, year });
    }
  };

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const calendarCells = [];

  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  const getIconsForDay = (day) => {
    return tasks
      .filter(
        (t) =>
          new Date(t.due_date).getDate() === day &&
          new Date(t.due_date).getMonth() === month &&
          new Date(t.due_date).getFullYear() === year
      )
      .map((t, index) => (
        <div key={index} className="text-xs">
          {categoryIcons[t.category] || "•"}
        </div>
      ));
  };

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(new Date(year, month, day));
    }
  };

  const getTasksForSelectedDate = () => {
    if (!selectedDate) return [];
    return tasks.filter(
      (t) =>
        new Date(t.due_date).toDateString() === selectedDate.toDateString()
    );
  };

  return (
    <div className="p-6">
      {/* <h2 className="font-semibold text-lg mb-2">Calendar</h2> */}

      {/* Header with month + arrows */}
      <div className="flex justify-between items-center mb-3">
        <div className="font-bold text-md">
          {monthNames[month]} {year}
        </div>
        <div className="flex gap-3">
          <button onClick={prevMonth} className="text-xl">❮</button>
          <button onClick={nextMonth} className="text-xl">❯</button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-600 mb-2">
        <div>SU</div>
        <div>MO</div>
        <div>TU</div>
        <div>WE</div>
        <div>TH</div>
        <div>FR</div>
        <div>SA</div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {calendarCells.map((day, index) => (
          <div
            key={index}
            className={`h-12 w-12 flex flex-col justify-start items-center pt-1 rounded-md border text-sm cursor-pointer ${
              selectedDate &&
              new Date(year, month, day).toDateString() ===
                selectedDate.toDateString()
                ? "bg-blue-100"
                : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day && (
              <>
                <div className="text-xs font-medium">{day}</div>

                {/* Icons for tasks */}
                <div className="mt-1 flex flex-wrap justify-center gap-1 text-lg">
                  {getIconsForDay(day)}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Display tasks for the selected date */}
      {selectedDate && (
        <div className="mt-4">
          <h3 className="text-md font-semibold">
            Tasks for {selectedDate.toDateString()}:
          </h3>
          {getTasksForSelectedDate().length === 0 ? (
            <div className="text-sm text-gray-500">No tasks for this date.</div>
          ) : (
            <ul className="mt-2 space-y-2">
              {getTasksForSelectedDate().map((task) => (
                <li
                  key={task.id}
                  className="p-3 rounded-md bg-gray-50 flex justify-between"
                >
                  <div>
                    <div
                      className={`font-medium ${
                        task.is_completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {task.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {task.category}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
