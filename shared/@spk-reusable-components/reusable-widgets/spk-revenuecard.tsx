import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'

interface SpkRevenuecardProps {
    widget?: any;
}

const SpkRevenuecard: React.FC<SpkRevenuecardProps> = ({ widget }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className=" p-0">
                    <div className="text-end mb-3 p-3">
                        <div className={`avatar avatar-lg bg-${widget.color} bg-opacity-25 avatar-rounded mb-3`}>
                            <div className={`avatar avatar-md bg-${widget.color} text-fixed-white avatar-rounded`}>
                                <i className="ri-bar-chart-box-line fs-18"></i>
                            </div>
                        </div>
                        <div>
                            <h4 className="fw-semibold mb-1">{widget.value}</h4>
                            <span className={`badge bg-${widget.iconColor}-transparent rounded-pill me-2`}>{widget.percentage}<i className={`ti ti-arrow-${widget.icon}`}></i></span><div className="text-muted mb-0 me-1 d-inline-block">{widget.title}</div>
                        </div>
                    </div>
                    <div id={widget.id}>
                        <Spkapexcharts chartOptions={widget.chartOptions} chartSeries={widget.chartSeries} type={widget.type} height="70" />
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkRevenuecard