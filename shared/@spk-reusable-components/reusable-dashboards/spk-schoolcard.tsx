import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'

interface SchoolData {
    bgColor?: string;
    icon?: string;
    title?: string;
    value?: string;
    percent?: string;
    percentColor?: string;
    chartOptions?:any;
    chartSeries?:any;
}

interface SpkSchoolcardProps {
    school: SchoolData;
    cardClass?: string;
}

const SpkSchoolcard: React.FC<SpkSchoolcardProps> = ({ school, cardClass }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body>
                    <div className="d-flex">
                        <div>
                            <div className={`avatar avatar-md bg-${school.bgColor} avatar-rounded shadow shadow-${school.bgColor} mb-3`}>
                                <i className={`ti ti-${school.icon} fs-5`}></i>
                            </div>
                            <div>
                                <p className="mb-1">{school.title}</p>
                                <h4 className="mb-0 fw-semibold">{school.value}</h4>
                            </div>
                        </div>
                        <div className="text-end ms-auto">
                            <span className={`text-${school.percentColor} fw-semibold fs-12 mb-0`}>{school.percent}</span>
                            <span className="text-muted fw-medium fs-12"> last month</span>
                        </div>
                    </div>
                    <div className="chart-cards">
                        <div id="schl-chart1">
                            <Spkapexcharts chartOptions={school.chartOptions} chartSeries={school.chartSeries} type={"area"} height={120} width={180} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkSchoolcard;
