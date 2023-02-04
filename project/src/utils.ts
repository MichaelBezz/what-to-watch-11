import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const getRatingText = (rating: number) => {
  switch (true) {
    case rating >= 0 && rating < 3:
      return 'Bad';
    case rating >= 3 && rating < 5:
      return 'Normal';
    case rating >= 5 && rating < 8:
      return 'Good';
    case rating >= 8 && rating < 10:
      return 'Very good';
    case rating >= 10:
      return 'Awesome';
  }
};

export const formatRunTime = (minute: number) => {
  const runTime = dayjs.duration(minute, 'm');
  return minute > 59
    ? runTime.format('H[h] mm[m]')
    : runTime.format('mm[m]');
};

export const formatReviewDate = (date: string) =>
  dayjs(date).format('MMMM D, YYYY');

export const formatFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);
