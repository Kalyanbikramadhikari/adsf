
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/10/04
// Modified-Date: 

import React, { useRef, useState } from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { useGetDoctorPerPageQuery, useGetDoctorsQuery, useUpdateDoctorMutation } from '../../store/APIFeatures/DoctorApi'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TablePagination } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpdateDoctor from '../../dialogBoxes/UpdateDoctor';
import AddDoctor from '../../dialogBoxes/AddDoctor';


const doctorList = [
    { "id": 1, "doctorName": "Dr. Sarah Johnson", "Qualification": "MD" },
    { "id": 2, "doctorName": "Dr. James Smith", "Qualification": "MBBS, MS" },
    { "id": 3, "doctorName": "Dr. Emily Davis", "Qualification": "MD, Pediatrics" },
    { "id": 4, "doctorName": "Dr. Michael Brown", "Qualification": "MBBS, MD" },
    { "id": 5, "doctorName": "Dr. Olivia Martinez", "Qualification": "DNB, Cardiologist" },
    { "id": 6, "doctorName": "Dr. William Garcia", "Qualification": "MBBS, MD (General Medicine)" },
    { "id": 7, "doctorName": "Dr. Ava Wilson", "Qualification": "MBBS, MD (Dermatology)" },
    { "id": 8, "doctorName": "Dr. Alexander Lee", "Qualification": "MBBS, MS (Orthopedics)" },
    { "id": 9, "doctorName": "Dr. Mia Hernandez", "Qualification": "MBBS, MD (Gastroenterology)" },
    { "id": 10, "doctorName": "Dr. Benjamin Clark", "Qualification": "MBBS, MS (Surgery)" },
    { "id": 11, "doctorName": "Dr. Charlotte Moore", "Qualification": "MD (Gynecology)" },
    { "id": 12, "doctorName": "Dr. Lucas Robinson", "Qualification": "MBBS, MD (Neurology)" },
    { "id": 13, "doctorName": "Dr. Amelia Walker", "Qualification": "MD (Radiology)" },
    { "id": 14, "doctorName": "Dr. Daniel Wright", "Qualification": "MBBS, DNB (Anesthesia)" },
    { "id": 15, "doctorName": "Dr. Harper Young", "Qualification": "MBBS, MS (Ophthalmology)" },
    { "id": 16, "doctorName": "Dr. Jack Scott", "Qualification": "MD (Nephrology)" },
    { "id": 17, "doctorName": "Dr. Isabella Green", "Qualification": "MBBS, MS (ENT)" },
    { "id": 18, "doctorName": "Dr. Henry Adams", "Qualification": "MD (Cardiology)" },
    { "id": 19, "doctorName": "Dr. Evelyn Hall", "Qualification": "MD (Oncology)" },
    { "id": 20, "doctorName": "Dr. Liam Allen", "Qualification": "MBBS, MD (Endocrinology)" }
]

const updateDocFields = {
    "name": "morpheus",
    "job": "zion resident"
}


const DoctorsList = () => {

    // const { data: doctorsData, error, isLoading, isSuccess } = useGetDoctorsQuery()
    // console.log('data', doctorsData)


    const [showDialogConfig, setShowDialogConfig] = useState(false)
    const [showAddDoctorDialogConfig, setShowAddDoctorDialogConfig] = useState(false)

    const [doctorToEdit, setDoctorToEdit] = useState(null)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    const { data: doctorsData, isError, isLoading, isSuccess } = useGetDoctorPerPageQuery(page + 1);
    const [updateDoctor, { data: updatedDoctorData, isLoading: isUpdateDoctorLoading, isSuccess: isUpdateDoctorSuccess }] = useUpdateDoctorMutation()

    const contentRef = useRef();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleEditDoctor = (id) => {
        // updateDoctor( updateDocFields)
        setShowDialogConfig(true)
        setDoctorToEdit(id)
    }
    

    const handleAddDoctor = () => {
        setShowAddDoctorDialogConfig(true)
    }


    const generatePdf = () => {
        const input = contentRef.current;
    
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
    
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
    
            // Calculate the aspect ratio to fit the content within the PDF page
            const aspectRatio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    
            const contentWidth = imgWidth * aspectRatio;
            const contentHeight = imgHeight * aspectRatio;
    
            // Set a small margin from the top of the page
            const topMargin = 10; // Adjust this value for your desired top margin
    
            // Add the image starting from the top margin
            pdf.addImage(imgData, 'PNG', topMargin, topMargin, contentWidth-2*topMargin, contentHeight);
            pdf.save('document.pdf');
        });
    };
    
    



    return (
        <>
            <div ref={contentRef}>

                <div>DoctorsList</div>

                <div className="flex flex-col gap-x-5 mt-8">
                    <div className="flex justify-end">
                        <button type='button' className='font-manrope p-3 rounded-border text-white bg-button-default hover:bg-button-hover ' onClick={handleAddDoctor}>Add Doctor</button>

                    </div>


                    <div className="flex w-1/2">
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: '#3475B1' }}>
                                        <TableCell>SN</TableCell>
                                        <TableCell>Doctor Name</TableCell>
                                        <TableCell>Qualification</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {doctorsData && doctorsData.data?.map((doctor, index) => (
                                        <TableRow key={doctor.id} sx={{ height: '5px' }}>
                                            <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray', width: '10px' }}>{doctor.id}</TableCell>
                                            {/* <TableCell>{doctor.doctorId}</TableCell> */}
                                            <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>{doctor.first_name}</TableCell>
                                            <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>{doctor.last_name}</TableCell>
                                            <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>
                                                <Button variant="contained" color="primary" size="small" onClick={(e) => handleEditDoctor(doctor.id)}>
                                                    <EditIcon />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <TablePagination
                                rowsPerPageOptions={[6]}
                                component="div"
                                count={doctorsData?.total || 0}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />

                        </TableContainer>
                    </div>


                </div>
                <button onClick={generatePdf}>Download PDF</button>


            </div>


            {
                showDialogConfig && (
                    <UpdateDoctor detail={doctorToEdit} setShowDialogConfig={setShowDialogConfig} />
                )
            }

            {
                showAddDoctorDialogConfig && (
                    <AddDoctor setShowAddDoctorDialogConfig={setShowAddDoctorDialogConfig} />
                )
            }
        </>

    )
}

export default DoctorsList