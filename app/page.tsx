"use client";

import { useRouter } from "next/navigation";
import { APP_ROUTE } from "@/constants/route";

const Page = () => {
  const router = useRouter();

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      router.replace(APP_ROUTE.DASHBOARD);
    } else {
      router.replace(APP_ROUTE.SIGN_IN);
    }

  return null;
};

export default Page;
