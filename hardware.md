# Hardware
We used three main hardware components: an [AdaFruit Feather M0 with a LoRa chip](https://www.adafruit.com/product/3178?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0ylBGdYXEcQm-ULQQxGy7eUbJM02SukKQ5waotLcpxdd_qDQGqUE-QaArKKEALw_wcB), a small [GPS module](https://www.amazon.com/Geekstory-Navigation-Raspberry-Aircraft-Controller/dp/B078Y4XZN9) and a 3.7V battery.

## LoRa Feather
![Image of the adafruit m0 lora](https://cdn-shop.adafruit.com/970x728/3178-12.jpg)
The main brain of the project. It uses a SAMD21 processor with 3.3V output logic and power. It has a micro-USB for talking to the computer, as well as a separate set of Hardware Serial pins for talking to the GPS module. This is particularly useful for debugging - some older microprocessors like Arduino Uno only have one, meaning you can't read GPS messages *and* write their contents to the Serial Monitor at the same time. It also has a built-in battery charger so we can charge our battery when we're not using the GPS. 

Most importantly, it has a LoRa chip. It's missing an antenna, but we used a simple [wire antenna](https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module/antenna-options).This enabled us to talk to LoRa hotspots that use the 915 MHz frequency. 

As a downside though, this device doesn't have EEPROM and writing to the flash memory is a little wonky, so if for whatever reason our GPS loses its connection to a hotspot we don't store the GPS values recorded until it reconnects. An early prototype used an SD card as an alternative, but it is so power-hungry it basically halved our battery life. 

## GPS module
![Image of the Beitian BN-180 GPS module](https://m.media-amazon.com/images/I/618dldlOaiL._AC_SY355_.jpg)
We used a Beitian BN-180 GPS module. It's originally for flight controllers - it's small, decently power efficient, and decently accurate. It takes 3.3V, which is great news for our feather. It has two blinking lights - blue for data transmission and red for when it has a lock on GPS signals. Whenever it powers on for the first time in a while, the red light takes a couple minutes to start blinking, which isn't ideal.

## Battery

A standard 3.7 1100 mAh LiPo battery. The leads were switched relative to what the feather wanted, but we just swapped them and everything works fine.

## Connecting Everything
[//]: <> (TODO: Hookup diagram)