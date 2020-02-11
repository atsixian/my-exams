import getSeason from './getSeason';
export const matchSem = semester => {
    const curDate = new Date();
    const regex = new RegExp(`${getSeason(curDate)} ${curDate.getFullYear()}`);
    return semester.search(regex) === 0;
  };
