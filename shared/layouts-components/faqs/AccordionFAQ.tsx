'use client'
import { Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Accordion, Card, Form, useAccordionButton } from 'react-bootstrap';

export interface AccordionFAQProps {
  eventKey: number;
  question: string;
  answer: string;
  handleSetFAQ: (id: number, updatedItem: FAQItem) => void;
  onRemoveAccordion: (index: number) => void;
}
export interface FAQItem {
  id?: number,
  question: string;
  answer: string;
}
const AccordionFAQ: React.FC<AccordionFAQProps> = ({
  eventKey,
  question,
  answer,
  handleSetFAQ,
  onRemoveAccordion,
}) => {
  const [error, setError] = useState(false);

  const FAQItemRef = useRef<Pick<FAQItem, 'answer' | 'question'>>({ question, answer });

  const validateAndUpdate = () => {
    const isValid =
      FAQItemRef.current.question.trim() !== '' &&
      FAQItemRef.current.answer.trim() !== '';

    setError(!isValid);

    if (isValid) {
      handleSetFAQ(eventKey ?? 0, FAQItemRef.current);
    }
  };
  const decoratedOnClick = useAccordionButton(eventKey.toString());
  return (
    <Card className='border-0'>
      <Card.Header className='p-0 border-0 d-flex' onClick={decoratedOnClick}  >
        <Form.Control
          maxLength={200}
          defaultValue={question}
          onBlur={validateAndUpdate}
          onChange={(e) => {
            FAQItemRef.current.question = e.target.value;
            validateAndUpdate();
          }}
          style={{
            background: 'rgba(0,0,0,0.05)',
            fontWeight: 600,
            color: '#333',
            borderColor:
              error && FAQItemRef.current.question.trim() === ''
                ? 'red'
                : undefined,
          }}
          placeholder="Enter question..."
        />
        <button style={{
          position: 'absolute',
          right: '8px',
          top: '8px',
          outline: 'none',
          border: 'none',
        }}
          onClick={() => onRemoveAccordion(eventKey)}
        >
          <i className="bi bi-trash3"></i>

        </button>

      </Card.Header>
      <Accordion.Collapse eventKey={eventKey.toString()}>
        <Card.Body className='p-0'><Form.Control
          as="textarea"
          rows={3}
          defaultValue={answer}
          onBlur={validateAndUpdate}
          onChange={(e) => {
            FAQItemRef.current.answer = e.target.value;
            validateAndUpdate();
          }}
          placeholder="Enter answerer..."
          style={{
            borderColor:
              error && FAQItemRef.current.answer.trim() === ''
                ? 'red'
                : undefined,
          }}
        /></Card.Body>
      </Accordion.Collapse>
      {
        error && (
          <Typography variant="caption" mt={1} className="text-danger">
            Questions and Answerer cannot be empty.
          </Typography>
        )
      }
    </Card >
  );
};

export default AccordionFAQ;
