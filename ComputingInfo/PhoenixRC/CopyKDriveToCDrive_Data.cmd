::This script copies data files for this mission from the K drive to the C:\KDriveCopy.
::
::This does NOT copy files or other data.

::Phoenix RC
robocopy "K:\AFSL\Software\PhoenixRC" "C:\KDriveCopy\AFSL\Software\PhoenixRC" /MIR

::wait for the user to hit a key before closing the command window
pause