import React, { Fragment } from 'react'

interface SpkRecentactivecardProps {
    dashboard?: any;
}
const SpkRecentactivecard: React.FC<SpkRecentactivecardProps> = ({ dashboard }) => {
    return (
        <Fragment>
            <li>
                <div className="d-flex align-items-start gap-3">
                    <div className="flex-fill">
                        <div className="d-flex align-items-center justify-content-between">
                            <span className={`d-block fw-semibold mb-1 ${dashboard.colorClass}`}>{dashboard.title}</span>
                            <span className="text-muted fs-12">{dashboard.time}</span>
                        </div>
                        <span className="d-block pe-5">
                            {dashboard.description}
                        </span>
                    </div>
                </div>
            </li>
        </Fragment>
    )
}

export default SpkRecentactivecard