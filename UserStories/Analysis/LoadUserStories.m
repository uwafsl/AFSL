function [varargout] = LoadUserStories(varargin)

%LOADUSERSTORIES  Loads data from user_stories.xlsx into a data structure.
%
%   [DATA] = LOADUSERSTORIES() Loads data from user_stories.xlsx into a
%   DATA structure that can be used in Matlab.
%
%INPUT:     -None:
%
%OUTPUT:    -DATA:  Data structure
%
%Created by Christopher Lum
%lum@uw.edu
%
%Created by Taehan Kook
%taehan1025@gmail.com
%
%Version History
%12/22/17: Created
%2/8/18: Created
%3/17/18: Updated Script
%3/19/18: Updated Script


%----------------------OBTAIN USER PREFERENCES-----------------------------
switch nargin
    case 0
        %User supplies all inputs

    otherwise
        error('Invalid number of inputs');
end


%-----------------------CHECKING DATA FORMAT-------------------------------
%Created by Taehan Kook
%Date: 2/8/2018
disp('Wait! Currently reading excel file')

DATA = readtable('..\user_stories.xlsx','Range','A:K');


%-------------------------BEGIN CALCULATIONS-------------------------------
% error('Needs implementation')

%output data
varargout{1} = DATA;
end