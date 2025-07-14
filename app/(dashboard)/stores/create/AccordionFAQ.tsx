import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { Box, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import { AccordionFAQProps, FAQItem } from './CreateForm';

const AccordionFAQ: React.FC<AccordionFAQProps> = ({
  eventKey,
  ques,
  answ,
  handleSetFAQ,
  onRemoveAccordion,
}) => {
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);

  const FAQItemRef = useRef<Pick<FAQItem, 'answ' | 'ques'>>({ ques, answ });

  const validateAndUpdate = () => {
    const isValid =
      FAQItemRef.current.ques.trim() !== '' &&
      FAQItemRef.current.answ.trim() !== '';

    setTouched(true);
    setError(!isValid);

    if (isValid) {
      handleSetFAQ(FAQItemRef.current);
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Accordion.Item
        eventKey={eventKey.toString()}
        className={error ? 'border border-danger rounded' : ''}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pr={2}
        >
          <Accordion.Header style={{ flex: 1 }}>
            <Form.Control
              maxLength={200}
              defaultValue={ques}
              onBlur={validateAndUpdate}
              onChange={(e) => {
                FAQItemRef.current.ques = e.target.value;
                if (touched) validateAndUpdate();
              }}
              style={{
                fontWeight: 600,
                color: '#333',
                borderColor:
                  error && FAQItemRef.current.ques.trim() === ''
                    ? 'red'
                    : undefined,
              }}
              placeholder="Enter question..."
            />
          </Accordion.Header>
          <SpkButton
            Buttontype="button"
            onClickfunc={() => onRemoveAccordion(eventKey)}
          >
            <i className="bi bi-trash3"></i>
          </SpkButton>
        </Box>

        <Accordion.Body>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={answ}
            onBlur={validateAndUpdate}
            onChange={(e) => {
              FAQItemRef.current.answ = e.target.value;
              if (touched) validateAndUpdate();
            }}
            placeholder="Enter answer..."
            style={{
              borderColor:
                error && FAQItemRef.current.answ.trim() === ''
                  ? 'red'
                  : undefined,
            }}
          />
        </Accordion.Body>
      </Accordion.Item>

      {error && (
        <Typography variant="caption" mt={2} className="text-danger">
          Question and Answer cannot be empty.
        </Typography>
      )}
    </Box>
  );
};

export default AccordionFAQ;
