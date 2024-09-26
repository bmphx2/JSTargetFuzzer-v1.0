import streamlit as st
from data_processing.compare_data_average import compare_data_average
from plotting.plot_detailed_average import plot_detailed_average

def run_detailed_average_analysis(df_list, file_names):
    resample_interval = st.sidebar.selectbox("Select time interval for detailed analysis average", ["1min", "15min", "1H", "1D"])
    all_columns = df_list[0].columns.tolist()
    y_column = st.sidebar.selectbox("Select main column for detailed analysis average", all_columns)
    group_columns = st.sidebar.multiselect("Select grouping columns for detailed analysis average", all_columns)
    additional_columns = st.sidebar.multiselect("Select additional columns for detailed analysis average", all_columns)
    
    aggregate_option = st.sidebar.radio("Do you want to group additional columns?", ["Yes", "No"])
    aggregation_method_main = st.sidebar.selectbox("Select aggregation method for main column", ["mean", "max", "last", "count", "min", "std", "sum"])
    aggregation_methods_additional = {
        col: st.sidebar.selectbox(f"Select aggregation method for {col}", ["mean", "max", "last", "count", "min", "std", "sum"]) for col in additional_columns
    }

    if 'Timestamp' in df_list[0].columns and y_column:
        try:
            columns_to_resample = [y_column] + additional_columns
            aggregation_methods = {y_column: aggregation_method_main, **aggregation_methods_additional}
            
            resampled_data_list = compare_data_average(df_list, resample_interval, columns_to_resample, group_columns, aggregation_methods, aggregate_option == "Yes")

            st.write(f"Comparing data between files: {', '.join(file_names)}")

            col1, col2 = st.columns(2)
            for i, resampled_data in enumerate(resampled_data_list):
                if i == 0:
                    with col1:
                        st.write(f"File: {file_names[i]}")
                        st.dataframe(resampled_data)
                else:
                    with col2:
                        st.write(f"File: {file_names[i]}")
                        st.dataframe(resampled_data)

            col3, col4 = st.columns(2)
            for i, resampled_data in enumerate(resampled_data_list):
                if i == 0:
                    with col3:
                        plot_detailed_average(resampled_data, y_column, additional_columns, group_columns, file_names[i])
                else:
                    with col4:
                        plot_detailed_average(resampled_data, y_column, additional_columns, group_columns, file_names[i])
        
        except Exception as e:
            st.error(f"An error occurred: {e}")
            st.stop()
