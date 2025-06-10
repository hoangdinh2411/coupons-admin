import Image from 'next/image';
import React, { Fragment } from 'react'
import { ProgressBar } from 'react-bootstrap'

interface SpkCountrycardProps {
    dashboard?: any;
}
const SpkCountrycard: React.FC<SpkCountrycardProps> = ({ dashboard }) => {

    return (
        <Fragment>
            <li key={Math.random()} >
                <div className="d-flex align-items-center gap-3">
                    <div className="lh-1">
                        <span className="avatar avatar-md bg-light p-2">
                            <Image width={40} height={40} src={dashboard.flag} alt="" className="rounded-circle" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <div className="d-flex mb-2 justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <span className="fw-semibold d-block">{dashboard.country}</span>
                            </div>
                            <div className="fw-medium"><span className={`text-${dashboard.arrowColor} me-1`}><i className={`ti ti-arrow-${dashboard.arrowDir} align-middle`}></i></span><span>{dashboard.sales}</span> ({dashboard.progress}%)</div>
                        </div>
                        <ProgressBar className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={dashboard.progress} aria-valuemin={0} aria-valuemax={100}>
                            <ProgressBar className={`progress-bar ${dashboard.progressColor}`} now={dashboard.progress}></ProgressBar>
                        </ProgressBar>
                    </div>
                </div>
            </li>
        </Fragment>
    )
}

export default SpkCountrycard