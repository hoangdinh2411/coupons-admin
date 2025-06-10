import React, { Fragment } from 'react'
import SpkBadge from '../reusable-uiElements/spk-badge';
import Image from 'next/image';

interface SpkBrowsecardProps {
    dashboard?: any;
    ShowSales?: boolean;
    ShowBadge?: boolean;
}
const SpkBrowsecard: React.FC<SpkBrowsecardProps> = ({ dashboard, ShowBadge, ShowSales }) => {
    return (
        <Fragment>
            <li key={Math.random()}>
                <div className={`d-flex align-items-center flex-wrap gap-3 p-2 border border-${dashboard.borderColor} border-dashed border-opacity-25 rounded`}>
                    {ShowSales &&
                        <div>
                            <span className={`avatar avatar-md bg-${dashboard.badgeColor}-transparent`}>
                                <i className={dashboard.iconClass}></i>
                            </span>
                        </div>
                    }
                    {ShowBadge &&
                        <div className="lh-1">
                            <span className="avatar avatar-md">
                                <Image width={40} height={40} src={dashboard.avatarSrc} alt="" />
                            </span>
                        </div>
                    }
                    <div className="flex-fill">
                        <span className="fw-medium">{dashboard.name}</span>
                        <span className="d-block text-muted fs-12">{dashboard.company}</span>
                    </div>

                    {ShowSales &&

                        <div className="text-end ms-auto">
                            <span className="fw-semibold d-block mb-1"><span className="fw-normal fs-12"><i className={`ri-circle-fill fs-8 me-1 text-${dashboard.badgeColor}`}></i>Sales</span> - {dashboard.sales}</span>
                            <span className={`fs-11 fw-medium text-${dashboard.saleColor} d-block`}><i className={dashboard.trendIcon}></i>{dashboard.percentage}</span>
                        </div>
                    }
                    {ShowBadge &&
                        <div>
                            <SpkBadge variant={dashboard.badgeColor} >{dashboard.amount}</SpkBadge>
                        </div>
                    }
                </div>
            </li>
        </Fragment>
    )
}

export default SpkBrowsecard