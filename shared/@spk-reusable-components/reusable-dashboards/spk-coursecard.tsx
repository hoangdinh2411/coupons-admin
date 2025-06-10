import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface Course {
    title?: string;
    text?: string;
    color?: string;
    icon?: string;
    percent?: string;
    avatarColor?: string;
    avatarIcon?: string;
}

interface SpkCoursecardProps {
    course: Course;
}

const SpkCoursecard: React.FC<SpkCoursecardProps> = ({ course }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-end">
                        <div>
                            <div className="align-middle text-muted mb-1">{course.title}</div>
                            <div className="d-flex gap-2 flex-wrap align-items-center">
                                <div className={`fs-20 fw-semibold text-${course.avatarColor}`}>{course.text}</div>
                                <span className={`badge bg-${course.color}-transparent text-${course.color} rounded-pill`}>
                                    <i className={`fa fa-caret-${course.icon} me-2`}></i>{course.percent}
                                </span>
                            </div>
                        </div>
                        <div className={`avatar avatar-md rounded-4 bg-${course.avatarColor} shadow shadow-${course.avatarColor} text-fixed-white`}>
                            <i className={`ti ${course.avatarIcon} fs-18`}></i>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkCoursecard;
