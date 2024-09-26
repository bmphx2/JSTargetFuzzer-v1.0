import pandas as pd

def compare_data_average(dfs, interval, columns, group_columns, aggregation_methods, aggregate):
    """Compares data from multiple dataframes based on the provided time interval and aggregation methods."""
    resampled_dfs = []

    for df in dfs:
        df = df.copy()
        df['Timestamp'] = pd.to_datetime(df['Timestamp'])
        df['Interval'] = df['Timestamp'].dt.floor(interval)  # Normalize for the selected interval
        df.set_index('Interval', inplace=True)
        resampled_data = {}

        for col in columns:
            agg_method = aggregation_methods[col]
            if aggregate:
                group_by_columns = [pd.Grouper(freq=interval)] + group_columns
            else:
                group_by_columns = [pd.Grouper(freq=interval)]
            
            if agg_method == "mean":
                resampled = df[[col] + group_columns].groupby(group_by_columns).mean().reset_index()
            elif agg_method == "max":
                resampled = df[[col] + group_columns].groupby(group_by_columns).max().reset_index()
            elif agg_method == "last":
                resampled = df[[col] + group_columns].groupby(group_by_columns).last().reset_index()
            elif agg_method == "count":
                resampled = df[[col] + group_columns].groupby(group_by_columns).count().reset_index()
            elif agg_method == "min":
                resampled = df[[col] + group_columns].groupby(group_by_columns).min().reset_index()
            elif agg_method == "std":
                resampled = df[[col] + group_columns].groupby(group_by_columns).std().reset_index()
            elif agg_method == "sum":
                resampled = df[[col] + group_columns].groupby(group_by_columns).sum().reset_index()
            else:
                raise ValueError(f"Invalid aggregation method for column {col}")

            resampled_data[col] = resampled.set_index(['Interval'] + group_columns)[col]

        combined_resampled_df = pd.concat(resampled_data.values(), axis=1).reset_index()
        combined_resampled_df['Timestamp'] = combined_resampled_df['Interval']  # Reintroduzindo o Timestamp no dataframe resultante
        resampled_dfs.append(combined_resampled_df)

    return resampled_dfs
