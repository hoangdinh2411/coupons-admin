'use client'
import { FAQItem } from '@/shared/layouts-components/faqs/AccordionFAQ';
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast';


export default function useFaqs() {
    const [faqList, setFaqList] = useState<FAQItem[]>([]);
    const onCreateAccordion = () => {
        const randomId = () => Date.now() + Math.floor(Math.random() * 1000);
        setFaqList((prev) => [...prev, { id: randomId(), question: '', answer: '' }]);
    };
    const handleRemoveAccordion = (id: number) => {
        setFaqList((prev) => prev.filter((item) => item.id !== id));
    };

    const handleAddFaq = (id: number, updatedItem: Omit<FAQItem, 'id'>) => {
        setFaqList((prev) =>
            prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
        );
    };

    const getFaqsValues = () => {
        if (!validate()) {
            toast.error('Please fill all faqs ')
            return
        }
        return faqList.map(({ id, ...rest }) => rest) ?? []
    }

    function validate() {
        return faqList.length > 0 ?
            faqList.every((faq) => faq.question.trim() !== '' && faq.answer.trim() !== '') : true;
    }
    return {
        faqList,
        onCreateAccordion,
        getFaqsValues,
        handleRemoveAccordion, handleAddFaq,
        setFaqList
    }
}