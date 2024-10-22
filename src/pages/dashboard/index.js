import React, { lazy, Suspense, useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import UpdatePatientDetail from '../../dialogBoxes/UpdatePatientDetail'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TablePagination } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PdfFooter from '../../pdf/PdfFooter';
import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import TestOne from '../../pdf/TestOne';
import ReactpdfMultiplePage from '../../pdf/ReactpdfMultiplePage';

const AddPatients = lazy(() => import('../../dialogBoxes/AddPatients'))



const patientsData = [
  { patientId: 1, patientName: "John Doe", age: 25, sex: "Male", referredBy: "Dr. Smith" },
  { patientId: 2, patientName: "Jane Smith", age: 34, sex: "Female", referredBy: "Dr. Brown" },
  { patientId: 3, patientName: "Alex Johnson", age: 40, sex: "Male", referredBy: "Dr. Davis" },
  { patientId: 4, patientName: "Emily White", age: 29, sex: "Female", referredBy: "Dr. Green" },
  { patientId: 5, patientName: "Michael Brown", age: 53, sex: "Male", referredBy: "Dr. Taylor" },
  { patientId: 6, patientName: "Sarah Black", age: 47, sex: "Female", referredBy: "Dr. Wilson" },
  { patientId: 7, patientName: "Chris Blue", age: 30, sex: "Male", referredBy: "Dr. White" },
  { patientId: 8, patientName: "Angela Red", age: 45, sex: "Female", referredBy: "Dr. Martin" },
  { patientId: 9, patientName: "David Green", age: 60, sex: "Male", referredBy: "Dr. Parker" },
  { patientId: 10, patientName: "Linda Orange", age: 55, sex: "Female", referredBy: "Dr. Scott" },
  { patientId: 11, patientName: "John Doe", age: 25, sex: "Male", referredBy: "Dr. Smith" },
  { patientId: 12, patientName: "Jane Smith", age: 34, sex: "Female", referredBy: "Dr. Brown" },
  { patientId: 13, patientName: "Alex Johnson", age: 40, sex: "Male", referredBy: "Dr. Davis" },
  { patientId: 14, patientName: "Emily White", age: 29, sex: "Female", referredBy: "Dr. Green" },
  { patientId: 15, patientName: "Michael Brown", age: 53, sex: "Male", referredBy: "Dr. Taylor" },
  { patientId: 16, patientName: "Sarah Black", age: 47, sex: "Female", referredBy: "Dr. Wilson" },
  { patientId: 17, patientName: "Chris Blue", age: 30, sex: "Male", referredBy: "Dr. White" },
  { patientId: 18, patientName: "Angela Red", age: 45, sex: "Female", referredBy: "Dr. Martin" },
  { patientId: 19, patientName: "David Green", age: 60, sex: "Male", referredBy: "Dr. Parker" },
  { patientId: 20, patientName: "Linda Orange", age: 55, sex: "Female", referredBy: "Dr. Scott" },
];

const Index = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [showUpdatePatientDialog, setShowUpdatePatientDialog] = useState(false)
  const [page, setPage] = useState(0); // Page number for pagination
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };


  const handleAddPatientClick = () => {

    setShowDialog(true)

  }
  const handleUpdatePatientClick = () => {

    setShowUpdatePatientDialog(true)

  }
  const handleRefreshClick = () => {

  }


  return (
    <div className='flex font-manrope'>
      <Sidebar />

      <div className=" border-2 border-black w-full">
        <Navbar />
        <div className="flex">
          <div className="flex px-[34px] p-6">

            <div className="relative border-[1px] border-border rounded-border p-4">
              <span className='absolute -top-[14px] bg-white px-2'>Search Patients</span>
              <span className=' bg-white '>Search Patients</span>


              <div className="flex gap-4 mt-3">
                <input type="text" className="rounded-border border-border border-[1px] p-2 outline-none" placeholder="Patient's detail" />

                <button type='button' className='font-manrope p-3 px-10 rounded-border text-white  bg-primary hover:bg-button-hover ' onClick={handleAddPatientClick}>Search</button>

              </div>
            </div>
            <div className="relative border-border rounded-border"></div>


          </div>

          <div className="flex px-[34px] p-6">

            <div className="relative border-[1px] border-border rounded-border p-4">
              <span className='absolute -top-[14px] bg-white px-2'>Search by number of days</span>
              <span className=' bg-white '>Select days</span>


              <div className="flex gap-4 mt-3">
                <input type="text" className="rounded-border border-border border-[1px] p-2 outline-none w-14" />

                <button type='button' className='font-manrope p-3 px-10 rounded-border text-white  bg-primary hover:bg-button-hover ' onClick={handleRefreshClick}>Refresh</button>

              </div>
            </div>
            <div className="relative border-border rounded-border"></div>


          </div>


          <div className="flex items-end">
            <button type='button' className='font-manrope p-3 rounded-border text-white bg-button-default hover:bg-button-hover ' onClick={handleAddPatientClick}>Add patients</button>

          </div>
        </div>

        <div className="flex gap-x-5 mt-8">
          <div className="flex w-1/2">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: '#3475B1' }}>
                    <TableCell>SN</TableCell>
                    {/* <TableCell>Patient ID</TableCell> */}
                    <TableCell>Patient Name</TableCell>
                    <TableCell>Age/Sex</TableCell>
                    <TableCell>Referred By</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patientsData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((patient, index) => (
                      <TableRow key={patient.patientId} sx={{ height: '5px' }}>
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray', width: '10px' }}>{page * rowsPerPage + index + 1}</TableCell>
                        {/* <TableCell>{patient.patientId}</TableCell> */}
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>{patient.patientName}</TableCell>
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>{`${patient.age}/${patient.sex}`}</TableCell>
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>{patient.referredBy}</TableCell>
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>
                          <Button variant="contained" color="primary" size="small">
                            <AddIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[25, 50]}
                component="div"
                count={patientsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </div>

          <div className="flex w-1/2">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: '#3475B1' }}>
                    <TableCell>SN</TableCell>
                    {/* <TableCell>Patient ID</TableCell> */}
                    <TableCell>Patient Name</TableCell>
                    <TableCell>Age/Sex</TableCell>
                    <TableCell>Referred By</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patientsData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((patient, index) => (
                      <TableRow key={patient.patientId} sx={{ height: '5px' }}>
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray', width: '10px' }}>{page * rowsPerPage + index + 1}</TableCell>
                        {/* <TableCell>{patient.patientId}</TableCell> */}
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>{patient.patientName}</TableCell>
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>{`${patient.age}/${patient.sex}`}</TableCell>
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>{patient.referredBy}</TableCell>
                        <TableCell sx={{ border: '1px solid gray', padding: '2px', border: '1px solid gray' }}>
                          <Button variant="contained" color="primary" size="small">
                            <AddIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[25, 50]}
                component="div"
                count={patientsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </div>


        </div>




        <button type='button' className='font-manrope p-3 rounded-border text-white border-black border-2 bg-button-default hover:bg-button-hover ' onClick={handleUpdatePatientClick}>Update Patient</button>

        {/* <button type='button' className='font-manrope p-3 rounded-border text-white border-black border-2 bg-button-default hover:bg-button-hover ' >Download pdf</button> */}

        <BlobProvider
          document={<ReactpdfMultiplePage />} >
          {({ blob, url, loading, error }) => {
            if (loading) return <p>Loading document...</p>;
            if (error) return <p>Failed to load document: {error.message}</p>;

            return (
              <div>
                <h2>PDF Document Preview</h2>
                <iframe
                  src={url}
                  title="PDF Preview"
                  width="100%"
                  height="600px"
                  style={{ border: '1px solid #ccc' }}
                />
              </div>
            );
          }}

        </BlobProvider>

      </div>



      {
        showDialog && (
          <Suspense fallback={<div>Loading...</div>} >
            <AddPatients />
          </Suspense>
        )
      }

      {
        showUpdatePatientDialog && (
          <Suspense fallback={<div>Loading...</div>} >
            <UpdatePatientDetail />
          </Suspense>
        )
      }
    </div>

  )
}

export default Index