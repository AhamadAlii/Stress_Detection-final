import pickle
import numpy as np
import os

# Get the absolute path of the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Move up one directory to access 'model' folder
model_dir = os.path.join(script_dir, "..", "model")

# Ensure the model file exists before loading
filename = os.path.join(model_dir, "trained_model.sav")

if not os.path.exists(filename):
    raise FileNotFoundError(f"Model file not found: {filename}")

# Load the trained model
with open(filename, "rb") as file:
    model = pickle.load(file)

# Selected features
selected_feats = [
    'BVP_mean', 'BVP_std', 'EDA_phasic_mean', 'EDA_phasic_min', 'EDA_smna_min', 
    'EDA_tonic_mean', 'Resp_mean', 'Resp_std', 'TEMP_mean', 'TEMP_std', 'TEMP_slope',
    'BVP_peak_freq', 'age', 'height', 'weight'
]

# Labels
labels = {
    0: "Amused",
    1: "Neutral",
    2: "Stressed"
}

def predict(arr):
    """
    Predicts the stress level based on input features.
    
    Args:
        arr (list): A list of feature values.

    Returns:
        tuple: (Predicted class, Probability distribution)
    """
    arr = np.array(arr)

    if arr.shape[0] != len(selected_feats):
        raise ValueError(f"Expected {len(selected_feats)} features, but got {arr.shape[0]}.")

    # Make predictions
    result = model.predict(arr.reshape(1, -1)).flatten()
    prob = model.predict_proba(arr.reshape(1, -1)).flatten()
    
    return result.tolist(), prob.tolist()
