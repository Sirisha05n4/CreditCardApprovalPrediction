# 💳 Credit Card Approval Prediction using Machine Learning

Predicts whether a customer is eligible for a credit card using a **Random Forest** machine learning model, served through a modern Flask web app.

## 📌 Project Overview
This project predicts whether a customer is eligible for a credit card using a Random Forest Machine Learning model.

Built with:
- Python
- Flask
- HTML / CSS / JavaScript
- Scikit-Learn
- Pandas

## ✨ Features
- Modern banking-style UI
- Glassmorphism design
- AI-based prediction (Random Forest)
- Confidence score with each prediction
- Approved / Rejected result page
- Fully responsive design

## 🗂️ Project Structure
```
CreditCardApprovalPrediction
│
├── app.py
├── requirements.txt
├── models
├── static
├── templates
└── dataset
```

## 🚀 Installation

**Step 1 — Clone or download the project**
```bash
git clone <YOUR_GITHUB_REPO_LINK>
cd CreditCardApprovalPrediction
```

**Step 2 — Create a virtual environment**
```bash
python -m venv venv
```

**Step 3 — Activate the virtual environment (Windows)**
```bash
venv\Scripts\activate
```

**Step 4 — Install required libraries**
```bash
pip install -r requirements.txt
```

**Step 5 — Run Flask**
```bash
python app.py
```

**Step 6 — Open in browser**
```
http://127.0.0.1:5000
```

## 🛠️ Technologies Used
- Python
- Flask
- Random Forest (Scikit-Learn)
- HTML / CSS / JavaScript
- Pandas
- NumPy

## 📊 Dataset
[Credit Card Approval Prediction dataset (rikdifos) on Kaggle](https://www.kaggle.com/datasets/rikdifos/credit-card-approval-prediction) — uses `application_record.csv` (applicant personal info) and `credit_record.csv` (credit history), joined on `ID`.

## 📈 Model Performance
- **Overall Accuracy:** 99%
- **Precision/Recall/F1 (weighted avg):** 0.97 / 0.99 / 0.98
- **Note:** The dataset has a class imbalance (approved ≈98.5%, rejected ≈1.5%), which affects minority-class prediction. See `6. Project Testing/README.md` for full breakdown and planned improvements.

## 🎥 Demo Video
_[Add demo video link here once recorded]_

## 👥 Team
- Team Lead: Sirisha Madhu Varshini Murugu
- Members: Amith Sivakoti, Thiragati Hruday Raj, Sundarapu Lavanya Suryasri Devika, Durgaprasad Kothapalli

## 🔗 Repository
https://github.com/Sirisha05n4/CreditCardApprovalPrediction

## 📄 Documentation
Full project documentation (milestones, architecture, scenarios) is in `Project_Documentation.docx` in this repo.
