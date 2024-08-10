// usePrintToPDF.js
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const usePrintToPDF = (reportId = "") => {
    const sectionRef = useRef(null);

    const printToPDF = () => {
        if (sectionRef.current) {
            const element = sectionRef.current;

            // Define options for html2pdf
            const options = {
                margin: [0.5, 0.5, 0.5, 0.5], // Top, right, bottom, left margins
                filename: `report-${reportId}.pdf`, // Filename of the PDF
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['css', 'legacy'] },
            };

            // Generate PDF
            html2pdf().from(element).set(options).save();
        }
    };

    return { sectionRef, printToPDF };
};

export default usePrintToPDF;
