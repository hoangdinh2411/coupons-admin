import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

const SpkTemperaturecard = () => {
    return (
        <Fragment>
            <Card className="custom-card bg-primary">
                <Card.Body className=" p-4 text-fixed-white">
                    <div className="d-flex gap-2 align-items-start justify-content-between flex-wrap">
                        <i className="ti ti-cloud fs-40 text-secondary lh-1"></i>
                        <div className="text-end">
                            <h6 className="text-fixed-white">Temperature</h6>
                            <p className="mb-0 text-fixed-white">-50°C</p>
                        </div>
                    </div>
                    <h2 className="mb-0 mt-2 text-fixed-white fw-semibold">32 Mins</h2>
                    <p className="text-fixed-white op-7 mb-4 fs-12">Left Until Ground</p>
                    <div className="op-8">
                        <i className="ti ti-map-pin-filled fs-16 me-2 d-inline-block op-6"></i><span className="text-fixed-white">Location: London</span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkTemperaturecard