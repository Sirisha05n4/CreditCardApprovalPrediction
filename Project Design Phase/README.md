# 3. Project Design Phase

## Data Flow Diagram (DFD) — Level 0
```
[User] --(applicant details via form)--> [Flask Web App] --(prediction)--> [User]
```

## Data Flow Diagram — Level 1
```
[User] -> [Frontend Form (HTML/CSS/JS)]
        -> [Flask Backend (/predict route)]
        -> [Preprocessing (encode categorical fields using label_encoder.pkl)]
        -> [Trained Random Forest Model (credit_card_model.pkl)]
        -> [Prediction + Confidence Score]
        -> [Result Page rendered back to User]
```

## Solution / Technical Architecture
The application follows a three-tier architecture:
1. **Presentation Layer** — HTML/CSS/JavaScript frontend, glassmorphism banking-style UI, form-based input and result display.
2. **Application Layer** — Flask backend that receives form data, validates it, preprocesses it (encoding via `label_encoder.pkl`), and calls the trained model for inference.
3. **Model Layer** — Random Forest Classifier (`credit_card_model.pkl`) trained on the Kaggle Credit Card Approval Prediction dataset, returning a prediction and confidence score.

## User Interface Design (Wireframe Description)
- **Home/Input Page:** Form fields for applicant details (income, age, employment type, credit history, existing debt, etc.) with a "Predict" button.
- **Result Page:** Displays "Approved" or "Rejected" prominently, along with the model's confidence score, in a clean banking-style card layout.

## Database Design
Not applicable — this project uses static CSV files (`application_record.csv`, `credit_record.csv`) for training rather than a live database, so no ER diagram is required.
