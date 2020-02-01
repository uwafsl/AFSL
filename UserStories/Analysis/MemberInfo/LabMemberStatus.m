function [varargout] = LabMemberStatus(varargin)
%INPUT:     -DATA:  data structure of user story information
%
%OUTPUT:    -TBD
%
%Created by Taehan Kook
%taehan1025@gmail.com

%Version History
%4/19/18: Created

% ----------------------OBTAIN USER PREFERENCES-----------------------------
switch nargin
    case 0
        Sprint= readtable('..\SprintMetrics.xlsx','Range','B:B')
        
    otherwise
        error('Invalid number of inputs');
end


%-----------------------CHECKING DATA FORMAT-------------------------------
Sprint = table2array(Sprint)
LastSprint = max(Sprint)

C = char([92])% \ 
%AFSLRefactor: Need to update to be relative file paths.  See 
%ChangeWorkingDirectoryToThisLocation
myworkspaces = ReturnPathStringNLevelsUp(3)
myfile = '%s%cLabInfo%cMemberInfo.xlsx' %Path for MemberInfo.xlsx
Open = sprintf(myfile,myworkspaces,C,C) %
A=  readtable(Open,'Range','A:B') %Import MemberInfo(), Name/Status.

Members = table2array(A(:,1)); % Use 1st column, all lab members' name.
m = size(Members,1); % This will be used for For Loop later.

MembersALL = Members; %All Member's name from MeberInfo.xlsx.

%-------------------------BEGIN CALCULATIONS-------------------------------

%AcceptedDeveloper Data
AcceptedMember = readtable('..\AcceptedDeveloper.xlsm','sheet','Summary','Range','A:D'); %Import Summary sheet Data
AccMember = table2array(AcceptedMember); %convert table format into cell array.
num1 = size(AccMember,1); %Check for number of sheets
[~,~,raw] = xlsread('..\AcceptedDeveloper.xlsm',num1+1); %Import 2 month ago data.
raw1 = raw(2:end,1); %Names Only
[~,~,raw] = xlsread('..\AcceptedDeveloper.xlsm',num1+2); %Import Lastest sheet data.
raw2 = raw(2:end,1); %Names Only

%DescopedDeveloper Data
DescopedMember = readtable('..\DescopedDeveloper.xlsm','sheet','Summary','Range','A:D'); %Import Summary sheet Data
DecMember = table2array(DescopedMember); %convert table format into cell array.
num2 = size(DecMember,1); %Check for number of sheets
[~,~,raw] = xlsread('..\DescopedDeveloper.xlsm',num2); %Import 2 month ago data.
raw3 = raw(2:end,1);%Names Only
[~,~,raw] = xlsread('..\DescopedDeveloper.xlsm',num2+1); %Import Lastest sheet data.
raw4 = raw(2:end,1);%Names Only

Developers = [raw1;raw2;raw3;raw4]; %Combine all names as a column vector.
Developers = unique(Developers); %No. of developers who are active last 2 months

% 
n = size(Developers,1);
for i = 1:n
MemberYes(i,:) = Developers(i,1); %I think each members name need to be converted to char individually.

Member = char(MemberYes(i));
Members = strsplit(Member); %split fullname into first/last name.[2x1]
MembNormal = [Members(2),Members(1)]; % Rearrange names to last/first name.
MembNormal = join(MembNormal); % Combine Last/First names into Fullname(combine 2 column cells into 1 column).
MembReverse = cellstr(Member); % Change Last/Frist Name orders because some data's Last/Fisrt name orders are different.

MembersNormal(i,:) = MembNormal; % All Members: Last/First names
MembersReverse(i,:) = MembReverse; % All Members: First/Last names

%Return an array contatining logical 1 or 0 (True or False). This will
%analyze if members names exist in Accepted/DescopedDeveloper.xlsm
nameNormal = ismember(MembersALL,MembersNormal)  
nameReverse = ismember(MembersALL,MembersReverse)

end
nameNormal = num2cell(nameNormal);
nameReverse = num2cell(nameReverse);
%strcmp: compare char, give logical value: 1 or 0 (True or False)
MembersALL= horzcat(A, nameNormal, nameReverse); %Name Normal Check


MembersALL.Active_ = categorical(MembersALL.Active_);

% Chage Active status as yes or no.
for i = 1:m
    if MembersALL.Var3(i) == false
        MembersALL.Active_(i) = 'no'
    elseif MembersALL.Var3(i) == true
        MembersALL.Active_(i) = 'yes'
    elseif MembersALL.Var4(i) == true %Reverse name order.
        MembersALL.Active_(i) = 'yes'
    end
end

A.Active_ = MembersALL.Active_ ;% Overwite Active status of Matrix [A] 
B = cellstr(A.Active_) ;% Categorical to cell format
range = {'B','B';2,m+1}; % set the range of excel in which new result fill out.
range = sprintf('%s%d:%s%d' ,range{:}); % set the range of excel in which new result fill out.



%Find range of summary page for AcceptedDeveloper.xlsm
if verLessThan('matlab','9.1')
    RowNumber = xlsread('MemberActiveStatus.xlsm',2,'A:C');
    RN = size(RowNumber); %Row Number
    SheetM = RN(:,1)+3;
else
    RowNumber = readtable('MemberActiveStatus.xlsm','Sheet','Summary','Range','A:C');
    RN = size(RowNumber);
    SheetM = RN(:,1)+2;
end

RangeM = {'A','C';SheetM,SheetM};
RangeM = sprintf('%s%d:%s%d' ,RangeM{:});

%Summary Data
Version = cellstr(version('-release')); %Matlab Version
R = char([82]); % letter 'R'
Version = [R,Version]; 
Version = sprintf('%s%s',Version{:}); %Matlab Version [R201xx]

%Excel Hyperlink code for summary sheet.
SingleQuote = char([39]); %Single quote
Sheet = 'Sheet'; %letter 'Sheet'
SheetNum = SheetM; %Sheet Number for accepted

date = datestr(now,'mm/dd/yy')
hyperlink= '=HYPERLINK("#%c%s%d%c!A1","%d")';

% AND = char([45])
currentsprint = LastSprint
% previousSprint = LastSprint-1
% Sprint = sprintf('%d%c%d',previousSprint,AND,currentsprint)
MemberSummary = cellstr(sprintf(hyperlink,SingleQuote,Sheet,SheetNum,SingleQuote,currentsprint));%[cell]
MemberSummary = [MemberSummary, date, Version]; %Accepted Summary information.

%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
%add hyperlink to New Sheet for easy to go back to summary page
LetterSummary = 'Summary'; %letter 'Summary'
SheetToSummary = '=HYPERLINK("#%c%s%c!A1","Summary Page")'; %hyperlink
LinktoSummary = cellstr(sprintf(SheetToSummary,SingleQuote,LetterSummary,SingleQuote));%[cell]

%Accepted info. write.
writetable(A,'MemberActiveStatus.xlsm','sheet',SheetM) % Generate New Sheet
xlswrite('MemberActiveStatus.xlsm',LinktoSummary,SheetNum,'H1') %Write a hyperlink in the new sheet
xlswrite('MemberActiveStatus.xlsm',MemberSummary,2,RangeM) %For Summary, AcceptedDeveloper.xlsm


end
