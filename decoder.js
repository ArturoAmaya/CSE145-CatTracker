function Decoder(bytes, port) {
    var decoded = {};
    var firstBit;
    // ignore bytes 0 and 1
    // latitude is contained in bytes 2, 3, 4 as a 2s complement number
    decoded.latitude = ((bytes[2] << 16) | (bytes[3] << 8) | (bytes[4]));
    firstBit = getFirstBit(bytes[2]);
    if (firstBit){
      decoded.latitude = decoded.latitude - 2**24;
    }
    // after converting to an integer, divide by 10,000 for the float value
    decoded.latitude = decoded.latitude/10000;

    // repeat the process for latitude with bytes 5,6,7
    decoded.longitude = ((bytes[5] << 16) | (bytes[6] << 8) | (bytes[7]));
    firstBit = getFirstBit(bytes[5]);
    if (firstBit){
      decoded.longitude = decoded.longitude - 2**24;
    }
    decoded.longitude = decoded.longitude/10000; 

    // repeat with latitude with bytes 8,9,10 and divide by 100, not 10k
    decoded.altitude = ((bytes[8] << 16) | (bytes[9] << 8) | (bytes[10]));
    firstBit = getFirstBit(bytes[8]);
    if (firstBit){
      decoded.altitude = decoded.altitude - 2**24;
    }
    decoded.altitude = decoded.altitude/100;
    
    // put everything into Helium's payload object
    var decodedPayload = {
      "latitude": decoded.latitude,
      "longitude": decoded.longitude,
      "altitude": decoded.altitude
    };
  
    return Serialize(decodedPayload)
  }
  function getFirstBit(byte) {
    return (byte & 0b10000000) >> 7;
  }