import { Card } from "react-bootstrap";
import SpkButton from "../reusable-uiElements/spk-buttons";

interface SpkPlansCardProps {
    title?: string;
    prices?: string;
    color?: string;
    description?: string;
    defaulttitle?:string
}


const SpkPlansCard: React.FC<SpkPlansCardProps> = ({ title, prices, color, description, defaulttitle}) => {
    return (
        <Card className="custom-card">
            <Card.Body className="p-4">
                <div className="d-flex gap-2 justify-content-between align-items-end mb-1 flex-wrap">
                    <div className="flex-grow-1">
                    {title ? (
                            <h6 className="fw-semibold" dangerouslySetInnerHTML={{ __html: title }} />
                        ) : (
                            <h6 className="fw-semibold">{defaulttitle}</h6>
                        )}
                        <div className="d-flex gap-1 align-items-center mt-3 pt-1">
                            <div className="fs-30 fw-bold lh-1">
                                <sup className="fs-16 op-7 align-middle fw-medium me-1 d-inline-block">$</sup>
                                {prices}
                                <span className="op-7 fw-semibold fs-12 ms-1 align-end d-inline-block">.99</span>
                            </div>
                            <span className="badge bg-light text-default fs-11 fw-normal mt-2">
                                Billed Monthly
                            </span>
                        </div>
                    </div>
                    <SpkButton Buttontype="button" Buttonvariant={color} Customclass="btn-wave waves-effect waves-light rounded-pill">
                        Select Plan
                    </SpkButton>
                </div>
                <p className="mb-0 text-muted mt-3">{description}</p>
            </Card.Body>
        </Card>
    );
};

export default SpkPlansCard;
