import React from "react";
import "./Calendar.css";

const ICONS = {
  Work: "💼",
  Birthday: "🎂",
  Personal: "✅",
  Wishlist: "⭐",
  "No Category": "•"
};

export default function Calendar({ tasks = [] }) {
  const year = new Date().getFullYear();

  // group tasks by date yyyy-mm-dd
  const map = tasks.reduce((m, t) => {
    const d = t.due_date ? t.due_date.split("T")[0] : null;
    if (!d) return m;
    if (!m[d]) m[d] = [];
    m[d].push(t);
    return m;
  }, {});

  const renderMonth = (monthIndex) => {
    const monthName = new Date(year, monthIndex).toLocaleString("default", { month: "long" });
    const days = new Date(year, monthIndex + 1, 0).getDate();
    return (
      <div key={monthIndex} className="month-box">
        <h4 className="month-title">{monthName} {year}</h4>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: days }).map((_, i) => {
            const day = i + 1;
            const iso = `${year}-${String(monthIndex + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
            const tasksForDay = map[iso] || [];
            return (
              <div key={iso} className="calendar-day">
                <div className="text-sm font-medium">{day}</div>
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {tasksForDay.slice(0,3).map(t => <span key={t.id} title={t.title} className="text-xs">{ICONS[t.category] || "•"}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="calendar-wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 12 }).map((_, i) => renderMonth(i))}
      </div>
    </div>
  );
}
