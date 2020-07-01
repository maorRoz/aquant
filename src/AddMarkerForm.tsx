import React, { useState, useCallback, useMemo } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export type AddMarkerFormProps = {
  addMarker: (latitude: number, longitude: number) => void;
};

export const AddMarkerForm = ({ addMarker }: AddMarkerFormProps) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleClick = useCallback(() => {
    addMarker(Number(latitude), Number(longitude));
    setLatitude('');
    setLongitude('');
  }, [addMarker, latitude, longitude]);

  const isCoordsInvalid = useMemo(
    () =>
      !latitude ||
      !longitude ||
      isNaN(Number(latitude)) ||
      isNaN(Number(longitude)),
    [latitude, longitude]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
      <Input
        style={{ marginTop: '10px' }}
        placeholder='Enter Latitude'
        value={latitude || ''}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <Input
        style={{ marginTop: '10px' }}
        placeholder='Enter Longitude'
        value={longitude || ''}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <Button
        style={{ marginTop: '10px' }}
        variant='contained'
        color='primary'
        onClick={handleClick}
        disabled={isCoordsInvalid}
      >
        Submit Coords
      </Button>
    </div>
  );
};
