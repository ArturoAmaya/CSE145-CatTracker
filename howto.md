# HowTo
Here is a quick end-to-end guide to replicate what we did, using the software we used at the time. Note that any software may change in the intervening time, so this represents more a snapshot than a definitive guide. This is a very high-level overview. Some but not all technical details are available on the [software](software.md) or hardware[hardware](hardware.md) pages.

-[ ] Wire everything up

Details for the wiring are available at [the connections section](hardware.md#connecting-everything). 

-[ ] Install all the libraries:

We've got:
* Adafruit Unified Sensor 1.1.9
* ArduinoJson 6.21.2
* Cayenne LPP 1.3.0
* DHT Sensor Library 1.4.4
* IBM LMIC framework 1.5.0+arduino-2
* TinyGPSPlus 1.0.3

-[ ] Write the communication code

Our code is [here](https://github.com/ArturoAmaya/CSE145-CatTracker/blob/main/final_project.ino). A small discussion of the code used with the gps is available [here](software.md#gps) and for helium [here](software.md#feather-to-helium)

-[ ] Get started with Helium

Instructions for making an account, organization, etc can be found [here](https://docs.helium.com/use-the-network/console/quickstart). They'll also cover how to connect a device.

-[ ] Make an integration with google sheets (and a google forms to feed it) and include the content decoder in the provided space
The decoder we used is right [here](software.md#helium-to-sheets-to-tableau)

-[ ] Download Tableau
-[ ] Sign in to Google Drive on Tableau, grab the sheet and drag and drop the latitude and longitude data into the right place.

A short discussion is [here](software.md#tableau-and-plotting)