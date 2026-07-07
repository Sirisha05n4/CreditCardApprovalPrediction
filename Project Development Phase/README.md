# 5. Project Development Phase

## Code Location
The actual project code for this phase is maintained in the **repository root** (not duplicated here), so it can be run directly without navigating into subfolders.

You can find it at:
- `app.py` — Flask backend (routes, prediction logic)
- `requirements.txt` — Python dependencies
- `models/` — trained model files (`credit_card_model.pkl`, `label_encoder.pkl`)
- `dataset/` — training data (`application_record.csv`, `credit_record.csv`)
- `static/` — CSS and JavaScript files
- `templates/` — HTML templates
- `notebooks/` — model training/experimentation notebook

## Development Summary
This phase covered:
- Data preprocessing and feature engineering on the Credit Card Approval Prediction dataset
- Training and evaluating a Random Forest Classifier
- Serializing the trained model and label encoder using pickle
- Building the Flask backend to serve real-time predictions
- Building a responsive, glassmorphism-styled frontend for user input and result display

## How to Run
See the **Installation** section in the main [README.md](../README.md) at the repository root for setup and run instructions.
