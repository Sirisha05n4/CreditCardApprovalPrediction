# 2. Requirement Analysis

## Functional Requirements
| FR No. | Requirement | Description |
|---|---|---|
| FR-1 | User Input Form | User can enter applicant details (income, age, employment, credit history, existing debt, etc.) |
| FR-2 | Data Validation | System validates that all required fields are filled and in the correct format before prediction |
| FR-3 | Prediction Engine | System runs the trained Random Forest model on the input and returns Approved/Rejected |
| FR-4 | Confidence Score | System displays the model's confidence score along with the prediction |
| FR-5 | Result Display | System shows a clear, styled result page with the outcome |

## Non-Functional Requirements
| NFR No. | Requirement | Description |
|---|---|---|
| NFR-1 | Performance | Prediction should be returned within 1-2 seconds of form submission |
| NFR-2 | Usability | UI should be simple, responsive, and usable on desktop and mobile |
| NFR-3 | Reliability | Model should give consistent predictions for the same input |
| NFR-4 | Security | No sensitive applicant data is stored permanently without consent |
| NFR-5 | Availability | Application should run reliably on local server; deployable to cloud for public access |

## Data Requirements
- **application_record.csv** — applicant personal/demographic information (income, age, employment type, family status, etc.)
- **credit_record.csv** — credit history/status information
- Both joined on the common `ID` column (Kaggle "Credit Card Approval Prediction" dataset by rikdifos)

## Technology Requirements
- Python 3.8+, Flask, Scikit-Learn, Pandas, NumPy
- HTML, CSS, JavaScript for the frontend
- Random Forest Classifier as the prediction model
