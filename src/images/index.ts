// the images are photos from the game we have

const ball = new URL('./ball.jpg', import.meta.url);
const chair = new URL('./chair.jpg', import.meta.url);
const colmustard = new URL('./colmustard.jpg', import.meta.url);
const desk = new URL('./desk.jpg', import.meta.url);
const diningtable = new URL('./diningtable.jpg', import.meta.url);
const drorchid = new URL('./drorchid.jpg', import.meta.url);
const missscarlett = new URL('./missscarlett.jpg', import.meta.url);
const mrgreen = new URL('./mrgreen.jpg', import.meta.url);
const mrpotatohead = new URL('./mrpotatohead.jpg', import.meta.url);
const mrspeacock = new URL('./mrspeacock.jpg', import.meta.url);
const piano = new URL('./piano.jpg', import.meta.url);
const plant = new URL('./plant.jpg', import.meta.url);
const pooltable = new URL('./pooltable.jpg', import.meta.url);
const profplum = new URL('./profplum.jpg', import.meta.url);
const racecar = new URL('./racecar.jpg', import.meta.url);
const teddybear = new URL('./teddybear.jpg', import.meta.url);
const toychest = new URL('./toychest.jpg', import.meta.url);
const trex = new URL('./trex.jpg', import.meta.url);
const xylophone = new URL('./xylophone.jpg', import.meta.url);

const IMAGES: Record<string, URL> = {
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

export function getImage(str: string): URL | undefined {
  // strip non-A-Z and lowercase, and remove everything after parentheses
  // making e.g. 'Col. Mustard (yellow)' into 'colmustard'
  const simpleName = Array.from(str.toLowerCase().split('(')[0])
    .filter((c) => c >= 'a' && c <= 'z')
    .join('');

  return IMAGES[simpleName];
}
