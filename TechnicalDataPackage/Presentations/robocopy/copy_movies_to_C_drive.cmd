::This script is used to copy movies (used for PowerPoint presentations) from the AFSLShared drive (assumed to be mapped to the K drive) to the local computer's C:\KDriveCopy folder.  
::
::This should be done if you want AFSL PowerPoint presentations to run correctly.

robocopy "K:\AFSL\TechnicalDataPackage\Presentations\movies" "C:\KDriveCopy\AFSL\TechnicalDataPackage\Presentations\movies" /MIR

::wait for the user to hit a key before closing the command window
pause