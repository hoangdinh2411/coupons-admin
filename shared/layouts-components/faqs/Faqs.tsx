'use client'
import React, { useMemo, useState } from 'react'
import AccordionFAQ, { FAQItem } from './AccordionFAQ';
import { Box } from '@mui/system';
import { Accordion, Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { Typography } from '@mui/material';

type Props = {
    values: FAQItem[]
    onAdd: () => void
    onChange: (id: number, updatedItem: Omit<FAQItem, 'id'>) => void
    onRemove: (id: number) => void
}

export default function Faqs({ values, onAdd, onChange, onRemove }: Props) {
    const validFaq = useMemo(() => {

        return values.length > 0 ?
            values.every((faq) => faq.question.trim() !== '' && faq.answer.trim() !== '') : true;
    }, [values])

    //  if (!validFaq) {
    //       toast.error('Please fill all faqs ')
    //       return
    //     }
    return (
        <Box
            sx={{
                border: 'none',
                mt: 2,
                mb: 2,
            }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <Form.Label className="text-default mb-0 fw-bold">
                    Faqs  {` ${values.length > 0 ? '- Total:' + values.length : ''}`}
                </Form.Label>
                <SpkButton
                    Buttonvariant="success"
                    Buttontype="button"
                    onClickfunc={onAdd}
                    Disabled={!validFaq}
                >
                    + Add FAQ
                </SpkButton>
            </Box>
            <Box
                sx={{
                    p: 2,
                    borderRadius: 2,
                    mt: 2,
                    mb: 2,
                    border: '1px solid',
                    borderColor: '#e9edf6',
                }}>

                {values.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        No FAQ added yet.
                    </Typography>
                ) : (
                    <Accordion defaultActiveKey="0">
                        {values.map((item) => (
                            <AccordionFAQ
                                key={item.id}
                                eventKey={item.id ?? 0}
                                question={item.question}
                                answer={item.answer}
                                handleSetFAQ={onChange}
                                onRemoveAccordion={onRemove}
                            />
                        ))}
                    </Accordion>
                )}
            </Box>
        </Box >
    )
}