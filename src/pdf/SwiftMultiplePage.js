import React, { useState } from 'react'
import BioChemistry from '../jsonData/BioChemistry'
import Hematology from '../jsonData/Hematology'
import HormoneTest from '../jsonData/HormoneTest'
import ImmunologyTest from '../jsonData/ImmunologyTest'
import UrineTest from '../jsonData/UrineTest'
import PdfFooter from './PdfFooter'
import PdfHeader from './PdfHeader'
import { Document, Font, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import { fontSize } from '@mui/system'

const SwiftMultiplePage = () => {
    const [showHeaderFooter, setShowHeaderFooter] = useState(true);

    Font.register({
        family: 'Manrope',
        src: '/fonts/Manrope-Regular.ttf', // Path to your .ttf file in the public folder
        fontWeight: 'normal',
    });
    Font.register({
        family: 'Manrope',
        src: '/fonts/Manrope-Bold.ttf', // Path to the bold version of your font
        fontWeight: 'bold',
    })

    const styles = StyleSheet.create({
        body: {
            flexDirection: 'column',
            padding: 20,
            paddingTop: '150',
            paddingBottom: '190',
            fontSize: 12,
            // paddingBottom: 40,
            border: 1,
        },
        header:{
            position: 'absolute',
            width: '100%',
            padding:'20',
            // bottom: 0,
            top:5,
            right: 0,
            left: 0,
        },
        borderedView: {
            borderWidth: 1,         // Set border width
            borderColor: '#000000', // Set border color
            padding: 5,             // Optional: padding inside the border
            marginBottom: 5,        // Optional: space between entries
        },
        tableContainer: {
            border: 1,
            fontSize: '9',
            paddingLeft: 1,

        },
        title: {
            textAlign: 'center',
            marginBottom: 5,
            fontFamily: 'Manrope',
            fontWeight: 'bold',
            marginTop: 15,
        },
        category: {
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            paddingVertical: 2,
            fontFamily: 'Manrope',
            fontWeight: 'bold'
        },
        subCategory: {
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            paddingVertical: 2,
            fontFamily: 'Manrope',
            fontWeight: 'bold'
        },

        tableRow: {
            display: 'flex',
            flexDirection: 'row',
            // alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            paddingVertical: 4,
            paddingLeft: 10,
        },

        tableCell: {
            flex: 1,
            // padding: 5,
        },
        tableCellTwo: {
            flex: 2,
            // padding: 5,
        },

        summary: {
            fontFamily: 'Manrope',
            fontWeight: 'bold',
            fontSize: '9',

        },
        summaryText: {
            fontFamily: 'Manrope',
            fontSize: '9',
        },
        footer: {
            position: 'absolute',
            width: '100%',
            bottom: 0,
            // top:5,
            right: 0,
            left: 0,


        }




    })
    const data = ImmunologyTest
    const urineData = UrineTest
    return (
        <div>
            {/* Checkbox to toggle header */}
            <div style={{ marginBottom: '10px' }}>
                <label>
                    <input
                        type="checkbox"
                        checked={showHeaderFooter}
                        onChange={(e) => setShowHeaderFooter(e.target.checked)}
                    />
                    Include Header & Footer
                </label>
            </div>
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <Document>
                    <Page size="A4" style={styles.body} debug={true}>
                        {
                            showHeaderFooter && (
                                <View fixed  style={styles.header}>
                                    <PdfHeader />
                                </View>
                            )
                        }
                        {
                            showHeaderFooter && (
                                <View style={styles.footer} fixed >
                                    <PdfFooter />
                                </View>
                            )}

                        {/* immunology-special test report */}


                        {/* urine test general report */}
                        <View >
                            <Text style={styles.title}>{urineData.title}</Text>
                            <View style={styles.tableContainer}>


                                <Text style={styles.category}>{urineData.category}</Text>

                                <View>
                                    {urineData.data.map((item, index) => (
                                        <View>
                                            <Text style={styles.subCategory}>
                                                {item.subCategory}

                                            </Text>
                                            <View>
                                                {item.tests.map((test, id) => (
                                                    <View key={id} style={styles.tableRow}>
                                                        <Text style={styles.tableCell}>{test.test}</Text>
                                                        <Text style={styles.tableCell}>{test.result}</Text>
                                                        <Text style={styles.tableCell}>{test.unit}</Text>
                                                        <Text style={styles.tableCell}>{test.referenceRange}</Text>
                                                        <Text style={styles.tableCell}>{test.Method}</Text>

                                                    </View>
                                                ))}
                                            </View>
                                        </View>

                                    ))}
                                </View>
                            </View>


                        </View>
                        {/* hematology-general test report */}

                        <View wrap={false}>
                            <Text style={styles.title}>{Hematology.title}</Text>
                            <View style={styles.tableContainer}>


                                <Text style={styles.category}>{Hematology.category}</Text>

                                <View>
                                    {Hematology.data.map((item, index) => (
                                        <View>
                                            <Text style={styles.subCategory}>
                                                {item.subCategory}

                                            </Text>
                                            <View>
                                                {item.tests.map((test, id) => (
                                                    <View key={id} style={styles.tableRow}>
                                                        <Text style={styles.tableCell}>{test.test}</Text>
                                                        <Text style={styles.tableCell}>{test.result}</Text>
                                                        <Text style={styles.tableCell}>{test.unit}</Text>
                                                        <Text style={styles.tableCell}>{test.referenceRange}</Text>
                                                        <Text style={styles.tableCell}>{test.Method}</Text>

                                                    </View>
                                                ))}
                                            </View>
                                        </View>

                                    ))}
                                </View>
                            </View>


                        </View>

                        {/* Bio chemistry-general test report */}

                        <View wrap={false}>
                            <Text style={styles.title}>{BioChemistry.title}</Text>
                            <View style={styles.tableContainer}>

                                {
                                    BioChemistry.category && (
                                        <Text style={styles.category}>{BioChemistry.category}</Text>

                                    )
                                }

                                <View>
                                    {BioChemistry.data.map((item, index) => (
                                        <View>
                                            {
                                                item.subCategory && (
                                                    <Text style={styles.subCategory}>
                                                        {item.subCategory}

                                                    </Text>
                                                )
                                            }

                                            <View>
                                                {item.tests.map((test, id) => (
                                                    <View key={id} style={styles.tableRow}>
                                                        <Text style={styles.tableCell}>{test.test}</Text>
                                                        <Text style={styles.tableCell}>{test.result}</Text>
                                                        <Text style={styles.tableCell}>{test.unit}</Text>
                                                        <Text style={styles.tableCell}>{test.referenceRange}</Text>
                                                        <Text style={styles.tableCell}>{test.Method}</Text>

                                                    </View>
                                                ))}
                                            </View>
                                        </View>

                                    ))}
                                </View>
                            </View>


                        </View>


                        {/* Hormone-general test report */}

                        <View wrap={false}>
                            <Text style={styles.title}>{HormoneTest.title}</Text>
                            <View style={styles.tableContainer}>
                                {
                                    HormoneTest.category && (
                                        <Text style={styles.category}>{HormoneTest.category}</Text>

                                    )
                                }


                                <View>
                                    {HormoneTest.data.map((item, index) => (
                                        <View>
                                            {
                                                item.subCategory && (
                                                    <Text style={styles.subCategory}>
                                                        {item.subCategory}

                                                    </Text>
                                                )
                                            }

                                            <View>
                                                {item.tests.map((test, id) => (
                                                    <View key={id} style={styles.tableRow}>
                                                        <Text style={styles.tableCell}>{test.test}</Text>
                                                        <Text style={styles.tableCell}>{test.result}</Text>
                                                        <Text style={styles.tableCell}>{test.unit}</Text>
                                                        <Text style={styles.tableCell}>{test.referenceRange}</Text>
                                                        <Text style={styles.tableCell}>{test.Method}</Text>

                                                    </View>
                                                ))}
                                            </View>
                                        </View>

                                    ))}
                                </View>
                            </View>
                            {/* note for hormone test */}
                            <View >
                                {
                                    HormoneTest.note && (
                                        <View>
                                            <View>
                                                <Text style={styles.summary}>Summary:</Text>
                                                <Text style={styles.summaryText}>{HormoneTest.note.summary}</Text>
                                            </View>

                                            <View>
                                                <Text style={styles.summary}>Interpretation:</Text>
                                                <View style={styles.tableContainer}>
                                                    {
                                                        HormoneTest.note.interpretation.map((test, index) => (
                                                            <View key={index} style={styles.tableRow}>
                                                                <Text style={styles.tableCell}>{test.TSH}</Text>
                                                                <Text style={styles.tableCell}>{test.Free_T4}</Text>
                                                                <Text style={styles.tableCell}>{test.Free_T3}</Text>
                                                                <View style={styles.tableCellTwo}>{test.Condition.map((item, index) => (
                                                                    <Text>
                                                                        {item}
                                                                    </Text>
                                                                ))}
                                                                </View>

                                                            </View>
                                                        ))
                                                    }
                                                </View>

                                            </View>

                                            <View style={{ marginTop: '10' }}>
                                                {
                                                    HormoneTest.note.footnotes.map((item, index) => (
                                                        <Text style={{ fontSize: '9', padding: '2', paddingLeft: '15' }}>
                                                            {item}
                                                        </Text>
                                                    ))
                                                }
                                            </View>
                                        </View>
                                    )
                                }
                            </View>


                        </View>

                    </Page>
                </Document>
            </PDFViewer>


        </div>
    )
}

export default SwiftMultiplePage