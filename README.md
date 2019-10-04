# garageDoorOpener
Based off of the code found at: https://www.instructables.com/id/Raspberry-Pi-Garage-Door-Opener/

3 door garage door opener, runs on Raspberry Pi.
Set up for NO relays based off of pins 7, 3, and 22, from doors 1-3, or left to right on the web interface.

NOTE:
Compile relay.c, place it in cron to run @reboot, otherwise the pins aren't intialized and the webpage doesn't work.

Also, PLEASE consider the security implications of this device. The web interface requires no authentication. As it stands, this implementation is susceptible to AP bumping if you implement this using a wireless connection, or misuse if your network in insecure.
