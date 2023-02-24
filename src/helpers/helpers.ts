export const oneDayTimeInMiliseconds = 24 * 60 * 60 * 1000;

export const setExpireTime = (miliseconds: number) => {
  const nowTime = new Date().getTime();
  return nowTime + miliseconds;
};

export const getExpireTime = (expirationInMilisecons: number) => {
  const nowTime = new Date().getTime();
  return nowTime + expirationInMilisecons;
};
