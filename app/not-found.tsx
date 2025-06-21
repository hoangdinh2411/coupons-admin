import { APP_ROUTE } from '@/constants/route';
import { redirect } from 'next/navigation';

const NotFound = () => {
  return redirect(APP_ROUTE.DASHBOARD);
};

export default NotFound;
