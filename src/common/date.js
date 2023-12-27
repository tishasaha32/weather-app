import React from "react";

function date() {
  const currentDate = new Date();

  const year = currentDate.getFullYear(); //Getting the full year

  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]; //Month names set in an array
  const month = monthName[currentDate.getMonth() - 1]; //Get the month name  from number
  const day = currentDate.getDate(); // Get current date

  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; // Setting day names in the array
  const dayOfWeek = dayName[currentDate.getDay()]; // Get the day from the day number
  return (
    <div style={{ fontSize: "1.1rem", margin: "0" }}>
      {dayOfWeek.substring(0, 3)}, {month} {day}, {year}
    </div>
  );
}
export default date;
