import React, { Fragment } from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

interface SpkRestordercardProps {
    widget?: any;
}
const SpkRestordercard: React.FC<SpkRestordercardProps> = ({ widget }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
                        <div>
                            Order Id:<div className="text-primary fw-semibold fs-14"> restorder1452#1 </div>
                        </div>
                        <div>
                            Total Items:<h6 className="mb-0"> 05 </h6>
                        </div>
                        <div>
                            Status:<br />
                            <div className={`badge bg-${widget.color}`}> {widget.status}</div>
                        </div>
                    </div>
                    <ProgressBar className="progress progress-sm progress-animate" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                        <ProgressBar className={`progress-bar progress-bar-striped bg-${widget.progressColor}`} now={65}></ProgressBar>
                    </ProgressBar>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkRestordercard