
import useToast from './useToast'
import { redirect } from 'next/navigation'
import { APP_ROUTE } from '@/constants/route'

function useAuth() {
    const { showToast, onOpenToast, onCloseToast } = useToast()
    const handleLogin = async (payload: { email: string, password: string }) => {
        // try {
        // const response = await AuthService.login(payload)
        // if (response.success) {
        onOpenToast('Login success', 'success')
      return  redirect(APP_ROUTE.DASHBOARD)
        // }
        // } catch (error) {
        //     onOpenToast('Login error', 'error')
        // }
    }


    return {
        showToast,
        onCloseToast,
        handleLogin
    }
}

export default useAuth