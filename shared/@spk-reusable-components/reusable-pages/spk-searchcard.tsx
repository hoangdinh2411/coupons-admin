import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import SpkDropdown from '../reusable-uiElements/spk-dropdown'
import Image from 'next/image';

interface SearchData {
  imgSrc: string;
  title: string;
  description: string;
  paragraph: string;
  link: string;
  links: string;
  tags: React.ReactNode;
}

interface SpkSearchCardProps {
  search: SearchData;
  cardClass?: string;
  bodyClass?: string;
}

const SpkSearchCard: React.FC<SpkSearchCardProps> = ({ search, cardClass, bodyClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Body className={bodyClass}>
          <div className="d-flex align-items-start justify-content-between flex-wrap gap-1 mb-3">
            <div className="d-flex gap-2 align-items-start flex-wrap">
              <span className="avatar avatar-lg avatar-rounded bg-primary-transparent p-2">
                <Image width={48} height={48} src={search.imgSrc} alt="Modern Admin Logo" />
              </span>
              <div className="align-self-center">
                <h6 className="fw-semibold mb-0">
                  <Link href="#!" className="searched-item-main-link">{search.title}</Link>
                </h6>
                <span className="fs-12 text-muted">{search.description}</span>
              </div>
            </div>
            <div className="ms-auto d-flex gap-1 flex-wrap">
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Toggletext="View By" Customtoggleclass="btn-sm btn-wave waves-effect waves-light">
                <Dropdown.Item as="li" href="#!">Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Day</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Year</Dropdown.Item>
              </SpkDropdown>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="secondary-light" Menulabel="dropdownMenuButton1" Arrowicon1={true} Toggletext="" Customtoggleclass="btn-sm btn-wave waves-effect waves-light btn-icon no-caret">
                <Dropdown.Item as="li" href="#!">Read More</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Report</Dropdown.Item>
              </SpkDropdown>
            </div>
          </div>
          <p className="text-muted">
            {search.paragraph}
          </p>
          <div className="mb-3 d-flex gap-2 flex-wrap text-break">
            <span className="fw-medium">Links:</span>
            <Link scroll={false} href="#!" className="link-info text-decoration-underline">{search.link}</Link> ,
            <Link scroll={false} href="#!" className="link-info text-decoration-underline">{search.links}</Link>
          </div>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <span className="fw-medium">Related Tags:</span>
            {search.tags}
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkSearchCard;
