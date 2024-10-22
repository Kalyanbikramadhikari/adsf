import { Font, Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const PdfHeader = () => {

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
    header: {

      // position: 'fixed',
      // // top: 10,
      // left: 20,
      // right: 20,
      flexDirection: 'row',
      // justifyContent: 'center',
      marginBottom: 30,
      // border: 1,
      // paddingTop: 10,
      // paddingHorizontal: 20,
    },
    logo: {
      // width: 50,
      height: 35,
    },
    patientData: {
      display: 'flex',
      marginBottom: 20,
      fontSize:9,
      borderStyle: 'solid',
      borderColor: '#00000',
      borderWidth: 0.5,
      padding: 5,
      flexWrap: 'wrap',
      flexDirection: 'row', // Ensure children are in a row
      justifyContent: 'space-between',
    },
    patientRow: {
      flexDirection: 'row',
      // gap:'7',
      width: '49%',
      marginBottom: 3,
      // borderWidth: 1,


    },
    patientItemValue: {
      fontFamily: 'Manrope', // Use the registered font
      fontWeight: 'bold',      // Apply bold weight
      width: '50%',
    },

    patientItemKey:{
      width:'20%'
    }
  })
  return (
    <div>
      <View style={styles.header} fixed >
        <Image style={styles.logo} src="/images/logo.png" />
        {/* <View>
                            <Text>Swift Care Diagnostic</Text>
                            <Text>Immunology - Special Test Report</Text>
                        </View> */}
      </View>
      <View style={styles.patientData} >
        <View style={styles.patientRow} >
          <Text style={styles.patientItemKey}>Name</Text>
          <Text style={styles.patientItemValue}>: Ms. Sakar Aryal</Text>
        </View>
        <View style={styles.patientRow}>
          <Text style={styles.patientItemKey}>Patient No.</Text>
          <Text style={styles.patientItemValue}>: 8104010</Text>
        </View>
        <View style={styles.patientRow}>
          <Text style={styles.patientItemKey}>Address</Text>
          <Text style={styles.patientItemValue}>: KIRTIPUR</Text>
        </View>
        <View style={styles.patientRow}>
          <Text style={styles.patientItemKey}>Age/Gender</Text>
          <Text style={styles.patientItemValue}>: 30 Y / F</Text>
        </View>

        <View style={styles.patientRow}>
          <Text style={styles.patientItemKey}>Name</Text>
          <Text style={styles.patientItemValue}>: Ms. Sakar Aryal</Text>
        </View>
        <View style={styles.patientRow}>
          <Text style={styles.patientItemKey}>Name</Text>
          <Text style={styles.patientItemValue}>: Ms. Sakar Aryal</Text>
        </View>

      </View>
    </div>
  )
}

export default PdfHeader