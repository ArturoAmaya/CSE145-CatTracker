# Software
There are a few components to the software side of this project. There is the code to interface with the GPS, the code to talk to Helium, the code to talk to Tableau and the use of Tableau to chart the data. We wrote small snippets of code to adjust existing functionality to our needs; we've incldued the libraries needed just in case by the time anyne else tries this, something new has changed. For example, the IBM LMIC Framework library should be version 1.5.0+arduino-2, as opposed to the 1.5.1 version (the new version drastically changes code used to select the transmission band).

## GPS
For reading the GPS data we use an existing library for Arduino-like devices called TinyGPS Plus Plus. It shows up in the library manager in the Arduino IDE as TinyGPSPlus version 1.0.3. To use it, we include the .h file:

```c
#include <TinyGPS++.h>
```

We then define the Baud rate, i.e. the speed of transmission. The GPS we have works at 9600. Also declare a gps object

```c
static const uint32_t GPSBaud = 9600;
TinyGPSPlus gps;
```

In the setup section of the arduino code, we begin Serial 1 at the GPS's baud rate:

```c
Serial1.begin(GPSBaud);
```

Feeding the TinyGPSPlus object with new data is simple:

```c
if (Serial1.available()){
    gps.encode(Serial1.read());
}
```

From there, we can query the TinyGPSPlus object for the decoded data:

```c
float lat = gps.location.lat(); // get latitude
float lng = gps.location.lng(); // get longitude
float alt = gps.altitude.meters(); // get altitude
```

There are other useful values that can be extracted, such as HDOP (Horizontal Diultion of Precision, a proxy for the accuracy of the data), the number of satelites involved, the date and time in UTC format, and the heading, but we kept it simple and only got the core data - latitutde, longitude and altitude.

## Feather to Helium

## Helium to Sheets to Tableau

## Tableau and Plotting