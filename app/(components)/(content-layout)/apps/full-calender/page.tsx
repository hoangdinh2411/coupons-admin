"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import listPlugin from "@fullcalendar/list";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import Link from "next/link";
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Image from "next/image";

interface FullCalendarProps {}

const FullCalender: React.FC<FullCalendarProps> = () => {

    let eventGuid = 0;
    const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
    const INITIAL_EVENTS = [
      {
        id: createEventId(),
        title: "Meeting",
        start: todayStr,
      },
      {
        id: createEventId(),
        title: "Meeting Time",
        start: todayStr + "T16:00:00",
      },
    ];
  
    function createEventId() {
      return String(eventGuid++);
    }
    const initialstate1 = {
        calendarEvents: [
            {
                title: "Atlanta Monster",
                start: new Date("2019-04-04 00:00"),
                id: "1001",
            },
            {
                title: "My Favorite Murder",
                start: new Date("2019-04-05 00:00"),
                id: "1002",
            },
        ],

        events: [
            {
                title: "Calendar Events",
                id: "1",
                bg: "primary",
                bgColor: 'text-primary',
                icon: 'ri-calendar-line'
            },
            {
                title: "Birthday Events",
                id: "2",
                bg: "warning",
                bgColor: 'text-warning',
                icon: 'ri-cake-2-line'
            },
            {
                title: "Holiday Calendar",
                id: "3",
                bg: "success",
                bgColor: 'text-success',
                icon: 'ri-gift-line'
            },
            {
                title: "Office Events",
                id: "4",
                bg: "danger",
                bgColor: 'text-danger',
                border: "border-info-transparent",
                icon: 'ri-building-line'
            },
            {
                title: "Other Events",
                id: "5",
                bg: "info",
                bgColor: 'text-info',
                icon: 'ri-tent-line'
            },
            {
                title: "Festival Events",
                id: "6",
                bg: "warning",
                bgColor: 'text-warning',
                icon: 'ri-time-line'
            },
            {
                title: "Timeline Events",
                id: "7",
                bg: "success",
                bgColor: 'text-success',
                icon: 'ri-timeline-view'
            },
        ],
    };

    const [state] = useState(initialstate1);
  
    const externalEventsRef:any = useRef<HTMLDivElement | null>(null); 
  
    useEffect(() => {
      const draggableEl: any = externalEventsRef.current;
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          const title = eventEl.getAttribute("title");
          const id = eventEl.getAttribute("data");
          const classValue = eventEl.getAttribute("class");
          return {
            title: title,
            id: id,
            className: classValue,
          };
        },
      });
    }, []);
  
    function renderEventContent(eventInfo: any) {
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      );
    }
    const handleEventClick = (clickInfo: any) => {
      if (
        window.confirm(
          `Are you sure you want to delete the event '${clickInfo.event.title}'`
        )
      ) {
        clickInfo.event.remove();
      }
    };
    const handleEvents = () => {};
  
    const handleDateSelect = (selectInfo: any) => {
      const title = prompt("Please enter a new title for your event");
      const calendarApi = selectInfo.view.calendar;
  
      calendarApi.unselect();
  
      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
      }
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Full Calendar" />

            <Pageheader title="Apps" currentpage="Full Calendar" activepage="Full Calendar" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card calendar-card">
                        <Card.Body>
                            <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                                <div>
                                    <h5>Monthly Overview</h5>
                                    <p className="mb-0">
                                        Check your reminders and appointments for this month. You
                                        can view all upcoming events and create new ones directly
                                        from this dashboard.
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <Image fill src="../../assets/images/media/media-98.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Full Calendar</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="calendar2">
                            <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
                  initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                  initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                  eventsSet={handleEvents}
                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-3">
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>All Events</Card.Title>
                            <button id="addEventButton" className="btn btn-primary">
                                Add Event
                            </button>
                        </div>
                        <Card.Body className="p-0">
                        <ul id="external-events" ref={externalEventsRef} className="mb-0 p-3 list-unstyled column-list">
                                {state.events.map((event, index) => (
                                    <li key={index} className={`fc-event mb-2 fc-h-event fc-daygrid-event fc-daygrid-block-event bg-${event.bg}-transparent`}
                                        title={event.title} >
                                        <div className={`fc-event-main ${event.bgColor}`}>
                                            <span className="ms-1 me-2 d-inline-block fs-16">
                                                <i className={event.icon}></i>
                                            </span>
                                            {event.title}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="upcoming-events">
                                <div className="d-flex mb-3 gap-2 flex-wrap">
                                    <h6 className="mb-0">Upcoming Events</h6>
                                    <Link href="#!" scroll={false} className="text-success text-decoration-underline fs-12 ms-auto fw-medium">View All</Link>
                                </div>
                                <ul className="mb-0 list-unstyled">
                                    <li className="mb-3 d-flex gap-2 flex-wrap">
                                        <div className="fw-medium"><i className="ri-circle-line text-primary mx-2"></i>Project Meeting </div>
                                        <div className="text-muted fs-12 ms-auto">- Sep 15, 10:00 AM</div>
                                    </li>
                                    <li className="mb-3 d-flex gap-2 flex-wrap">
                                        <div className="fw-medium"><i className="ri-circle-line text-secondary mx-2"></i>Quarterly Review </div>
                                        <div className="text-muted fs-12 ms-auto">- Sep 22, 2:00 PM</div>
                                    </li>
                                    <li className="d-flex gap-2 flex-wrap">
                                        <div className="fw-medium"><i className="ri-circle-line text-success mx-2"></i>Team Building Workshop </div>
                                        <div className="text-muted fs-12 ms-auto">- Sep 30, 9:00 AM</div>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex mb-3 gap-2 flex-wrap">
                                <h6 className="mb-0">Recent Activity</h6>
                                <Link href="#!" scroll={false} className="text-secondary text-decoration-underline fs-12 ms-auto fw-medium">View All</Link>
                            </div>
                            <div id="full-calendar-activity">
                                <ul className="list-unstyled mb-0 fullcalendar-events-activity pe-2">
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap flex-xxl-nowrap gap-1">
                                            <p className="mb-1 fw-medium fs-12">Reviewed the final draft of the proposal</p>
                                            <span className="badge bg-primary ms-auto">Sep 10, 2024</span>
                                        </div>
                                        <div className="text-muted fs-12">
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <Image width={20} height={20} src="../../assets/images/faces/15.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <Image width={20} height={20} src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded bg-info">
                                                    P
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap flex-xxl-nowrap gap-1">
                                            <p className="mb-1 fw-medium fs-12">Completed user testing for the new feature</p>
                                            <span className="badge bg-success ms-auto">Sep 08, 2024</span>
                                        </div>
                                        <div className="text-muted fs-12">
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <Image width={20} height={20} src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <Image width={20} height={20} src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <Image width={20} height={20} src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap flex-xxl-nowrap gap-1">
                                            <p className="mb-1 fw-medium fs-12">Updated the project timeline and shared with the team</p>
                                            <span className="badge bg-secondary ms-auto">Sep 05, 2024</span>
                                        </div>
                                        <div className="text-muted fs-12">
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <Image width={20} height={20} src="../../assets/images/faces/12.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded bg-success">
                                                    A
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="reminders">
                                <div className="d-flex mb-3 gap-2 flex-wrap">
                                    <h6 className="mb-0">Reminders</h6>
                                    <Link href="#!" scroll={false} className="text-primary text-decoration-underline fs-12 ms-auto fw-medium">View More</Link>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-3 d-flex gap-2 flex-wrap ms-2">
                                        <div className="d-flex gap-2">
                                            <div className=""><i className="fe fe-bell lh-1 align-center text-success"></i></div>
                                            <div className="fw-medium">Submit Report </div>
                                        </div>
                                        <div className="text-muted fs-12 ms-auto">Sep 17, 2024</div>
                                    </li>
                                    <li className="d-flex gap-2 flex-wrap ms-2">
                                        <div className="d-flex gap-2">
                                            <div className=""><i className="fe fe-bell lh-1 align-center text-info"></i></div>
                                            <div className="fw-medium">Prepare Presentation </div>
                                        </div>
                                        <div className="text-muted fs-12 ms-auto">Sep 28, 2024</div>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default FullCalender;
