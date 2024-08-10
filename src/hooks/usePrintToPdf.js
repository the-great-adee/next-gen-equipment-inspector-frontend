// usePrintToPDF.js
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const usePrintToPDF = () => {
    const sectionRef = useRef(null);

    const printToPDF = () => {
        if (sectionRef.current) {
            const element = sectionRef.current;

            // Define options for html2pdf
            const options = {
                margin: 0.5,
                filename: 'document.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            };

            // Generate PDF
            html2pdf().from(element).set(options).save();
        }
    };

    return { sectionRef, printToPDF };
};

export default usePrintToPDF;
