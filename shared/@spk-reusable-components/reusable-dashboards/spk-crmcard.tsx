import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'

interface CrmData {
    percentage?: string;
    arrowIcon?: 'up' | 'down';
    chartOptions?: object;
    chartSeries?: object[];
    type?: string;
    color?: string;
    icon?: string;
    price?: string;
    revenue?: string;
    textColor?: string;
}

interface SpkCrmcardProps {
    crm: CrmData;
}

const SpkCrmcard: React.FC<SpkCrmcardProps> = ({ crm }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex gap-2 justify-content-between">
                        <div className="d-flex flex-column justify-content-between gap-2">
                            <div className="pt-1">
                                <span className={`text-${crm.textColor} fw-semibold me-2`}>
                                    {crm.percentage}
                                    <i className={`ri-arrow-${crm.arrowIcon}-line lh-1 align-center fs-14 fw-normal`}></i>
                                </span>
                                <br />
                                <span className="text-muted fw-medium fs-12">from last month</span>
                            </div>
                            <div id="crmchart01">
                                <Spkapexcharts chartOptions={crm.chartOptions} chartSeries={crm.chartSeries} type={crm.type} height={30} width={140} />
                            </div>
                        </div>
                        <div className="text-end">
                            <div className={`avatar avatar-md bg-${crm.color} bg-opacity-25 avatar-rounded mb-2`}>
                                <div className={`avatar avatar-sm bg-${crm.color} text-fixed-white avatar-rounded`}>
                                    <i className={`ri-${crm.icon} fs-18`}></i>
                                </div>
                            </div>
                            <div>
                                <h4 className="fw-semibold mb-2">{crm.price}</h4>
                                <div className="text-muted mb-0">{crm.revenue}</div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkCrmcard
