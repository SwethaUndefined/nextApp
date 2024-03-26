"use client";
import HeadersTop from "../dashboard/common/HeadersTop";
import SideMenu from "../dashboard/component/SideMenu";
import Link from "next/link";
import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";

import moment from "moment";
import "./style.css";
// import 'react-big-calendar/lib/sass/styles.scss';

import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the calendar styles
import { enUS } from "date-fns/locale";

import React, { useState } from "react";

// Import DnD addon styles if using drag and drop functionality
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

// const localizer = momentLocalizer(moment);
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function P_M_Todo0() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [activeEventModal, setActiveEventModal] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Define months and years
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    // Add more years as needed
  ];

  // Handle month and year changes
  const handleMonthChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedYear(e.target.value);
  };

  const myEventsList = [
    {
      title: "Event 1",
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
  ];
  const [events, setEvents] = useState(myEventsList);

  const handleSelectSlot = (event: any) => {
    if (typeof event.start === "string") {
      event.start = new Date(event.start);
    }

    if (typeof event.end === "string") {
      event.end = new Date(event.end);
    }

    // const save = window.confirm(
    //   `Add availability on ${format(start, "EEEE")} from ${format(
    //     start,
    //     "h:mma"
    //   )} to ${format(end, "h:mm")}?`
    // );
    setActiveEventModal(event);
    // if (save) {
    //   // setEvents([
    //   //   ...events,
    //   //   {
    //   //     start: new FossilizedDate(
    //   //       start.getDay(),
    //   //       start.getHours(),
    //   //       start.getMinutes()
    //   //     ),
    //   //     end: new FossilizedDate(
    //   //       end.getDay(),
    //   //       end.getHours(),
    //   //       end.getMinutes()
    //   //     ),
    //   //     title: "",
    //   //   },
    //   // ]);
    // }
  };

  const handleSelect = (event: any, e) => {
    const { start, end } = event;
    // const del = window.confirm(
    //   `Delete availability on ${format(start, "EEEE")} from ${format(
    //     start,
    //     "h:mma"
    //   )} to ${format(end, "h:mm")}?`
    // );
    console.log(event, event);
    setActiveEventModal(event);
    setPosition({ x: e.clientX, y: e.clientY });

    // if (del) {
    //   const index = events.findIndex((e) => e.id === event.id);
    //   setEvents([...events.slice(0, index), ...events.slice(index + 1)]);
    // }
  };

  const EventDetailModal = () => {
    return (
      <>
        {activeEventModal?.title && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              backgroundColor: "white",
              border: "1px solid black",
              padding: "10px",
              color: "blue",
              height: "100%",
              zIndex: 1000,
            }}
          >
            {activeEventModal?.title}
          </div>
        )}
      </>
    );
  };

  // Custom Event Component
  const CustomEvent = ({ event }: any) => {
    return (
      <>
        <div className="shadow bg-white" style={{ position: "relative" }}>
          <strong className="text-black">{event.title}</strong>
          <p>{event.start.toLocaleString()}</p>
        </div>
        {activeEventModal && <EventDetailModal />}
      </>
    );
  };

  return (
    <section className="">
      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Calendar</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-center text-lg-end">
                <Link
                  prefetch
                  href="/P_M_JobDescriptions1"
                  className="btn btn-light me-3 mx-lg-2"
                >
                  JD Assets
                </Link>
                <Link
                  prefetch
                  href="P_M_JobDescriptions4"
                  className="btn btn-blue bg-[#0a66c2!important]"
                >
                  Create New JD
                </Link>
              </div>
            </div>

            <div className="TotalEmployees shadow bg-white rounded-3 p-3 w-100">
              <div className="md:flex align-items-center">
                <h3 className="projectManHeading">Your Todo’s</h3>
                <div className="ml-auto d-flex">
                  <div className="month-year-picker">
                    <select value={selectedMonth} onChange={handleMonthChange}>
                      <option value="">Select Month</option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                    <select value={selectedYear} onChange={handleYearChange}>
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year.value} value={year.value}>
                          {year.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div
                className="d-none d-lg-block "
                style={{ width: "100%", position: "relative" }}
              >
                <Calendar
                  selectable
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 600 }}
                  defaultView={"week"}
                  timeslots={4} // number of per section
                  step={15}
                  views={{ month: true, week: true, day: true }} // Show only month, week, and day views
                  components={{ event: CustomEvent }}
                  formats={{
                    dayFormat: "EEEE", // day labels
                  }}
                  onSelectSlot={handleSelectSlot}
                  onSelectEvent={handleSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const CustomEvent = (event:any) => {
//   console.log(event,"sadfsdfsd")
//   return (
//     <span> <strong> {event.title} </strong> </span>
//   )
// }
// Custom Toolbar Component
const CustomToolbar = ({ label }: any) => {
  return (
    <div className="custom-toolbar ">
      <strong>{label}</strong>
      {/* Add custom buttons or components here */}
    </div>
  );
};
