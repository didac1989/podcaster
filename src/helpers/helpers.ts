export const oneDayTimeInMiliseconds = 24 * 60 * 60 * 1000;

export const setExpireTime = (miliseconds: number) => {
  const nowTime = new Date().getTime();
  return nowTime + miliseconds;
};

export const getExpireTime = (expirationInMilisecons: number) => {
  const nowTime = new Date().getTime();
  return nowTime + expirationInMilisecons;
};

export const getFormattedDate = (date: number) =>
  new Date(date).toLocaleDateString('es-ES');

export const getFormattedDuration = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`;
};
