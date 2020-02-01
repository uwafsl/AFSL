function [varargout] = GenerateSprintMetrics(varargin)

%GENERATESPRINTMETRICS Generates metrics for each sprint.
%
%   GENERATESPRINTMETRICS(DATA) TBD
%
%INPUT:     -DATA:  data structure of user story information
%
%OUTPUT:    -TBD
%
%Created by Christopher Lum
%lum@uw.edu
%Created by Taehan Kook
%taehan1025@gmail.com

%Version History
%12/22/17: Created
%2/8/18: Created main code
%3/15/18: Updated script
%3/20/18: Updated script, it works in Matlab R2015b as well
%3/28/18: Updated script, it does not modify user_stories.xlsx.

%----------------------OBTAIN USER PREFERENCES-----------------------------
switch nargin
    case 1
        %User supplies all inputs
        DATA = varargin{1};
        
    otherwise
        error('Invalid number of inputs');
end


%-----------------------CHECKING DATA FORMAT-------------------------------
% DATA
TableFormat =DATA; %Convert cell format input data to Table format.

%-------------------------BEGIN CALCULATIONS-------------------------------
%% Accepted DATA
%2/8/18: Created by Taehan Kook

StatusData = TableFormat(1:end,{'status','sprint','points','developmentChampion'}); %Show status/sprint. ------------[nx2 table]

StatusData.status = categorical(StatusData.status); %Convert 'StatusData'=('status') as categorical data . ------------[nx2 table]
categories(StatusData.status); %show the categories in status column. ------------[nx1 cell array]

% Dot Notation Explaination:
% StatusData.sprint() means it shows 'sprint' in StatusData table.
% (StatusData.status == 'accepted') means it show 'status' in the StatusData table which are only 'accepted'.
Accept = StatusData.sprint(StatusData.status == 'accepted'); %shows all the 'accepted sprint'. ------------[nx1 cell array]
Accept = str2double(Accept);
AcceptPoint = StatusData.points(StatusData.status == 'accepted'); %shows all the 'accepted points'. ------------[nx1 cell array]

%if statement: since Matlab R2016b or higher version gives numbers from
%table format as double format but R2015b gives numbers as cell format.
%Matlab version(9.0), R2016a has not tested yet.
if verLessThan('matlab','9.1')
    AcceptPoint = str2double(AcceptPoint);
end
AcceptDnP = [Accept,AcceptPoint];

ENDate = max(Accept); % Latest sprint

%This gives latest sprint and its points.
if unique(AcceptDnP(:,1)) | ENDate
    AcceptDP = AcceptDnP(AcceptDnP(:,1) == ENDate,:);
end

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
AcceptPtSum = sum(AcceptDP(:,2)); %%%%Descop Point Sum in the latest sprint %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
AccePoint = AcceptPtSum;
%------------------------------------------------------------------------------------------------------------------------------

%% Descoped Data
%2/8/18: Created by Taehan Kook

% StatusData.status = categorical(StatusData.status) %Convert StatusData as categorical data 
% In the table 'StatusData', status already converted into "Categorical" in row 28.
% so just can use categories(StatusData.status)
categories(StatusData.status); %Juts for checking what categories contain in status column in StatusData Table.

%This is for finding End sprint
descop = StatusData.sprint(StatusData.status == 'descoped' ); %shows all the 'descoped sprint'. ------------[nx1 cell array]
descop = str2double(descop); %descop changed from cell to double.
Depoint = StatusData.points(StatusData.status == 'descoped' );%Just for check if the number of rows are the same as "descop"
if verLessThan('matlab','9.1')
    Depoint = str2double(Depoint);
end

DescopDnP = [descop,Depoint]; % Descoped [sprint, points] format: cell array. just for check if correct.

if unique(DescopDnP(:,1)) | ENDate
    DescopDP = DescopDnP(DescopDnP(:,1) == ENDate,:);
end

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
DesPtSum = sum(DescopDP(:,2)); %%%%Descop Point Sum in the latest sprint %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
descopPoint = DesPtSum;


%% Blocked Data
%2/8/18: Created by Taehan Kook

% StatusData.status = categorical(StatusData.status) %Convert StatusData as categorical data 
categories(StatusData.status); %Juts for checking what categories contain in status column in StatusData Table.

block = StatusData.sprint(StatusData.status == 'blocked' ); %shows all the 'blocked sprint'. ------------[nx1 cell array]
block = str2double(block); %block changed from cell to double.
Blpoint = StatusData.points(StatusData.status == 'blocked' );%Just for check if the number of rows are the same as "block"

%if statement: since Matlab R2016b or higher version gives numbers from
%table format as double format but R2015b gives numbers as cell format.
%Matlab version(9.0), R2016a has not tested yet.

if verLessThan('matlab','9.1')
    Blpoint = str2double(Blpoint);
end

BlockDnP = [block,Blpoint]; % Blocked [sprint, points] format: cell array. just for check if correct.

if unique(BlockDnP(:,1)) | ENDate
    BlockDP = BlockDnP(BlockDnP(:,1) == ENDate,:);
end

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
BlockPtSum = sum(BlockDP(:,2)); %%%%block Point Sum in the latest sprint %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
blockPoint = BlockPtSum;


%% Stretch Data
%2/8/18: Created by Taehan Kook

stretch = StatusData.sprint(StatusData.status == 'stretch goal' ); %shows all the 'Strech goal sprint'. ------------[nx1 cell array]
stretch = str2double(stretch); %stretch changed from cell to double.
Strepoint = StatusData.points(StatusData.status == 'stretch goal' );% %Just for check if the number of rows are the same as "stretch"

%if statement: since Matlab R2016b or higher version gives numbers from
%table format as double format but R2015b gives numbers as cell format.
%Matlab version(9.0), R2016a has not tested yet.
if verLessThan('matlab','9.1')
    Strepoint = str2double(Strepoint);
end

StretchDnP = [stretch,Strepoint]; % Stretch goal [sprint, points] format: cell array. just for check if correct.

if unique(StretchDnP(:,1)) | ENDate
    StretchDP = StretchDnP(StretchDnP(:,1) == ENDate,:);
end

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
StretchPtSum = sum(StretchDP(:,2)); %%%%Stretched Point Sum in the latest sprint %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
stretchPoint = StretchPtSum;


%% Developers
%2/8/18: Created by Taehan Kook
%3/6/18: Edited by Taehan Kook
disp('Calculating Number of Developers.')

StatusData.sprint = str2double(StatusData.sprint); % the sprint column of StatusData is changed to double format.

%This show the selected row from a table. %choose all rows in which the max of "sprint column" in Table "StatusData."
NofWork = StatusData(StatusData.sprint(:,1) == ENDate,:);

%ABCDEFG = categories(NofWork.status)

%Do not include 'in backlog' & 'blocked' when counting current developers.
%So, these two are calcuated and subtracted from the total value.
accep = NofWork(NofWork.status(:,1) == 'accepted' ,:);
desco = NofWork(NofWork.status(:,1) == 'descoped',:);
strech = NofWork(NofWork.status(:,1) == 'stretch goal',:);
drop = NofWork(NofWork.status(:,1) == 'dropped',:);

Tot = [accep; desco; strech; drop]; %add all data required.
Tot.developmentChampion=categorical(Tot.developmentChampion); %Change developmentChampion in Tot as categorical data.

DevSize = unique(Tot.developmentChampion); % all developers, this may include '-'.

NoneDevSize = DevSize(DevSize == '-'); %size of '-' = 1 or 0, will be different depending on data situation.

%"if statement" will determine the number of total developers.
if size(NoneDevSize,1) == 1
    DevSize = size(DevSize,1) - 1;
elseif size(NoneDevSize,1) == 0
    DevSize = size(DevSize,1);
end



NofDeveloper = DevSize; %Total developers (Size)



%% Sprint_Metrics Data
%2/8/18: Created by Taehan Kook

%%%%%user_stories/sprint_metrics%%%%%%%
%%%%Number/Sprint/AcceptedPoints/DescopedPoints/BlockedPoints/StretchGoalPoints/NumberDevelopers%%%%
%SMD = Sprint_Metrics Data%


disp('Wait! Still running.')
if verLessThan('matlab','9.1')
    Num = size(xlsread('SprintMetrics.xlsx',1,'A:A'));
else
    Num = size(readtable('SprintMetrics.xlsx','Sheet','sprint_metrics','Range','A:A'));
end

Num = Num(:,1) + 1;
SMD = [Num,ENDate,AccePoint,descopPoint,blockPoint,stretchPoint,NofDeveloper];%Latest info.%
% SMD = num2cell(SMD)
APD = SMD(:,3)./SMD(:,7);%Accepted per Developer (APD)
SMD(:,end+1) = APD;

DPD = SMD(:,4)./SMD(:,7);%Descoped per Developer (DPD)
SMD(:,end+1) = DPD;

BPD = SMD(:,5)./SMD(:,7);%Blocked per Developer (BPD)
SMD(:,end+1) = BPD;

DPA = SMD(:,9)./SMD(:,8); % (Descoped% / Accepted%)
SMD(:,end+1) = DPA;

%New Sprint Data table format.
NewSprintMetrics = array2table(SMD,...
    'VariableNames',{'Number','Sprint','AcceptedPts','DescopedPts','BlockedPts','StretchGoalPts','Developers','AcceptedPerDeveloper','DescopedPerDeveloper','BlockedPerDeveloper','DescopedPerAccepted'});


%% Write The Latest Data on the existing Sprint_metrics in Matlab.
%2/8/18: Created by Taehan Kook
%3/28/18: Updated

%if statememt: readtable is much faster than xlsread
if verLessThan('matlab','9.1')
    SprintMetrics = xlsread('SprintMetrics.xlsx',1,'A:K');
    SprintMetrics = array2table(SprintMetrics,...
    'VariableNames',{'Number','Sprint','AcceptedStoryPoints','DescopedStoryPoints','BlockedStoryPoints','StretchGoalStoryPoints','NumberDevelopers','AcceptedPerDeveloper','DescopedPerDeveloper','BlockedPerDeveloper','Descoped__Accepted_'});

else
    SprintMetrics = readtable('SprintMetrics.xlsx','Sheet','sprint_metrics','Range','A:K');
    SprintMetrics.StretchGoalStoryPoints = str2double(SprintMetrics.StretchGoalStoryPoints); %convert cell to double

end

%% Write The Latest Data on SprintMetrics.xlsx
%4/27/18: Created by Taehan Kook
%
%Note: If SprintMetrics.xlsx is not checked out, this if statement will not
%run and just skip this part.
[Status, Values] = fileattrib('SprintMetrics.xlsx');

if Values.UserWrite == 1 %if it is not read-only, meaning that SprintMetrics.xlsx is checked out in Perforce
    
    RN = size(SprintMetrics);
    Range = RN(1)+2;
    Range = {'A','K';Range,Range};
    Range = sprintf('%s%d:%s%d' ,Range{:});
    
    %If there already exsits the same sprint data, this will not write the same sprint data again in SprintMetrics.xlsx.
    %if not, this will update new data in SprintMetrics.xlsx
    if ENDate ~= SprintMetrics.Sprint(end)
        xlswrite('SprintMetrics.xlsx',SMD,1,Range)
    end

end

%% Write new data below the existing sprint_metrics.
SprintMetrics.Number(Num) = SMD(:,1);
SprintMetrics.Sprint(Num) = SMD(:,2);
SprintMetrics.AcceptedStoryPoints(Num) = SMD(:,3);
SprintMetrics.DescopedStoryPoints(Num) = SMD(:,4);
SprintMetrics.BlockedStoryPoints(Num) = SMD(:,5);
SprintMetrics.StretchGoalStoryPoints(Num) = SMD(:,6);
SprintMetrics.NumberDevelopers(Num) = SMD(:,7);
SprintMetrics.AcceptedPerDeveloper(Num) = SMD(:,8);
SprintMetrics.DescopedPerDeveloper(Num) = SMD(:,9);
SprintMetrics.BlockedPerDeveloper(Num) = SMD(:,10);
SprintMetrics.Descoped__Accepted_(Num) = SMD(:,11);

SprintMetrics = table2array(SprintMetrics); %convert table to array.



%% PLOTTING DATA
%2/8/18: Created by Taehan Kook

disp('Wait!, Data are plotting.')

%User Story Point: Sprint versus {Accepted,Descoped,Blocked}
x = SprintMetrics(:,1); %Number of Dates
figure('Name','User Story Points','NumberTitle','off');
plot(x,SprintMetrics(:,3),'-s','MarkerSize',5) %Accepted Story Points
hold on
plot(x,SprintMetrics(:,4),'-s','MarkerSize',5) %Descoped Story Points
plot(x,SprintMetrics(:,5),'-s','MarkerSize',5) %Blocked Story Points
hold off
grid on;
legend('Accepted','Descoped','Blocked','Location','eastoutside')
title('User Story Points')
xlabel('Sprint Elapsed')
ylabel('Points')

%User Story Point: Sprint versus {Accepted/Developer,Descoped/Developer,Blocked/Developer}
figure('Name','User Story Points Per Developer','NumberTitle','off');
plot(x,SprintMetrics(:,8),'-s','MarkerSize',5) %Accepted Story Points
hold on
plot(x,SprintMetrics(:,9),'-s','MarkerSize',5) %Descoped Story Points
plot(x,SprintMetrics(:,10),'-s','MarkerSize',5) %Blocked Story Points
hold off
grid on;
legend('Accepted','Descoped','Blocked','Location','eastoutside')
title('User Story Points Per Developer')
xlabel('Sprint Elapsed')
ylabel('Points/Developer')

%Team Size: Number of Developers
figure('Name','Team Size','NumberTitle','off');
plot(x,SprintMetrics(:,7),'-s','MarkerSize',5) %Accepted Story Points
grid on;
legend('Number Developers','Location','eastoutside')
title('Team SIze')
xlabel('Sprint Elapsed')
ylabel('Number Developers')

disp(' ')
disp('This is the current Sprint_Metrics Data')
disp(NewSprintMetrics)

%error('Needs implementation')

end