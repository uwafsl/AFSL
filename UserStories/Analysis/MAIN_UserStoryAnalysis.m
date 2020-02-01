%Analyze user stories to create various plots and metrics.
%
%Created by Christopher Lum
%lum@uw.edu

%Version History
%12/22/17: Created
%3/15/18: Updated Script
%3/19/18: Updated Script

%Note: Please Read “Instructions_MatlabUserStories.docx” before you run this script.
%\\AFSL\UserStories\Analysis

clear
clc
close all

%Load the Excel data into a worksp
[UserStoryData] = LoadUserStories();

%Generate sprint metrics
GenerateSprintMetrics(UserStoryData);

%Generate developer metrics
GenerateDeveloperMetrics(UserStoryData);

disp('DONE!')