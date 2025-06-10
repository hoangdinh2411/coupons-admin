"use client"

import Countdown from "react-countdown";

const AfterComplete = () => <span>You are good to go!</span>;

const rendering = ({ days, hours, minutes, seconds, completed }: any) => {

    if (completed) {
        return <AfterComplete />;
    } else {
        return (
            <div className="d-flex gap-4 flex-wrap flex-xl-nowrap flex-shrink-0 mt-5 mb-0 gy-xxl-0 gy-3 justify-content-center authentication-time-count">
                <div>
                    <div className="p-3 timer-content">
                        <p className="mb-1 fs-12 text-fixed-white flex-fill">Days</p>
                        <h5 className="fw-semibold text-fixed-white mb-0 flex-fill">{days}</h5>
                    </div>
                </div>
                <div>
                    <div className="p-3 timer-content">
                        <p className="mb-1 fs-12 text-fixed-white flex-fill">Hours</p>
                        <h5 className="fw-semibold text-fixed-white mb-0 flex-fill">{hours}</h5>
                    </div>
                </div>
                <div>
                    <div className="p-3 timer-content">
                        <p className="mb-1 fs-12 text-fixed-white flex-fill">Minutes</p>
                        <h5 className="fw-semibold text-fixed-white mb-0 flex-fill">{minutes}</h5>
                    </div>
                </div>
                <div>
                    <div className="p-3 timer-content">
                        <p className="mb-1 fs-12 text-fixed-white flex-fill">Seconds</p>
                        <h5 className="fw-semibold text-fixed-white mb-0 flex-fill">{seconds}</h5>
                    </div>
                </div>
            </div>
        );
    }
};

export function DayCounter() {
    return (<Countdown date={Date.now() + 15599999990} renderer={rendering} />);
}
