
import useToast from './useToast'
import { redirect } from 'next/navigation'
import { APP_ROUTE } from '@/constants/route'
import AuthService from '@/services/auth.service'
import { RegisterRequestPayLoad } from '@/types/auth.type'
import useAppStore from '@/store/useAppStore'

function useAuth() {
    const { showToast, onOpenToast, onCloseToast } = useToast()
    const { toggleAppLoading } = useAppStore.getState();


    const handleLogin = async (payload: { email: string, password: string }) => {
        const response = await AuthService.login(payload)
        if (response.success) {
            onOpenToast('Login success', 'success')
            redirect(APP_ROUTE.DASHBOARD)
        }
    }
    const handleRegister = async (payload: RegisterRequestPayLoad) => {
        toggleAppLoading(true)
        const response = await AuthService.register(payload)
        if (response.success) {
            onOpenToast('Registration successful! Please check your email to verify your account.', 'success')
            return redirect(APP_ROUTE.VERIFY)
        }
        if (!response.success && response.status === 400) {
            onOpenToast(`${response.message}`, 'error')
            return
        }
        toggleAppLoading(false)
    }
    const handleLogout = async () => {
        return redirect(APP_ROUTE.SIGN_IN)
    }

    return {
        showToast,
        onCloseToast,
        handleRegister,
        handleLogout,
        handleLogin
    }
}

export default useAuth