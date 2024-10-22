import React, { useRef } from 'react'
import PdfHeader from './PdfHeader'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TestTwo = () => {
    const contentRef = useRef();
    const generatePdf = () => {
        const input = contentRef.current;

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            console.log('pdfWidth, pdfHeight', pdfWidth, pdfHeight)

            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            console.log('imgWidth, imgHeight', imgWidth, imgHeight)
            // Calculate the aspect ratio
            const aspectRatio = imgWidth / imgHeight;
            const contentWidth = pdfWidth; // Full width of the PDF page
            const contentHeight = contentWidth / aspectRatio; // Adjust height according to width

            let positionY = 0; // Start at the top of the page
            const margin = 10; // Adjust margins as needed

            // Add content while keeping track of height to determine page breaks
            while (positionY < imgHeight) {
                pdf.addImage(imgData, 'PNG', 0, positionY - margin, contentWidth, contentHeight);
                positionY += pdfHeight; // Move to the next page
                if (positionY < imgHeight) {
                    pdf.addPage(); // Add a new page if there's more content
                }
            }

            // pdf.save('document.pdf');
        });
    };
    return (
        <div ref={contentRef}>
            <PdfHeader />
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>URINE - GENERAL TEST REPORT</h2>
                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginBottom: '20px',
                        fontSize: '14px',
                    }}
                >
                    <thead>
                        <tr>
                            <th >Test</th>
                            <th >Result</th>
                            <th >Unit</th>
                            <th >Reference Range</th>
                            <th >Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="5" style={categoryStyle}>URINE RE/ME</td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Physical Examination</td>
                        </tr>
                        <tr>
                            <td >Color</td>
                            <td >Light Yellow</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Transparency</td>
                            <td >Slightly Turbid</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Chemical Examination</td>
                        </tr>
                        <tr>
                            <td >pH</td>
                            <td >Acidic</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Albumin</td>
                            <td >Nil</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Sugar</td>
                            <td >Nil</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Microscopical Examination</td>
                        </tr>
                        <tr>
                            <td >Pus Cell</td>
                            <td >2-4</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Epithelial Cell</td>
                            <td >6-8</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >RBC</td>
                            <td >Nil</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Crystal</td>
                            <td >Nil</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Cast</td>
                            <td >Nil</td>
                            <td >/LPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Mucus threads</td>
                            <td >Seen.</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    --------- End of Report ---------
                </div>
            </div>



            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>URINE - GENERAL TEST REPORT</h2>
                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginBottom: '20px',
                        fontSize: '14px',
                    }}
                >
                    <thead>
                        <tr>
                            <th >Test</th>
                            <th >Result</th>
                            <th >Unit</th>
                            <th >Reference Range</th>
                            <th >Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="5" style={categoryStyle}>URINE RE/ME</td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Physical Examination</td>
                        </tr>
                        <tr>
                            <td >Color</td>
                            <td >Light Yellow</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Transparency</td>
                            <td >Slightly Turbid</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Chemical Examination</td>
                        </tr>
                        <tr>
                            <td >pH</td>
                            <td >Acidic</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Albumin</td>
                            <td >Nil</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Sugar</td>
                            <td >Nil</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Microscopical Examination</td>
                        </tr>
                        <tr>
                            <td >Pus Cell</td>
                            <td >2-4</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Epithelial Cell</td>
                            <td >6-8</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >RBC</td>
                            <td >Nil</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Crystal</td>
                            <td >Nil</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Cast</td>
                            <td >Nil</td>
                            <td >/LPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Mucus threads</td>
                            <td >Seen.</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    --------- End of Report ---------
                </div>
            </div>

            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>URINE - GENERAL TEST REPORT</h2>
                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginBottom: '20px',
                        fontSize: '14px',
                    }}
                >
                    <thead>
                        <tr>
                            <th >Test</th>
                            <th >Result</th>
                            <th >Unit</th>
                            <th >Reference Range</th>
                            <th >Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="5" style={categoryStyle}>URINE RE/ME</td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Physical Examination</td>
                        </tr>
                        <tr>
                            <td >Color</td>
                            <td >Light Yellow</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Transparency</td>
                            <td >Slightly Turbid</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Chemical Examination</td>
                        </tr>
                        <tr>
                            <td >pH</td>
                            <td >Acidic</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Albumin</td>
                            <td >Nil</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Sugar</td>
                            <td >Nil</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td colSpan="5" style={subHeaderStyle}>Microscopical Examination</td>
                        </tr>
                        <tr>
                            <td >Pus Cell</td>
                            <td >2-4</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Epithelial Cell</td>
                            <td >6-8</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >RBC</td>
                            <td >Nil</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Crystal</td>
                            <td >Nil</td>
                            <td >/HPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Cast</td>
                            <td >Nil</td>
                            <td >/LPF</td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td >Mucus threads</td>
                            <td >Seen.</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    --------- End of Report ---------
                </div>
            </div>

            <button onClick={generatePdf}>Download PDF</button>

        </div>
    )
}

export default TestTwo

// const headerStyle = {
//     border: '1px solid black',
//     backgroundColor: '#f2f2f2',
//     padding: '8px',
//     textAlign: 'left',
// };

const categoryStyle = {
    fontWeight: 'bold',
    fontSize: '16px',
    border: '1px solid black',
    backgroundColor: '#e0e0e0',
    textAlign: 'left',
};

const subHeaderStyle = {
    fontWeight: 'bold',
    border: '1px solid black',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
};

// const cellStyle = {
//     border: '1px solid black',
//     padding: '8px',
//     textAlign: 'left',
// };

