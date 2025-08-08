import { CouponType } from '@/types/enum';
import dayjs from 'dayjs';

export const couponStatus = [
  { status: 0, color: 'bg-danger', label: 'Not yet active' },
  { status: 1, color: 'bg-success', label: 'Ongoing' },
  { status: 2, color: 'bg-dark', label: 'Expired' },
];

const checkStatus = (start: string, end: string) => {
  if (!end && dayjs().isAfter(start)) {
    return 1;
  }
  if (end && dayjs().isAfter(end)) {
    return 2;
  }
  if (dayjs().isAfter(start) && dayjs().isBefore(end)) {
    return 1;
  }
  return 0;
};

export const getStatus = (start: string, end: string) => {
  const number = checkStatus(start, end);
  return couponStatus.find((s) => s.status === number);
};

export const getBackgroundForType = (type: CouponType) => {
  switch (type) {
    case CouponType.CODE:
      return 'bg-secondary';
    case CouponType.ONLINE_AND_IN_STORE:
      return 'bg-success';
    case CouponType.SALE:
      return 'bg-info';
    default:
      'bg-primary';
  }
};
