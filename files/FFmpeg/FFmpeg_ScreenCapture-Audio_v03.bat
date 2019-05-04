@echo off

systeminfo | findstr /B /C:"OS Name" /C:"OS Version" | find /i "XP" > NUL && set ver=XP || set ver=other

:: ---------- User input ----------

set /p audio=Do you want to record audio ? (0: NO, 1: Yes) : 

:: ---------- Find Time ----------
set hour=%time:~0,2%
if "%hour:~0,1%" == " " set hour=0%hour:~1,1%
set min=%time:~3,2%
if "%min:~0,1%" == " " set min=0%min:~1,1%
::set secs=%time:~6,2%
::if "%secs:~0,1%" == " " set secs=0%secs:~1,1%

set year=%date:~-4%
set month=%date:~-7,2%
if "%month:~0,1%" == " " set month=0%month:~1,1%
set day=%date:~-10,2%
if "%day:~0,1%" == " " set day=0%day:~1,1%


set datetimef=%year%%month%%day%%hour%%min%

:: ---------- Start ----------
echo Batch script to record screen and audio 

if %audio%==1  (
	H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -list_devices true -f dshow -i dummy
	echo.
	echo.
	echo Copy the alternative name of your microphone:
	echo Example : @device_cm_{33D9A762-90C8-11D0-BD43-00A0C911CE86}\wave_{4286150F-8585-41D6-BA56-49CFB8009DDA}
	echo. 
	set /p micro="Paste it here : "
	echo. 
)
	
	
set /p framer="Which frame rate per second do you want ? "


echo. 
echo. 
echo Type CTRL-C to stop the recording.
echo The recording will be stop and you will be asked if you want to terminate the batch job Y/N, choose N.
echo The video will be created in the same folder as the batch file and a reduze resolution will be created.
echo.
set /p info=Type Enter to continue



if %audio%==1  (
	if %ver%==XP (
		H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -f gdigrab -framerate %framer% -i desktop -f dshow -i audio="%micro%" %datetimef%_ScreenCapture.mkv
		H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -i %datetimef%_ScreenCapture.mkv -vbr 3 -vf "scale=720:-2" -preset slow -crf 18 %datetimef%_ScreenCapture_low.mkv
	) ELSE (
		H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -f gdigrab -framerate %framer% -i desktop -f dshow -i audio="%micro%" %datetimef%_ScreenCapture.mp4
		H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -i %datetimef%_ScreenCapture.mp4 -vcodec libx264 -vbr 3 -vf "scale=720:-2" -preset slow -crf 18 %datetimef%_ScreenCapture_low.mp4
	)
) else (
	if %ver%==XP (
		H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -f gdigrab -framerate %framer% -i desktop %datetimef%_ScreenCapture.mkv
		H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -i %datetimef%_ScreenCapture.mkv -vbr 3 -vf "scale=720:-2" -preset slow -crf 18 %datetimef%_ScreenCapture_low.mkv
	) ELSE (
		H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -f gdigrab -framerate %framer% -i desktop %datetimef%_ScreenCapture.mp4
		H:\TEMP\Software\ffmpeg-4.0.2-win32-static\bin\ffmpeg.exe -i %datetimef%_ScreenCapture.mp4 -vcodec libx264 -vbr 3 -vf "scale=720:-2" -preset slow -crf 18 %datetimef%_ScreenCapture_low.mp4
	)
)


