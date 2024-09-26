import os
import streamlit as st
import pandas as pd
from data_processing.load_data import load_data
from analysis.detailed_analysis import run_detailed_analysis
from analysis.evolutionary_analysis import run_evolutionary_analysis
from analysis.statistical_analysis import run_statistical_analysis
from analysis.detailed_average_analysis import run_detailed_average_analysis

# Set the base directories
BASE_PROJECT_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../"))
BASE_INPUT_PATH = os.path.join(BASE_PROJECT_PATH, "programs", "data")

st.title("Dynamic Data Analysis")

# Function to get file creation time
def get_creation_time(file_path):
    return os.path.getctime(file_path)

# List and sort files in the fixed directory by creation time (descending)
files = sorted(
    [f for f in os.listdir(BASE_INPUT_PATH) if f.endswith('.csv')],
    key=lambda f: get_creation_time(os.path.join(BASE_INPUT_PATH, f)),
    reverse=True
)

# Select files from the fixed directory
selected_files = st.sidebar.multiselect("Choose CSV files", files)

if selected_files:
    # Load selected files
    dataframes = [load_data(os.path.join(BASE_INPUT_PATH, file)) for file in selected_files]
    
    # Remove empty dataframes before concatenating
    dataframes = [df for df in dataframes if not df.empty]
    
    # Combine dataframes if multiple files are loaded
    if dataframes:
        combined_df = pd.concat(dataframes, ignore_index=True)

        # Select type of analysis
        analysis_type = st.sidebar.selectbox("Select type of analysis", ["Statistical Analysis", "Evolutionary Analysis", "Detailed Analysis", "Detailed Analysis Average"])

        if analysis_type == "Statistical Analysis":
            run_statistical_analysis(combined_df)
        
        elif analysis_type == "Evolutionary Analysis":
            run_evolutionary_analysis(combined_df)
        
        elif analysis_type == "Detailed Analysis":
            run_detailed_analysis(dataframes, selected_files)
        
        elif analysis_type == "Detailed Analysis Average":
            run_detailed_average_analysis(dataframes, selected_files)
