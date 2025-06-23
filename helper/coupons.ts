import dayjs from 'dayjs';

const couponStatus = [
  { status: 0, color: 'bg-danger', label: 'Not yet active' },
  { status: 1, color: 'bg-success', label: 'Ongoing' },
  { status: 2, color: 'bg-dark', label: 'Expired' },
];

const checkStatus = (start: string, end: string) => {
  if (dayjs().isAfter(end)) {
    return 2;
  }
  if (dayjs().isAfter(start) && dayjs().isBefore(end)) {
    return 1;
  }
  return 0;
};

export const getStatus = (start: string, end: string) => {
  const number = checkStatus(start, end);
  console.log(couponStatus.find((s) => s.status === number));
  return couponStatus.find((s) => s.status === number);
};
