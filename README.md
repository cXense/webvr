
# WebVR example
 
This example illustrates how date from the Cxense APIs can be visualized in a Virtual Reality enviroment.

The example accepts voice commands. You can try:
 - "Show page views"
 - "Enhance peaks"
 - "Hide page views"


##### The main program 

The main code is written in JavaScript and run in the nodejs environment.
You need nodejs v6.0.0 or later to run this example.

To install the dependencies
~~~~
npm install
~~~~

You can then run the program like this
~~~~
node server.js
~~~~


#### Running at startup

You can find a systemd startup script and an nginx config file in the "scripts" folder.
