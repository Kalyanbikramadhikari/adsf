import React, { useState } from 'react';
import { Document, Page, Text, View, Image, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import PdfFooter from './PdfFooter';

const data = [
    { col1: 'Row 1 Col 1', col2: 'Row 1 Col 2', col3: 'Row 1 Col 3', col4: 'Row 1 Col 4' },
    { col1: 'Row 2 Col 1', col2: 'Row 2 Col 2', col3: 'Row 2 Col 3', col4: 'Row 2 Col 4' },
];

const PatientData = {
    "patient": {
        "Name": "Ms. AAKRITI MAHARJAN",
        "PatientNumber": "8104010",
        "Address": "KIRTIPUR",
        "Age": {
            "value": 30,
            "unit": "Y",
            "gender": "F"
        },
        "PhoneNumber": null,
        "ReferredBy": null,
        "LabNumber": null
    },
    "dates": {
        "Collected": {
            "date": "2024-08-16",
            "nepaliDate": "2081-04-32"
        },
        "Reporting": {
            "date": "2024-08-16",
            "nepaliDate": "2081-04-32"
        }
    }
}


const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        padding: 20,
        paddingTop: '30',
        paddingBottom: '100',
        fontSize: 12,
        // paddingBottom: 40,
        border: 1,
    },
   
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        // borderWidth: 1,
        borderColor: '#bfbfbf',
      },
      tableRow: {
        flexDirection: 'row',
      },
      tableCol: {
        width: '25%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
      },
      tableCell: {
        margin: 5,
        fontSize: 10,
      },
    tableCellHeader: {
        width: '20%',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        // fontFamily:'' ,
        fontWeight: 'bold',

        // textAlign: 'center',
    },
    // tableCell: {
    //     width: '20%',
    //     padding: 5,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#000',

    //     fontWeight: 'normal'
    // },
    testsummary: {
        marginTop: 20,
        borderWidth: 1,
        padding: '5',
        paddingTop: '9',
        breakInside: 'avoid',

    },
    note: {
        position: 'absolute',
        top: -7,
        backgroundColor: '#ffffff',
        paddingHorizontal: 3,
        fontWeight: '800'

    },
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        // top:5,
        right: 0,
        left: 0,


    }
});

const TestOne = () => {
    // const [patientName, setPatientName] = useState('Ms. AAKRITI MAHARJAN');
    const [testResults, setTestResults] = useState([
        { test: 'Vitamin B12', result: '167.29', unit: 'pg/ml', range: '180.00 - 914.00', method: 'CLIA' },
        // { test: 'Vitamin D (25 HYDROXY)', result: '17.90', unit: 'ng/ml', range: 'Deficiency  20', method: 'CLIA' },
    ]);

    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page size="A4" style={styles.body}>
                    <View style={styles.header} fixed>
                        <Image style={styles.logo} src="/images/logo.png" />
                        {/* <View>
                            <Text>Swift Care Diagnostic</Text>
                            <Text>Immunology - Special Test Report</Text>
                        </View> */}
                    </View>
                    <View style={styles.patientData}>
                        <View style={styles.patientRow}>
                            <Text style={styles.patientItem}>Name</Text>
                            <Text style={styles.patientItem}>: Ms. Sakar Aryal</Text>
                        </View>
                        <View style={styles.patientRow}>
                            <Text style={styles.patientItem}>Patient No.</Text>
                            <Text style={styles.patientItem}>: 8104010</Text>
                        </View>
                        <View style={styles.patientRow}>
                            <Text style={styles.patientItem}>Address</Text>
                            <Text style={styles.patientItem}>: KIRTIPUR</Text>
                        </View>
                        <View style={styles.patientRow}>
                            <Text style={styles.patientItem}>Age/Gender</Text>
                            <Text style={styles.patientItem}>: 30 Y / F</Text>
                        </View>

                        <View style={styles.patientRow}>
                            <Text style={styles.patientItem}>Name</Text>
                            <Text style={styles.patientItem}>:Ms. Sakar Aryal</Text>
                        </View>
                        <View style={styles.patientRow}>
                            <Text style={styles.patientItem}>Name</Text>
                            <Text style={styles.patientItem}>:Ms. Sakar Aryal</Text>
                        </View>

                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCellHeader}>Test</Text>
                            <Text style={styles.tableCellHeader}>Result</Text>
                            <Text style={styles.tableCellHeader}>Unit</Text>
                            <Text style={styles.tableCellHeader}>Reference Range</Text>
                            <Text style={styles.tableCellHeader}>Method</Text>
                        </View>
                        {testResults.map((item, index) => (
                            <View key={index} style={styles.tableRow}>
                                <Text style={styles.tableCell}>{item.test}</Text>
                                <Text style={styles.tableCell}>{item.result}</Text>
                                <Text style={styles.tableCell}>{item.unit}</Text>
                                <Text style={styles.tableCell}>{item.range}</Text>
                                <Text style={styles.tableCell}>{item.method}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.testsummary} >
                        <Text style={styles.note}>NOTE:</Text>
                        <Text>Summary:</Text>
                        <Text wrap={false}>Vitamin B 12 along with folate is essential for DNA synthesis and myelin formation.
                            Vitamin B 12 deficiency can be because of nutritional deficiency, malabsorption and other gastrointestinal causes. The test is ordered primarily to help
                            diagnose the cause of mycrocytic/ megaloblastic anemia.</Text>
                        <Text>Decreased levels are seen in anaemia, normal near term pregnancy, vegetarianism, partial gastrectomy/ ileal damange, celiac disease, with oral contraceptive
                            use, parasitic competion, pancreatic deficiency, treated epilepsy, smoking, hemodialysis and afvancing age.
                        </Text>
                        <Text>
                            Increased levels are seen in renal failure, hepatocelluar disorders, myeloproliferative disorders and at times with excess supplementation of vitamins pills.
                            *Please note test values may vary depending on the assay method used.

                        </Text>
                    </View>
                    <View style={styles.testsummary} wrap={false}>
                        <Text style={styles.note}>NOTE</Text>
                        <View >
                            <View >

                                <Text >Reference Range:</Text>

                            </View>
                            <View style={{ fontSize: 10, flexDirection: 'row' }}>
                                <Text >Deficiency:</Text>

                                <Text >{'< 20'}</Text>

                            </View>
                            <View style={{ fontSize: 10, flexDirection: 'row' }}>
                                <Text >Insufficiency:</Text>

                                <Text >20 - {'<'}29</Text>

                            </View>
                            <View style={{ fontSize: 10, flexDirection: 'row' }}>
                                <Text >Sufficient:</Text>

                                <Text >30-100</Text>

                            </View>
                            <View style={{ fontSize: 10, flexDirection: 'row' }}>
                                <Text >Toxicity:</Text>

                                <Text >{'>'}100</Text>

                            </View>
                        </View>

                        <Text style={styles.summary}>
                            Summary:{'\n'}
                            Vitamin D is a group of fat-soluble steroid hormone precursor responsible for increasing intestinal absorption of calcium, magnesium, and phosphate, and multiple other biological effects, which is mainly produced in the skin by exposure to sunlight. Vitamin D from the skin synthesis is biologically inactive; hydroxylation in the liver and kidney is required for activation. In humans, the most important compounds in this group are vitamin D3 and vitamin D2, both of them can be ingested from the diet and from supplements. Only a few foods contain vitamin D. The major natural source of the vitamin is synthesis of vitamin D3 in the skin from cholesterol through a chemical reaction that is dependent on sun exposure. Vitamin D is transported to the liver in combination with a binding protein in the bloodstream, converted to 25-hydroxyvitamin D in the liver, and then converted to 1,25-hydroxyvitamin D in the kidney. This is an active ingredient in which vitamin D functions. The 1,25 hydroxy vitamin D content in the circulation is extremely low, with a half-life of only 4 h. This primary circulating form of vitamin D (25-OH) is biologically inactive with levels approximately 1000-fold greater than the circulating1,25-dihydroxy vitamin D. The half-life of circulating vitamin D (25-OH) is 3 weeks. Vitamin D can regulate the balance of calcium and phosphorus metabolism and bone formation, and is closely related
                            Vitamin D is a group of fat-soluble steroid hormone precursor responsible for increasing intestinal absorption of calcium, magnesium, and phosphate, and multiple other biological effects, which is mainly produced in the skin by exposure to sunlight. Vitamin D from the skin synthesis is biologically inactive; hydroxylation in the liver and kidney is required for activation. In humans, the most important compounds in this group are vitamin D3 and vitamin D2, both of them can be ingested from the diet and from supplements. Only a few foods contain vitamin D. The major natural source of the vitamin is synthesis of vitamin D3 in the skin from cholesterol through a chemical reaction that is dependent on sun exposure. Vitamin D is transported to the liver in combination with a binding protein in the bloodstream, converted to 25-hydroxyvitamin D in the liver, and then converted to 1,25-hydroxyvitamin D in the kidney. This is an active ingredient in which vitamin D functions. The 1,25 hydroxy vitamin D content in the circulation is extremely low, with a half-life of only 4 h. This primary circulating form of vitamin D (25-OH) is biologically inactive with levels approximately 1000-fold greater than the circulating1,25-dihydroxy vitamin D. The half-life of circulating vitamin D (25-OH) is 3 weeks. Vitamin D can regulate the balance of calcium and phosphorus metabolism and bone formation, and is closely related to cardiovascular disease, autoimmune diseases, diabetes and hypertension etc.
                        </Text>
                    </View>
                    <Text style={styles.text} >
                        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                        mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
                        antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
                        carnero, salpicón las más noches, duelos y quebrantos los sábados,
                        lentejas los viernes, algún palomino de añadidura los domingos,
                        consumían las tres partes de su hacienda. El resto della concluían sayo
                        de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                        mismo, los días de entre semana se honraba con su vellori de lo más
                        fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
                        que no llegaba a los veinte, y un mozo de campo y plaza, que así
                        ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
                        hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
                        enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                        tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
                        diferencia en los autores que deste caso escriben), aunque por
                        conjeturas verosímiles se deja entender que se llama Quijana; pero esto
                        importa poco a nuestro cuento; basta que en la narración dél no se salga
                        un punto de la verdad
                    </Text>

                    <View render={({ pageNumber, totalPages }) => (
                        pageNumber === totalPages && (
                            <Text style={{ marginVertical: '20', textAlign: 'center' }}>
                                End of report
                            </Text>
                        )

                    )} />

                    <View style={styles.table}>
                        {/* Table Header */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Header 1</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Header 2</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Header 3</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Header 4</Text></View>
                        </View>

                        {/* Render Rows from Data */}
                        {data.map((row, index) => (
                            <View style={styles.tableRow} key={index}>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{row.col1}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{row.col2}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{row.col3}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{row.col4}</Text></View>
                            </View>
                        ))}
                    </View>

                    {/* </View> */}

                    <View style={styles.signatureSection} >
                        <View>
                            <Text>Performed By</Text>
                            <Text>Mahesh Gapaju</Text>
                            <Text>Lab Technician</Text>
                            <Text>NHPC No. : B-3359 MLT</Text>
                        </View>
                        <View>
                            <Text>Validated by</Text>
                            <Text>Saroj Kumar Shrestha</Text>
                            <Text>Lab Technologist</Text>
                            <Text>NHPC No. : A-1066 MLT</Text>
                        </View>
                    </View>
                    <View style={styles.footer} fixed >
                        <PdfFooter />
                    </View>

                </Page>
            </Document>
        </PDFViewer>
    );
};

export default TestOne;
