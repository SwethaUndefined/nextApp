"use client";
import React, { useState, useEffect,useRef } from "react";
import { useDispatch } from "react-redux";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "./style.css";
import SideMenu from "@/app/dashboard/component/SideMenu";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getCalendarDetails } from "./calenderApi";

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
  const dispatch = useDispatch();
  const fromDate = '2024-07-26';
  const toDate = '2024-07-27';
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [activeEventModal, setActiveEventModal] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [events, setEvents] = useState([]);
  const modalRef = useRef(null);
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    // Add more months as needed
  ];

  const years = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    // Add more years as needed
  ];

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const handleSelectSlot = (slotInfo) => {
    const { start, end } = slotInfo;
    setActiveEventModal({ start, end });
  };

  const handleSelect = (event, e) => {
    
    const eventsAtTime = events.filter(e => e.start.getTime() === event.start.getTime());
  
    setActiveEventModal({ ...event, eventsAtTime });
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setActiveEventModal(null); // Close the modal
    }
  };

  useEffect(() => {
    fetchEvents();
    
    // Add event listener for clicks outside the modal
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const EventDetailModal = ({ events }) => {
    if (!events || !Array.isArray(events.events)) {
      return null; // Ensure events.events is an array before rendering
    }
    
    console.log({ events });
    const arr = events.events; // events.events should be an array
    console.log(arr);
  
    return (
      <div
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          width: "300px",
          backgroundColor: "white",
          border: "1px solid black",
          padding: "10px",
          color: "blue",
          height: "auto",
          zIndex: 1000,
          overflowY: "auto",
        }}
      >
        {arr.map((event, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p style={{ textTransform: "capitalize" }}>{event.title}</p>
            <p>
              {format(new Date(event.start), 'h:mm a')} - {format(new Date(event.end), 'h:mm a')}
            </p>
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0A66C2", textDecoration: "underline", textDecorationColor: "#0A66C2" }}
              >
                Join Meeting
              </a>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  
  

  const CustomEvent = ({ event }) => {
    const hasOverlap = event.count > 1;
    const eventTitles = event.events.map(e => e.title).join(', ');
  
    return (
      <div className="custom-event" style={{ position: "relative" }}>
        <div className="calendarTopSection">
          <ul>
            <li className="text-[12px]">
              {hasOverlap ? eventTitles : event.title}
            </li>
            <p className="text-[12px]">
              {format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}
            </p>
            {hasOverlap && (
              <div className="overlap-indicator" style={{
                position: "absolute",
                top: -6,
                right: -4,
                backgroundColor: "gold",
                borderRadius: "50%",
                padding: "2px 6px",
                color: "black",
                fontSize: "12px",
                fontWeight: "bold",
              }}>
                {event.count}
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  };
  

  const fetchEvents = async () => {
    try {
      const response = await getCalendarDetails(fromDate, toDate);
      const fetchedEvents = response.map(event => ({
        title: event.summary,
        start: new Date(event.start),
        end: new Date(event.end),
        desc: event.desc,
        link: event.link,
        id : event.id,
      }));

      const groupedEvents = fetchedEvents.reduce((acc, event) => {
        const startTime = event.start.getTime();
        if (!acc[startTime]) {
          acc[startTime] = [];
        }
        acc[startTime].push(event);
        return acc;
      }, {});

      // Flatten grouped events into a single array with counts
      const flattenedEvents = Object.entries(groupedEvents).map(([startTime, eventsAtTime]) => ({
        start: new Date(Number(startTime)),
        end: eventsAtTime[0].end, // Use the end time of the first event
        count: eventsAtTime.length,
        events: eventsAtTime,
        title: eventsAtTime[0].title // Use the title of the first event
      }));

      setEvents(flattenedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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
                  href="/P_M_JobDescriptions4"
                  className="btn btn-blue bg-[#0a66c2!important]"
                >
                  Create New JD
                </Link>
              </div>
            </div>
            <div className="TotalEmployees shadow bg-white rounded-3 p-3 w-100 mt-4">
              <div className="md:flex align-items-center">
                <h3 className="projectManHeading">Your Todo’s</h3>
                <div className="ml-auto d-flex todoHeadingSelect">
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
              <div className="calendar mt-4">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  onSelectEvent={handleSelect}
                  onSelectSlot={handleSelectSlot}
                  selectable
                  components={{
                    event: CustomEvent
                  }}
                />
                {activeEventModal && (
                  <EventDetailModal
                    events={activeEventModal}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
