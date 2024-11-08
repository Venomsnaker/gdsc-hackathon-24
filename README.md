# SMART HARVEST
Smart Harvest is a solution for farmers in Vietnam. The solution's main target is in line with the second goal of the UN Sustainable Development Goals. The main features are:

- Field management
- Disease classification
- Weather forecast
- Agriculture news

## Technical stack
- Mobile app: Flutter, Dart
- Frontend: NextJS
- Backend: NodeJS, Flask
- Database: PostgreSQL, MongoDB, Firebase
- Deep learning: TensorFlow
- Cloud: Google Cloud Platform

## Target Devices
- Android : APK File in `Release`
- Web : http://congnong.edubox.io.vn (declare)

## Architecture diagram
![Architecture](smart_harvest/src/assets/images/architecture.png)


## Model 
##### Rice Leaf Diseases Classification
- Dataset: https://www.kaggle.com/datasets/loki4514/rice-leaf-diseases-detection
- Notebook: https://www.kaggle.com/code/venomsnaker/rice-leaf-diseases-classification
- Reference Notebook: https://www.kaggle.com/datasets/shrupyag001/philippines-rice-diseases
Comments

## Features and Demo
### Web App
<div style="display: flex; gap: 10px;">
    <div>
        <img src="smart_harvest/src/assets/images/web-home.png" alt="Landing Page" style="width: 100%; max-width: 400px;">
        <p style="text-align: center;">Landing Page</p>
    </div>
    <div>
        <img src="smart_harvest/src/assets/images/web-dashboard.png" alt="Home Page" style="width: 100%; max-width: 400px;">
        <p style="text-align: center;">Home Page</p>
    </div>
</div>

<div style="display: flex; gap: 10px;">
    <div>
        <img src="smart_harvest/src/assets/images/web-predict.png" alt="Landing Page" style="width: 100%; max-width: 400px;">
        <p style="text-align: center;">Diseases Prediction Page</p>
    </div>
    <div>
        <img src="smart_harvest/src/assets/images/web-note.png" alt="Home Page" style="width: 100%; max-width: 400px;">
        <p style="text-align: center;">Note and Planing Page</p>
    </div>
</div>

### Mobile App
<div style="display: flex; gap: 10px;">
    <div>
        <img src="smart_harvest/src/assets/images/mobile-shop.png" alt="Landing Page" style="width: 100%; max-width: 400px;">
        <p style="text-align: center;">Martket Nearest</p>
    </div>
    <div>
        <img src="smart_harvest/src/assets/images/mobile-note.png" alt="Home Page" style="width: 100%; max-width: 400px;">
        <p style="text-align: center;">Note and Planing</p>
    </div>
    <div>
        <img src="smart_harvest/src/assets/images/mobile-predict-input.png" alt="Landing Page" style="width: 100%; max-width: 400px;">
        <p style="text-align: center;">Diseases Prediction Page</p>
    </div>
    <div>
        <img src="smart_harvest/src/assets/images/mobile-predict.png" alt="Home Page" style="width: 100%; max-width: 400px;">
        <p style="text-align: center;">Predict Results</p>
    </div>
</div>

## TODO
- [ ] Add more features.
- [ ] Implement more models for diseases classification.
- [ ] Implement on Docker.


