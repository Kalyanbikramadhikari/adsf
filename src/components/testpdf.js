import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PdfGenerator = () => {
  const contentRef = useRef();

  const generatePdf = () => {
    const input = contentRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      const margins = {
        top: 80,
        bottom: 60,
        left:100
      }
        

      // Calculate new width and height based on margins
      const contentWidth = pdfWidth - margins.left - margins.right;
      const contentHeight = (canvas.height * contentWidth) / canvas.width;

      // Adjust the x and y coordinates to include the margins
      pdf.addImage(imgData, 'PNG', margins.left, margins.top, contentWidth, contentHeight);
      pdf.save('document.pdf');
    });
  };

  return (
    <div>
      <div ref={contentRef}>
        {/* Your HTML content here */}
        <h1>Hello, this will be converted to PDF!</h1>
        <p>Some content for the PDF document.</p>
      </div>
      <button onClick={generatePdf}>Download PDF</button>
    </div>
  );
};

export default PdfGenerator;
