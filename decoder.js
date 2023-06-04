function Decoder(bytes, port) {
    var decoded = {};
    var firstBit;
    decoded.latitude = ((bytes[2] << 16) | (bytes[3] << 8) | (bytes[4]));
    firstBit = getFirstBit(bytes[2]);
    if (firstBit){
      decoded.latitude = decoded.latitude - 2**24;
    }
    decoded.latitude = decoded.latitude/10000;
    decoded.longitude = ((bytes[5] << 16) | (bytes[6] << 8) | (bytes[7]));
    firstBit = getFirstBit(bytes[5]);
    if (firstBit){
      decoded.longitude = decoded.longitude - 2**24;
    }
    decoded.longitude = decoded.longitude/10000; 
    decoded.altitude = ((bytes[8] << 16) | (bytes[9] << 8) | (bytes[10]));
    firstBit = getFirstBit(bytes[8]);
    if (firstBit){
      decoded.altitude = decoded.altitude - 2**24;
    }
    decoded.altitude = decoded.altitude/100;
    // TODO: Transform bytes to decoded payload below
    var decodedPayload = {
      "latitude": decoded.latitude,
      "longitude": decoded.longitude,
      "altitude": decoded.altitude
    };
    // END TODO
  
    return Serialize(decodedPayload)
  }
  function getFirstBit(byte) {
    return (byte & 0b10000000) >> 7;
  }
  function removeFirstBit(byte) {
    return byte & 0b01111111;
  }