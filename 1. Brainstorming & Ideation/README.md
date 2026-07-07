# 1. Brainstorming & Ideation

## Problem Statement
Manually evaluating credit card applications is time-consuming and error-prone for banks. Applicants also lack clarity on why they are approved or rejected, and inconsistent manual judgment can lead to biased or incorrect decisions. There is a need for a fast, consistent, data-driven way to predict credit card approval eligibility.

## Empathy Map
- **Says:** "I don't know why my application got rejected." / "The approval process takes too long."
- **Thinks:** "Is there a fair and quick way to know my eligibility before applying?"
- **Does:** Applies for a credit card through a bank, waits for manual review, often with no clear feedback.
- **Feels:** Frustrated, uncertain, and anxious about the outcome and the wait time.

## Brainstorming — Ideas Considered
1. Rule-based eligibility checker (fixed thresholds on income/age) — rejected: too rigid, doesn't learn from data.
2. Manual scoring sheet — rejected: still manual, slow, inconsistent.
3. **Machine Learning based prediction model (chosen)** — learns patterns from historical applicant data (income, credit history, employment, existing debt) to predict approval with a confidence score.

## Proposed Solution
Build a web application where a user enters their personal and financial details. A trained Random Forest machine learning model (trained on the Kaggle "Credit Card Approval Prediction" dataset) predicts whether the application would be Approved or Rejected, along with a confidence score, through a simple and responsive Flask-based interface.

## Uniqueness / Value Proposition
- Instant, consistent predictions instead of manual review delays.
- Confidence score gives transparency into how certain the model is.
- Modern, easy-to-use banking-style interface accessible from any browser.
