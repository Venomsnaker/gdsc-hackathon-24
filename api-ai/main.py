from flask import Flask
from model import load_model_class, predict_single_image

model_path = "rice_leaf_diseases.h5"

app = Flask(__name__)

app.config["JSON_AS_ASCII"] = False

from flask import request


@app.route("/predict", methods=["POST"])
def predict():
    if request.method == "POST":
        if "image" not in request.files:
            return {"error": "No image provided"}, 400

        image_file = request.files["image"]

        image_path = "./image/predict.jpg"

        image_file.save(image_path)

        res = predict_single_image(model, image_path)

        return {"message": "Prediction success", "data": res}
    else:
        return {"message": "Method not allowed", "data": None}


if __name__ == "__main__":
    print("Loading model...")
    model = load_model_class(model_path)
    print("Model loaded")
    app.run(debug=True, host="localhost", port=5000)
