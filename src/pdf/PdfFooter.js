import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#01498c',
        color: '#ffffff',
        padding: 10,
        marginTop: 20,
        // borderTopWidth: 1,
        borderTopColor: '#000',
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    contactText: {
        fontSize: 12,
    },
    signatureContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        fontSize: 11,
        marginHorizontal: 20
    },
    individualSignature: {
        textAlign: 'center'
    },
    signatureImage: {
        height: 25,
    }
});

const PdfFooter = () => {
    return (
        <View >
            <View style={styles.signatureContainer} >
                <View style={styles.individualSignature}>
                    <Image src="/images/signaturemahesh.png" style={styles.signatureImage} ></Image>
                    <Text>...................................</Text>
                    <Text>Performed BY </Text>
                    <Text>Mahesh Gapaju </Text>
                    <Text>Lab Technician </Text>
                    <Text>NHPC No: B-3359 MLT </Text>
                </View>
                <View>
                    <Image src="/images/signaturesaroj.png" style={styles.signatureImage}></Image>
                    <Text>...................................</Text>
                    <Text>Validated by </Text>
                    <Text>Saroj Kumar Shrestha </Text>
                    <Text>Lab Technologist </Text>
                    <Text>NHPC No: A-1066 MLT</Text>
                </View>
            </View>
            <View render={({ pageNumber, totalPages }) => (
                pageNumber === totalPages && (
                    <Text style={{ marginVertical: '20', textAlign: 'center' }}>
                        End of report
                    </Text>
                )

            )} />
            <View style={styles.footer}>

                <View style={styles.contactRow}>
                    <Text style={styles.contactText}>Phone: +977 979345934</Text>
                </View>
                <View style={styles.contactRow}>
                    <Text style={styles.contactText}>Email: swiftcarediagnostic@gmail.com</Text>
                </View>
                <View style={styles.contactRow}>
                    <Text style={styles.contactText}>Location: Kusunti Height 14, Lalitpur</Text>
                </View>
                <View style={styles.contactRow}>
                    <Text style={styles.contactText}>Facebook: Facebook</Text>
                </View>

            </View>
        </View >
    );
};

export default PdfFooter;
