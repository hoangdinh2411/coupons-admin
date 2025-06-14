import { APP_ROUTE } from "@/constants/route";
import { getCookie } from "@/helper/cookie.storage";
import useAppStore from "@/store/useAppStore"
import { redirect } from "next/navigation";
import { useState } from "react"

function useApp() {
    const { isLoginSession, toggleAppLoading, switchLoginSession } = useAppStore.getState();

    const [showToast, setShowToast] = useState<boolean>(false)

    const checkedLoginSession = () => {
        const token = getCookie("token")
        return !token ? redirect(APP_ROUTE.SIGN_IN) : redirect(APP_ROUTE.DASHBOARD)
    }

    return {
        showToast,
        checkedLoginSession
    }
}

export default useApp