// the images are photos from the game we have

import ball from './ball.jpg';
import chair from './chair.jpg';
import colmustard from './colmustard.jpg';
import desk from './desk.jpg';
import diningtable from './diningtable.jpg';
import drorchid from './drorchid.jpg';
import missscarlett from './missscarlett.jpg';
import mrgreen from './mrgreen.jpg';
import mrpotatohead from './mrpotatohead.jpg';
import mrspeacock from './mrspeacock.jpg';
import piano from './piano.jpg';
import plant from './plant.jpg';
import pooltable from './pooltable.jpg';
import profplum from './profplum.jpg';
import racecar from './racecar.jpg';
import teddybear from './teddybear.jpg';
import toychest from './toychest.jpg';
import trex from './trex.jpg';
import xylophone from './xylophone.jpg';

const IMAGES: Record<string, string> = {
  ball: ball,
  chair: chair,
  colmustard: colmustard,
  desk: desk,
  diningtable: diningtable,
  drorchid: drorchid,
  missscarlett: missscarlett,
  mrgreen: mrgreen,
  mrpotatohead: mrpotatohead,
  mrspeacock: mrspeacock,
  piano: piano,
  plant: plant,
  pooltable: pooltable,
  profplum: profplum,
  racecar: racecar,
  teddybear: teddybear,
  toychest: toychest,
  trex: trex,
  xylophone: xylophone,
};

export function getImage(str: string): string | undefined {
  // strip non-A-Z and lowercase, and remove everything after parentheses
  // making e.g. 'Col. Mustard (yellow)' into 'colmustard'
  const simpleName = Array.from(str.toLowerCase().split('(')[0]).filter(c => c >= 'a' && c <= 'z').join('');

  return IMAGES[simpleName];
}
