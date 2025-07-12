
import sys
import joblib

if len(sys.argv) < 2:
    print("Usage: python predict.py <text>")
    sys.exit(1)

model = joblib.load("model.jb")
vectorizer = joblib.load("vectorizer.jb")

text = sys.argv[1]    # takes the text input from command line argument
vector = vectorizer.transform([text])
prediction = model.predict(vector)
print(prediction[0])
