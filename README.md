
# 📰 Fake News Detection Web App

A full-stack web application to detect whether a news article is **real** or **fake** using a machine learning model trained in Python and integrated with a React frontend and Node.js backend using `child_process`.

---

## 🚀 Features

- 🧠 Machine Learning Model trained using Scikit-Learn
- 🖥️ Next.js Frontend
- 🌐 Node.js Backend using Express
- 🐍 Python Model Execution using `child_process`
- 🔍 Real-time Fake News Prediction

---

## 📁 Project Structure

```
fake-news-app/
├── backend/                # Node.js Express backend
│   ├── server.js
│   └── package.json
│   ├── predict.py
│   ├── model.joblib        # 🔁 Generated via model_train.ipynb
│   └── vectorizer.joblib   # 🔁 Generated via model_train.ipynb
│   └── model_train.ipynb   # ✅ Notebook for training model
├── frontend/               # React.js frontend
│   ├── src/
│   │   └── App.js
│   └── package.json
```

---

## 🛠️ Installation Guide
### Dataset
- Dataset link: https://drive.google.com/drive/folders/1uViefNaUP9xhgzR5O4xrAOWYJpuYBOjt

### ⚙️ Prerequisites

- Node.js & npm
- Python (>= 3.6)
- `pip` for installing Python packages

---

### 📦 1. Clone the Repository

```bash
git clone https://github.com/Omkar2240/fake-news-detection.git
cd fake-news-detection
```

---

### 🧪 2. Install Python Dependencies

```bash
cd frontend
pip install scikit-learn pandas joblib
```

> Ensure `model.joblib` and `vectorizer.joblib` exist in this directory. If not, run the notebook `model_train.ipynb` to generate them.

---

### ⚙️ 3. Setup Backend

```bash
cd ../backend
npm install
npm run dev
```
- Make sure you activate the virtual environment, and after that run the server.

Server runs on: `http://localhost:8000`

---

### 🌐 4. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

App runs on: `http://localhost:3000`

---

## 🤔 How It Works

1. User enters a news article on the Next.js frontend.
2. Node.js backend receives the text and spawns a Python script.
3. The Python script loads the model, makes a prediction, and returns it.
4. The result is shown to the user instantly.

---

## 🧠 Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js, Express
- **ML Model**: Scikit-learn (trained via Jupyter Notebook)
- **Integration**: Node `child_process` with Python

---


## 🙌 Author

Made with ❤️ by **[Omkar Ramgirwar](https://github.com/Omkar2240)**

