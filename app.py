from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)

# Load Model
model = joblib.load("models/credit_card_model.pkl")
le = joblib.load("models/label_encoder.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    # ===========================
    # Get Form Data
    # ===========================

    ID = int(request.form["ID"])
    CODE_GENDER = int(request.form["CODE_GENDER"])
    FLAG_OWN_CAR = int(request.form["FLAG_OWN_CAR"])
    FLAG_OWN_REALTY = int(request.form["FLAG_OWN_REALTY"])
    CNT_CHILDREN = int(request.form["CNT_CHILDREN"])
    AMT_INCOME_TOTAL = float(request.form["AMT_INCOME_TOTAL"])
    NAME_INCOME_TYPE = int(request.form["NAME_INCOME_TYPE"])
    NAME_EDUCATION_TYPE = int(request.form["NAME_EDUCATION_TYPE"])
    NAME_FAMILY_STATUS = int(request.form["NAME_FAMILY_STATUS"])
    NAME_HOUSING_TYPE = int(request.form["NAME_HOUSING_TYPE"])
    DAYS_BIRTH = int(request.form["DAYS_BIRTH"])
    DAYS_EMPLOYED = int(request.form["DAYS_EMPLOYED"])
    FLAG_MOBIL = int(request.form["FLAG_MOBIL"])
    FLAG_WORK_PHONE = int(request.form["FLAG_WORK_PHONE"])
    FLAG_PHONE = int(request.form["FLAG_PHONE"])
    FLAG_EMAIL = int(request.form["FLAG_EMAIL"])
    OCCUPATION_TYPE = int(request.form["OCCUPATION_TYPE"])
    CNT_FAM_MEMBERS = float(request.form["CNT_FAM_MEMBERS"])
    MONTHS_BALANCE = int(request.form["MONTHS_BALANCE"])

    # ===========================
    # Input Data
    # ===========================

    data = [[
        ID,
        CODE_GENDER,
        FLAG_OWN_CAR,
        FLAG_OWN_REALTY,
        CNT_CHILDREN,
        AMT_INCOME_TOTAL,
        NAME_INCOME_TYPE,
        NAME_EDUCATION_TYPE,
        NAME_FAMILY_STATUS,
        NAME_HOUSING_TYPE,
        DAYS_BIRTH,
        DAYS_EMPLOYED,
        FLAG_MOBIL,
        FLAG_WORK_PHONE,
        FLAG_PHONE,
        FLAG_EMAIL,
        OCCUPATION_TYPE,
        CNT_FAM_MEMBERS,
        MONTHS_BALANCE
    ]]

    # ===========================
    # Feature Names
    # ===========================

    columns = [
        "ID",
        "CODE_GENDER",
        "FLAG_OWN_CAR",
        "FLAG_OWN_REALTY",
        "CNT_CHILDREN",
        "AMT_INCOME_TOTAL",
        "NAME_INCOME_TYPE",
        "NAME_EDUCATION_TYPE",
        "NAME_FAMILY_STATUS",
        "NAME_HOUSING_TYPE",
        "DAYS_BIRTH",
        "DAYS_EMPLOYED",
        "FLAG_MOBIL",
        "FLAG_WORK_PHONE",
        "FLAG_PHONE",
        "FLAG_EMAIL",
        "OCCUPATION_TYPE",
        "CNT_FAM_MEMBERS",
        "MONTHS_BALANCE"
    ]

    # Convert to DataFrame
     # Convert to DataFrame
    input_df = pd.DataFrame(data, columns=columns)

    # ===========================
    # Prediction
    # ===========================

    prediction = model.predict(input_df)

    probability = model.predict_proba(input_df)

    print("Prediction :", prediction)
    print("Probability :", probability)

    confidence = round(max(probability[0]) * 100, 2)

    # ===========================
    # Result
    # ===========================

    if prediction[0] == 1:
        result = "Credit Card Approved ✅"
    else:
        result = "Credit Card Rejected ❌"
    # ===========================
    # Send to Result Page
    # ===========================

    return render_template(
        "result.html",
        result=result,
        confidence=confidence
    )


if __name__ == "__main__":
    app.run(debug=True)