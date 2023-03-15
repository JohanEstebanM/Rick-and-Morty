export const getRandomNumber = (min, max) => {
  const amplitude = max - min;
  const ramdonAmplitude = Math.round(Math.random() * amplitude);
  return min + ramdonAmplitude;
};
