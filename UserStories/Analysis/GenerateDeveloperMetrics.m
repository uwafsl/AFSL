function [varargout] = GenerateDeveloperMetrics(varargin)

%GENERATEDEVELOPERMETRICS Generates metrics for each developer.
%
%   GENERATEDEVELOPERMETRICS(DATA) TBD
%
%INPUT:     -DATA:  data structure of user story information
%
%OUTPUT:    -DATA:  gererate new sprint sheets including (developers & Points)
%
%Created by Christopher Lum
%lum@uw.edu
%
%Created by Taehan Kook
%taehan1025@gmail.com

%Version History
%12/22/17: Created
%2/8/18: Created main script
%3/15/18: Updated script
%3/20/18: Updated script, it works in Matlab R2015b as well
%3/28/18: Updated script, added hyperlink code for excel.

%----------------------OBTAIN USER PREFERENCES-----------------------------
switch nargin
    case 1
        %User supplies all inputs
        DATA = varargin{1};
        
    otherwise
        error('Invalid number of inputs');
end


%-----------------------CHECKING DATA FORMAT-------------------------------
%2/8/18: Created by Taehan Kook

TableFormat =DATA; %Convert cell format input data to Table format.
StatusData = TableFormat(1:end,{'status','sprint','points','developmentChampion'});

StatusData.status = categorical(StatusData.status);

%-------------------------BEGIN CALCULATIONS-------------------------------
%% Accepted
%2/8/18: Created by Taehan Kook
Accept = StatusData.sprint(StatusData.status == 'accepted'); %shows all the 'accepted sprint'. ------------[nx1 cell array]
Accept = num2cell(Accept);
AcceptPoint = StatusData.points(StatusData.status == 'accepted');%shows all the 'accepted points'. ------------[nx1 cell array]
AcceptPoint = num2cell(AcceptPoint);
ADeveloper = StatusData.developmentChampion(StatusData.status =='accepted');

AcceptDATE = [Accept, AcceptPoint, ADeveloper];%This is all accepted info.
AcceptDATE = cell2table(AcceptDATE,'VariableNames',{'AcceptDate','Pts','Developer'}); %cell to table format

AcceptDATE.AcceptDate = str2double(AcceptDATE.AcceptDate);%before find max sprint, this need for sprint to be double.
AccepDnS = AcceptDATE(AcceptDATE.AcceptDate(:,1) == max(AcceptDATE.AcceptDate(:,1)),:); %Find the latest accepted matrix.
ENDate = unique(AcceptDATE.AcceptDate);
ENDate = max(ENDate); %Latest Sprint

AcceptDATE.AcceptDate = categorical(AcceptDATE.AcceptDate); %Make sprint as categorial format is necessary for split out by sprint.

%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
%----------------------Accepted Dveloper/Points------------------------------
ADate = AcceptDATE.AcceptDate(AcceptDATE.AcceptDate == num2str(ENDate));
APts = AcceptDATE.Pts(AcceptDATE.AcceptDate == num2str(ENDate));
ADevelp = AcceptDATE.Developer(AcceptDATE.AcceptDate == num2str(ENDate));

% Ryan working

Version = version('-release');

for i=1:4
    
    VersionTest(i) = Version(i);
    
end

VersionTest = str2double(VersionTest);

if VersionTest >= 2016 %Since 'split' function does not work in 2015 version.

% Ryan end

ADevelp = split(ADevelp); %split fullname into first/last name.
Arematch = [ADevelp(:,2),ADevelp(:,1)]; % Rearrange names to last/first name.
ADevelp = join(Arematch); % combine together.
end

if verLessThan('matlab','9.2')
    ADevelp = cellstr(ADevelp);
end

%Need them to be cell array.
ADate = num2cell(ADate);
APts = num2cell(APts);

Accepted =  [ADevelp, APts]; %cell array
Accepted = cell2table(Accepted,'VariableNames',{'Developer','Pts'});

if verLessThan('matlab','9.1')
    Accepted.Pts = str2double(Accepted.Pts);
end


%add points by each Developer
AcceptDP = varfun(@mean,Accepted,'GroupingVariables','Developer'); %Developers
AcceptDP.SUM = AcceptDP.GroupCount.*AcceptDP.mean_Pts



%% Descoped
%2/8/18: Created by Taehan Kook

Descop = StatusData.sprint(StatusData.status == 'descoped');%shows all the 'accepted sprint'. ------------[nx1 cell array]
Descop = num2cell(Descop);
DescopPoint = StatusData.points(StatusData.status == 'descoped'); %shows all the 'accepted points'. ------------[nx1 cell array]
DescopPoint = num2cell(DescopPoint);
DDeveloper = StatusData.developmentChampion(StatusData.status =='descoped');

DescopDATE = [Descop, DescopPoint, DDeveloper];%This is all accepted info.
DescopDATE = cell2table(DescopDATE,'VariableNames',{'DescopDate','Pts','Developer'});

DescopDATE.DescopDate = categorical(DescopDATE.DescopDate);

%----------------------Descoped Dveloper/Points------------------------------
DDate = DescopDATE.DescopDate(DescopDATE.DescopDate == num2str(ENDate));
DPts = DescopDATE.Pts(DescopDATE.DescopDate == num2str(ENDate));

if verLessThan('matlab','9.1')
    DPts = str2double(DPts);
end


if DPts ~= 0
    DDevelp = DescopDATE.Developer(DescopDATE.DescopDate == num2str(ENDate));
    
    if size(DDevelp,1)==1
        if VersionTest >= 2016
            DDevelp = split(DDevelp); %split fullname into first/last name.[2x1]
            Drematch = [DDevelp(2,:),DDevelp(1,:)]; % Rearrange names to last/first name.
            DDevelp = join(Drematch); % combine together.
        end
        
        if verLessThan('matlab','9.2')
            DDevelp = cellstr(DDevelp);
        end
    else
        if VersionTest >= 2016
            DDevelp = split(DDevelp); %split fullname into first/last name.[nx2]
            Drematch = [DDevelp(:,2),DDevelp(:,1)]; % Rearrange names to last/first name.
            DDevelp = join(Drematch); % combine together.
        end
        
        if verLessThan('matlab','9.2')
            DDevelp = cellstr(DDevelp);
        end
        
    end
    %Need them to be cell array.
    DDate = num2cell(DDate);
    DPts = num2cell(DPts);

    Descoped =  [DDevelp, DPts]; %cell array
    Descoped = cell2table(Descoped,'VariableNames',{'Developer','Pts'})

%     if verLessThan('matlab','9.1')
%         Descoped.Pts = str2double(Descoped.Pts)
%     end


%add points by each Developer
    DescopedDP = varfun(@mean,Descoped,'GroupingVariables','Developer'); %Developers' Points
    DescopedDP.SUM = DescopedDP.GroupCount.*DescopedDP.mean_Pts

else 
    
    DescopedDP = 0
end

%% Write
%Note: Please check AccepedDeveloper.xlsm, DescopedDeveloper.xlsm and make sure if sheet number is correct.
disp('Wait for a second.')

%Find range of summary page for AcceptedDeveloper.xlsm
if verLessThan('matlab','9.1')
    RowNumberA = xlsread('AcceptedDeveloper.xlsm',2,'A:C');
    RNA = size(RowNumberA);
    SheetA = RNA(:,1)+3;
else
    RowNumberA = readtable('AcceptedDeveloper.xlsm','Sheet','Summary','Range','A:C');
    RNA = size(RowNumberA);
    SheetA = RNA(:,1)+2;
end

RangeA = {'A','C';SheetA,SheetA};
RangeA = sprintf('%s%d:%s%d' ,RangeA{:});

%Find range of summary page for DescopedDeveloper.xlsm
if verLessThan('matlab','9.1')
    RowNumberD = xlsread('DescopedDeveloper.xlsm',2,'A:C');
    RND = size(RowNumberD);
    SheetD = RND(:,1)+3;
else
    RowNumberD = readtable('DescopedDeveloper.xlsm','Sheet','Summary','Range','A:C');
    RND = size(RowNumberD);
    SheetD = RND(:,1)+2;
end

RangeD = {'A','C';SheetD,SheetD};
RangeD = sprintf('%s%d:%s%d' ,RangeD{:});

%Summary Data
Version = cellstr(version('-release')); %Matlab Version
R = char([82]); % letter 'R'
Version = [R,Version]; 
Version = sprintf('%s%s',Version{:}); %Matlab Version [R201xx]

%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
%Excel Hyperlink code for summary sheet.
SingleQuote = char([39]); %Single quote
Sheet = 'Sheet'; %letter 'Sheet'
SheetNumA = SheetA+1; %Sheet Number for accepted
SheetNumD = SheetD; %Sheet Number for descoped

hyperlink= '=HYPERLINK("#%c%s%d%c!A1","%d")';

Asummary = cellstr(sprintf(hyperlink,SingleQuote,Sheet,SheetNumA,SingleQuote,ENDate));%[cell]
Asummary = [Asummary, datestr(now,'mm/dd/yy'), Version]; %Accepted Summary information.

Dsummary = cellstr(sprintf(hyperlink,SingleQuote,Sheet,SheetNumD,SingleQuote,ENDate));%[cell]
Dsummary = [Dsummary, datestr(now,'mm/dd/yy'), Version]; %Descoped Summary information.

%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
%add hyperlink to New Sheet for easy to go back to summary page
LetterSummary = 'Summary'; %letter 'Summary'
SheetToSummary = '=HYPERLINK("#%c%s%c!A1","Summary Page")'; %hyperlink
LinktoSummary = cellstr(sprintf(SheetToSummary,SingleQuote,LetterSummary,SingleQuote));%[cell]

%Accepted info. write.
writetable(AcceptDP,'AcceptedDeveloper.xlsm','sheet',SheetA+1) % Generate New Sheet
xlswrite('AcceptedDeveloper.xlsm',LinktoSummary,SheetNumA,'H1') %Write a hyperlink in the new sheet
xlswrite('AcceptedDeveloper.xlsm',Asummary,2,RangeA) %For Summary, AcceptedDeveloper.xlsm


if size(DescopedDP,2) ~= 1
    writetable(DescopedDP,'DescopedDeveloper.xlsm','sheet',SheetD) % Generate New Sheet
    xlswrite('DescopedDeveloper.xlsm',LinktoSummary,SheetNumD,'H1') %Write a hyperlink in the new sheet
    xlswrite('DescopedDeveloper.xlsm',Dsummary,2,RangeD) %For Summary, DescopedDeveloper.xlsm

end
% error('Needs implementation')
end
