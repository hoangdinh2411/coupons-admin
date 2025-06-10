import React, { Fragment } from 'react'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'
import { Card } from 'react-bootstrap';

interface Spkbudgetwidgetcomponentprops {
    widget?: any;
}

const SpkbudgetCard: React.FC<Spkbudgetwidgetcomponentprops> = ({ widget }) => {
    return (

        <Fragment>
            <Card className="custom-card overflow-hidden">
                <Card.Body>
                    <div className="d-flex flex-wrap gap-1 flex-xxl-nowrap">
                        <div className="flex-fill d-flex gap-2 align-items-center">
                            <div className={widget.iconBackgroundClass}>
                                <i className={`${widget.icon} fs-5 lh-1`}></i>
                            </div>
                            <p className="mb-0 fw-medium">{widget.title}</p>
                        </div>
                        <div className="text-end ms-auto">
                            <h4 className="mb-0 fw-semibold">{widget.value}</h4>
                        </div>
                    </div>
                </Card.Body>
                <div className={`d-flex gap-2 align-items-center flex-wrap justify-content-between ${widget.chartBackgroundClass}`}>
                    <div>
                        <Spkapexcharts chartOptions={widget.chartOptions} chartSeries={widget.chartSeries} type={widget.type} height={"60"} width={"120"} />
                    </div>
                    <div className="text-end pe-3">
                        <span className="text-muted fw-medium fs-12">{widget.subtitle} </span>
                        <span className={`fw-semibold fs-12 mb-0 ms-1 ${widget.changeClass}`}>{widget.change}</span>
                    </div>
                </div>
            </Card>
        </Fragment>

    )
}

export default SpkbudgetCard