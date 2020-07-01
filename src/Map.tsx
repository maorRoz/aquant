import React from 'react';
// @ts-expect-error
import { ReactBingmaps } from 'react-bingmaps';
import { Pin } from './Pin';

export type MapProps = {
  pushPins: Pin[];
};

export const Map = ({ pushPins }: MapProps) => (
  <ReactBingmaps
    bingmapKey='Aq1y7_VVtmr_2GiYdgS4uwFH6qwigTxk2y0fv43_bGpqG-nRkJq4Us6KOebmRmmS'
    pushPins={pushPins}
    regularPolygons={[
      {
        rings: pushPins.map((pin) => pin.location),
        points: pushPins.length,
        option: { fillColor: 'green', strokeThickness: 2 }
      }
    ]}
  />
);
