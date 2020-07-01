import React, { useState, useCallback } from 'react';
import { AddMarkerForm } from './AddMarkerForm';
import { Pin } from './Pin';
import { Map } from './Map';

const App = () => {
  const [pushPins, setPushPins] = useState<Pin[]>([]);

  const addMarker = useCallback(
    (latitude: number, longitude: number) => {
      setPushPins(
        pushPins.concat([
          {
            location: [latitude, longitude],
            option: { color: 'red' }
          }
        ])
      );
    },
    [pushPins]
  );

  return (
    <div>
      <AddMarkerForm addMarker={addMarker} />
      <Map pushPins={pushPins} />
    </div>
  );
};

export default App;
