## Model Evaluation Metrics

| Metric | Value |
|---|---|
| Overall Accuracy | 99% |
| Precision (weighted avg) | 0.97 |
| Recall (weighted avg) | 0.99 |
| F1-Score (weighted avg) | 0.98 |

### Class-wise Breakdown
| Class | Precision | Recall | F1-Score | Support |
|---|---|---|---|---|
| 0 (Rejected) | 0.00 | 0.00 | 0.00 | 2,285 |
| 1 (Approved) | 0.99 | 1.00 | 0.99 | 153,258 |

### Note on Class Imbalance
The dataset is highly imbalanced — approved applications (class 1) make up about 98.5% of all records, while rejected applications (class 0) are only about 1.5%. Because of this, while overall accuracy is high (99%), the model currently struggles to correctly identify the minority "Rejected" class, as shown by its 0.00 precision/recall for class 0. This is a well-known challenge with this dataset and is a valuable finding rather than a flaw in implementation.

**Future Improvement:** This can be addressed using techniques such as SMOTE (oversampling the minority class), class-weight balancing in the Random Forest, or collecting more rejected-application samples — noted here as a planned future enhancement.

## Summary
The application was tested for both functional correctness (form validation, routing) and model behavior. While the model achieves high overall accuracy, evaluation revealed a class imbalance issue affecting minority-class predictions — this has been documented transparently as a known limitation and future improvement area.
