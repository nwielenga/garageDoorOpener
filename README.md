# garageDoorOpener
Based off of the code found at: https://www.instructables.com/id/Raspberry-Pi-Garage-Door-Opener/

3 door garage door opener, runs on Raspberry Pi.
Set up for NO relays based off of pins 7, 3, and 22, from doors 1-3, or left to right on the web interface.

INSTALLATION NOTES:
Install apache2 and php on your Pi.
Copy the repo to /var/www/html.
Remove /var/www/html/index.html or rename it to index.html.old
Compile relay.c, place the binary in cron to run @reboot, otherwise the pins aren't intialized and the webpage doesn't work.

SIDE NOTES:
Also, PLEASE consider the security implications of this device. The web interface requires no authentication. As it stands, this implementation is susceptible to AP bumping if you implement this using a wireless connection, or misuse if your network in insecure.
