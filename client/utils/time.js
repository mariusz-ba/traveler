export const parseNumberToTime = (number) => {
  let result = number;

  // Adjust range
  if(result < 0)
    result = 0;

  if(result > 24)
    result %= 24;

  const hours = parseInt(result);
  const minutes = Math.round((result - Math.floor(result)) * 100);

  let hours_string = hours < 10 ? `0${hours}` : `${hours}`;
  let minutes_string = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hours_string}:${minutes_string}`;
}