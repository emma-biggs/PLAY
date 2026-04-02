#!/usr/bin/python3

import pandas as pd
import numpy as np
import csv
import os

# Saved data
analysis_data_path = "/Users/emmabiggs/Library/CloudStorage/Box-Box/BPP Lab/4. People/1. Current Postdocs & CRCs/Emma/BPP_PROJECT - PLAY/4. Data/2. Analysis/PLAY/"
os.chdir(analysis_data_path)

demo_data = pd.read_csv("Questionnaires-Demos.csv")
demo_data = demo_data.loc[demo_data["Eligible"] == 1]

# Loop through all .csv files in current data download folder
raw_data_path = "/Users/emmabiggs/Library/CloudStorage/Box-Box/BPP Lab/4. People/1. Current Postdocs & CRCs/Emma/BPP_PROJECT - PLAY/4. Data/1. Raw/Download_Pavlovia/"
dir_list = os.listdir(raw_data_path)

# Create empty dataframes for imported data
allData_expRatings = pd.DataFrame()
allData_fearRatings = pd.DataFrame()
allData_unplRatings = pd.DataFrame()

def dataQA(raw_data_path, currFile):
    
    dataStatus = 1
    fileLength = 0
    
    # Read .csv data
    try:
        currData = pd.read_csv(raw_data_path + currFile)
        
        # Skip if length of file is < 34 rows - must incl ACQ
        if len(currData) < 34:
            dataStatus = 2

        # Number of rows - to find most complete data
        fileLength = len(currData)

        # Rename key columns for ease
        if any(currData.columns == "participant*"):
            currData = currData.rename(columns={"participant*": "pID", "RatingScale.response": "response"})
        else:
            currData = currData.rename(columns={"participant": "pID", "RatingScale.response": "response"})

    # Skip if file is empty
    except pd.errors.EmptyDataError:
        currData = None
        dataStatus = 2
   
    return currData, dataStatus, fileLength
    
    
def addTrialNum(currData):
    
    # Add phase column
    conditions = [(currData["ACQ.thisN"] >= 0),(currData["GEN.thisN"] >= 0),(currData["EXT.thisN"] >= 0)]
    currData["phase"] = np.select(conditions,[1,2,3])

    # Combine trial number columns
    currData["trialN"] = currData["ACQ.thisN"].fillna(0) + currData["GEN.thisN"].fillna(0) + currData["EXT.thisN"].fillna(0)
    
    return currData
    
    
def extractRatings(currData, beliefRatings, Qnum):

    # Get columns of interest
    currRatings = currData.loc[currData["Qnum"] == Qnum , ["response", "CStype", "phase", "trialN"]]
    # Add prior belief column
    conditions = [(currRatings["CStype"] == "CS+"),(currRatings["CStype"] == "CS-")]
    values = [(beliefRatings["response"][beliefRatings["CStype"] == "CS+"]),(beliefRatings["response"][beliefRatings["CStype"] == "CS-"])]
    currRatings["priorBelief"] = np.select(conditions,values)
    # Add one to responses
    currRatings["response"] = currRatings["response"] + 1
    
    return currRatings
    
    
def interpMissing(currRatings):
    
    # add new trial numbers for each CS type in each phase
    for currPhase in [1,2,3]:
        for currCS in ["CS+","CS-","GS1","GS2","GS3","GS4"]:
            inds = currRatings.index[(currRatings["CStype"] == currCS) & (currRatings["phase"] == currPhase)].tolist()
            for i in range(0,len(inds)):
                currRatings.loc[inds[i],"trialN2"] = i
    
    return currRatings
    
def addDemoData(demo_data, currRatings, allData):
    
    # Add demo data to ratings
    currRatings.loc[:,"Age"] = demo_data.loc[demo_data["ComboID"] == currID, "Age"].item()
    currRatings.loc[:,"Group"] = demo_data.loc[demo_data["ComboID"] == currID, "CurrentPain"].item()
    currRatings.loc[:,"pID"] = currID
    
    # Concatenate data
    allData = pd.concat([allData, currRatings])
    
    return allData
    

# Loop through each ID code
for currID in demo_data["ComboID"]:
    
    # Alternative ID code for participants with typo codes
    altID = demo_data.loc[demo_data["ComboID"] == currID, "AltCode"].item()
    
    # Code for data status, 0=missing, 1=found, 2=incomplete
    dataStatus = 0
    
    # Length of data file, to find most complete data
    oldFileLength = 0
    
    # Loop through each file in the list
    for currFile in dir_list:
        
        # Match ID code or alt ID code to filename
        if currFile.endswith(".csv") & (currFile.upper().startswith(str(currID)) | currFile.upper().startswith(str(altID))):
            
            # ------------------------------------
            # QA the file found
            currData, dataStatus, newFileLength = dataQA(raw_data_path, currFile)
            
            # If the new file is shorter than the previous one skip it
            if newFileLength < oldFileLength:
                continue
            
            # Log the file status and name
            demo_data.loc[demo_data["ComboID"] == currID, "expData"] = dataStatus
            demo_data.loc[demo_data["ComboID"] == currID, "expDataFile"] = currFile
            
            # If the file is incomplete or empty then skip it
            if dataStatus == 2:
                continue

            # ------------------------------------
            # Add trial number to data
            currData = addTrialNum(currData)

            # Extract data
            unplRatings = currData.loc[currData["USunpl.response"] >= 0 , ["USunpl.response", "phase"]]
            unplRatings.loc[:,"pID"] = currID
            beliefRatings = currData.loc[currData["Qnum"] == 5 , ["response","CStype"]]
            beliefRatings.loc[:,"pID"] = currID
            
            expRatings = extractRatings(currData, beliefRatings, 7)
            fearRatings = extractRatings(currData, beliefRatings, 8)
            
            # Interpolate missing values for exp and fear ratings
            expRatings = interpMissing(expRatings)
            fearRatings = interpMissing(fearRatings)
            
            # Add demo data to each rating type dataset
            allData_unplRatings = addDemoData(demo_data, unplRatings, allData_unplRatings)
            allData_expRatings = addDemoData(demo_data, expRatings, allData_expRatings)
            allData_fearRatings = addDemoData(demo_data, fearRatings, allData_fearRatings)
        
            # Update file length to compare to new file    
            oldFileLength = newFileLength
    
    # If all files have been searched log dataStatus as 0        
    demo_data.loc[demo_data["ComboID"] == currID, "expData"] = dataStatus

# Save data to .csv
allData_expRatings.to_csv("Ratings-Expectancy.csv", sep=',')
allData_fearRatings.to_csv("Ratings-Fear.csv", sep=',')
allData_unplRatings.to_csv("Ratings-Unpleasantness.csv", sep=',')
demo_data.to_csv("Questionnaires-Demos.csv")
    