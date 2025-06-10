import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'
import Image from 'next/image';

interface SpkCryptocardProps {
    crypto?: any;
    height?: string;
    width?: string;
}
const SpkCryptocard: React.FC<SpkCryptocardProps> = ({ crypto }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex align-items-center gap-4 justify-content-between flex-wrap">
                        <div className="d-flex align-items-start gap-2 align-items-center">
                            <div className={`lh-1 avatar avatar-xl p-2 border border-${crypto.bgColor} border-opacity-25 bg-${crypto.bgColor}-transparent avatar-rounded`}>
                                <Image width={64} height={64} src={crypto.imgSrc} alt="" className="w-auto" />
                            </div>
                            <div>
                                <h6 className={`mb-2 ${crypto.titleclass}`}>{crypto.title}</h6>
                                <p className="mb-0 text-muted fs-14 fw-medium">{crypto.subTitle}</p>
                            </div>
                        </div>
                        <div>
                            <div className={`text-${crypto.iconColor} mb-2 fs-14 fw-medium`}><i className={`ti ti-trending-${crypto.icon} me-1 d-inline-block`}></i>{crypto.percenTage}</div>
                            <h6 className="mb-0 fw-medium text-muted">{crypto.price}</h6>
                        </div>
                        <div className="text-end">
                            <p className="mb-2 fw-medium"><span className="text-muted fs-12">Market Cap:</span><span className="fs-14">{crypto.cap}</span></p>
                            <div id={crypto.id}>
                                <Spkapexcharts chartOptions={crypto.chartOptions} chartSeries={crypto.chartSeries} type={crypto.type} height={"25"} width={"120"} />
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkCryptocard