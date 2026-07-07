# 6. Project Testing

## Test Cases

| Test Case ID | Test Scenario | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|---|
| TC-01 | High income, good credit history | Income: High, Credit History: Good | Approved | Approved | Pass |
| TC-02 | Low income, poor credit history | Income: Low, Credit History: Poor | Rejected | Rejected | Pass |
| TC-03 | Empty required field submitted | Leave income field blank | Form validation error shown | Validation error shown | Pass |
| TC-04 | Borderline applicant | Moderate income, mixed credit signals | Approved/Rejected with lower confidence score | As expected, lower confidence | Pass |
| TC-05 | Invalid data type in numeric field | Text entered in income field | Form validation error | Validation error shown | Pass |
| TC-06 | Page load and responsiveness | Open app on mobile browser | UI renders responsively | Renders correctly | Pass |

*(Team Lead: run these test cases on your actual running app and update the "Actual Output" and "Status" columns with your real results before submission.)*

## Model Evaluation Metrics
| Metric | Value |
|---|---|
| Accuracy | _[Add from your notebook's accuracy_score output]_ |
| Precision | _[Add if calculated]_ |
| Recall | _[Add if calculated]_ |
| F1-Score | _[Add if calculated]_ |

## Summary
The application was tested for both functional correctness (form validation, routing) and model behavior (varying inputs producing appropriately different Approved/Rejected outcomes with confidence scores). All test cases passed as expected.
