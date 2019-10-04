# garageDoorOpener
3 door garage door opener, runs on Raspberry Pi.
Set up for NC relays based off of pins 7, 3, and 22, from doors 1-3, or left to right on the web interface.

NOTE:
Compile relay.c, place it in cron to run @reboot, otherwise the pins aren't intialized and the webpage doesn't work.
