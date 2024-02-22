import numpy as np
from tensorflow.keras.preprocessing import image

from tensorflow.keras.models import load_model


def load_model_class(model_path):
    model = load_model(model_path)
    return model



def predict_single_image(model , image_path) -> str:  # Replace with the path to your single image
    img = image.load_img(image_path, target_size=(256, 256))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions[0])
    class_labels = {0: 'bacterial_leaf_blight', 1: 'brown_spot', 2: 'healthy', 3: 'leaf_blast',
                    4: 'leaf_scald', 5: 'narrow_brown_spot', 6: 'rice_hispa', 7: 'sheath_blight', 8: 'tungro'}
    predicted_class_name = class_labels[predicted_class]
    return predicted_class_name