export default {
  "title": "HORMONE - SPECIAL TEST REPORT",
  "category": "THYROID FUNCTION TEST (TFT)",

  "data": [
    {
      "subCategory": "",
      "tests": [
        {
          "test": "FT3",
          "result": "2.89",
          "unit": "pg/ml",
          "referenceRange": "2.27 - 4.55",
          "Method": "CLIA"
        },
        {
          "test": "FT4",
          "result": "1.17",
          "unit": "ng/dl",
          "referenceRange": "0.77 - 1.70",
          "Method": "CLIA"
        },
        {
          "test": "TSH",
          "result": "2.32",
          "unit": "µIU/ml",
          "referenceRange": "0.35 - 4.75",
          "Method": "CLIA"
        }
      ]
    }
  ],
  "note": {
    "summary": "The Biological reference interval provided is for Adults.",
    "interpretation": [
      {
        "TSH": "Normal",
        "Free_T4": "Normal",
        "Free_T3": "Normal",
        "Condition": ["None"]
      },
      {
        "TSH": "Low",
        "Free_T4": "High",
        "Free_T3": "High",
        "Condition": ["Hyperthyroidism"]
      },
      {
        "TSH": "Low",
        "Free_T4": "Normal",
        "Free_T3": "Normal",
        "Condition": ["Subclinical Hyperthyroidism"]
      },
      {
        "TSH": "Low",
        "Free_T4": "Normal",
        "Free_T3": "High",
        "Condition":["T3 Toxicosis"]
      },
      {
        "TSH": "Low",
        "Free_T4": "High",
        "Free_T3": "Normal",
        "Condition": ["Thyroiditis", "T4 ingestion", "Hyperthyroidism in the elderly or comorbid illness"]
      },
      {
        "TSH": "Low",
        "Free_T4": "Low",
        "Free_T3": "Low",
      "Condition": ["Euthyroid sick syndrome"," Central hypothyroidism"]
      },
      {
        "TSH": "Normal",
        "Free_T4": "Normal",
        "Free_T3": "Low",
        "Condition": ["Subclinical hypothyroidism", "Recovery from euthyroid sick syndrome"]
      },
      {
        "TSH": "High",
        "Free_T4": "Low",
        "Free_T3": "Low",
        "Condition": ["Primary Hypothyroidism"]
      },
      {
        "TSH": "High",
        "Free_T4": "High",
        "Free_T3": "High",
        "Condition": ["TSH producing pituitary adenoma"," Thyroid hormone resistance syndrome"]
      }
    ],
    "footnotes": [
      "Please note test values may vary depending on the assay method used.",
      "TSH Levels are subjected to circadian variation, rising several hours before the onset of sleep, reaching peak levels between 11 pm and 6 am. Nadir concentrations are observed during the afternoon. Diurnal variation in TSH levels is approx 50% +/-; hence time of the day can influence the measured serum concentration.",
      "For monitoring of therapy it is advisable to test parameters by the same assay method. The values with different methods cannot be used interchangeably due to differences in test procedures and reagent specificity."
    ]
  }
}
