#!/usr/bin/python3

import pandas as pd
import numpy as np
import sidetable
import csv
import os

# Saved data path
analysis_data_path = "/Users/emmabiggs/Library/CloudStorage/Box-Box/BPP Lab/4. People/1. Current Postdocs & CRCs/Emma/BPP_PROJECT - PLAY/4. Data/2. Analysis/PLAY/"
os.chdir(analysis_data_path)

# Raw data path
raw_data_path = "/Users/emmabiggs/Library/CloudStorage/Box-Box/BPP Lab/4. People/1. Current Postdocs & CRCs/Emma/BPP_PROJECT - PLAY/4. Data/1. Raw/Download_Qualtrics_2023-02-24_13h39/"

# Import data from questionnaires - manually remove header rows 2 & 3
Q2 = pd.read_csv(raw_data_path + 'Play_2.csv')
Q3 = pd.read_csv(raw_data_path + 'Play_3.csv')
print("Data from Q2 and Q3 imported")

# Filter to participants with completed ID codes
Q2 = Q2.loc[:,"UserLanguage":"id"]
Q3 = Q3.loc[(Q3["ID"] > 0) & (Q3["Complete"] != 3),  "UserLanguage":"id"]

# Combine study ID and SONA codes and check for duplicates
def duplicate_check(df):
    
    # Merge ID and SONA codes 
    df["ComboID"] = df["ID_1_TEXT"].fillna('').astype(str) + df["ID_2_TEXT"].fillna('').astype(str)
    df["ComboID"] = df["ComboID"].str.upper()
    
    # Check for duplicates
    if len(df["ComboID"]) > len(set(df["ComboID"])):
        print("Duplicate IDs in datatset")
        seen = set()
        duplicate = [];
        for x in df["ComboID"]:
            if x in seen:
                duplicate.append(x)
            else:
                seen.add(x)
        print(duplicate)
    else:
        print("No duplicate IDs found")

print("Duplicate check for Q2")
duplicate_check(Q2)
print("Duplicate check for Q3")
duplicate_check(Q3)

# !!!! Manually check duplicates for incomplete responses

# Combine Q2 and Q3 dataframes by ComboID key
Data_combined = pd.merge(Q2, Q3, how="outer", on=["ComboID"])

# Categorize participants in age ranges
conditions = [(Data_combined["Age"] >= 12) & (Data_combined["Age"] <= 16), \
             (Data_combined["Age"] >= 17) & (Data_combined["Age"] <= 21), \
             (Data_combined["Age"] >= 22) & (Data_combined["Age"] <= 26), \
             (Data_combined["Age"] >= 27) & (Data_combined["Age"] <= 31), \
             (Data_combined["Age"] >= 32) & (Data_combined["Age"] <= 36), \
             (Data_combined["Age"] >= 37) & (Data_combined["Age"] <= 41), \
             (Data_combined["Age"] >= 42) & (Data_combined["Age"] <= 46), \
             (Data_combined["Age"] >= 47) & (Data_combined["Age"] <= 52)]
values = [1,2,3,4,5,6,7,8]
Data_combined["AgeGroup"] = np.select(conditions,values)

# Create summary table of recruitment numbers
Data_combined.stb.freq(["AgeGroup", "CurrentPain"])

# Save data to .csv
Data_combined.to_csv("Questionnaires-AllItems.csv", sep=',')
Data_demos = Data_combined[["ComboID","Age","AgeGroup","CurrentPain"]]
Data_demos.to_csv("Questionnaires-Demos.csv", sep=',')
