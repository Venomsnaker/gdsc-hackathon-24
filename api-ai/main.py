from flask import Flask
from model import load_model_class, predict_single_image
from flask import request
import json

model_path = "rice_leaf_diseases.h5"

app = Flask(__name__)

app.config["JSON_AS_ASCII"] = False
app.config["MAX_CONTENT_LENGTH"] = 102400000


@app.route("/predict", methods=["POST"])
def predict():
    if request.method == "POST":
        if "image" not in request.files:
            return {"error": "No image provided"}, 400

        image_file = request.files["image"]

        image_path = "api-ai/image/predict.jpg"

        image_file.save(image_path)

        res = predict_single_image(model, image_path)

        return {"message": "Prediction success", "data": res }
    else:
        return {"message": "Method not allowed", "data": None}


@app.route("/rice-news", methods=["GET"])
def rice_news():

    with open("crawler/data/rice-data.txt", "r", encoding="utf-8") as file:
        data = []
        for line in file:
            # Loại bỏ các khoảng trắng ở đầu và cuối dòng
            line = line.strip()
            line = json.loads(line)
            data.append(line)
    return {"message": "Giá gạo mới nhất", "data": data}


@app.route("/rice-html", methods=["GET"])
def rice_html():
    with open("quotes-vietnambiz.vn.html", "r", encoding="utf-8") as file:
        html_content = file.read()
    # Phân tích dữ liệu JSON
    return {"message": "Giá gạo mới nhất", "data": html_content}


@app.route("/news", methods=["GET"])
def news():

    with open("crawler/data/data.txt", "r", encoding="utf-8") as file:
        data = []
        for line in file:
            # Loại bỏ các khoảng trắng ở đầu và cuối dòng
            line = line.strip()
            line = json.loads(line)
            data.append(line)

    # Phân tích dữ liệu JSON
    return {"message": "Tin tức mới nhất", "data": data}

@app.route("/tintucnongnghiep", methods=["GET"])
def tintic():

    with open("crawler/data/output.json", "r", encoding="utf-8") as file:
        data = json.load(file)

    return {"message": "Tin tức nông nghiệp mới nhất", "data": data}



if __name__ == "__main__":
    print("Loading model...")
    model = load_model_class(model_path)
    print("Model loaded")
    app.run(debug=True, host="localhost", port=5000)
