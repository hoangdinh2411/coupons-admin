'use client'

import { APP_ROUTE } from '@/constants/route'
import UseAppStore from '@/store/useAppStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Unauthorized() {
  const signOut = UseAppStore((state) => state.signOut)
  const router = useRouter()
  useEffect(() => {
    signOut().then(() => {
      toast.success("Logout")
      router.push(APP_ROUTE.SIGN_IN)
    })
  }, [])
  return (
    <div className="my-20 flex w-full max-w-[--max-width] flex-col items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">401 - Unauthorized</h1>
      <p>Please sign in to access this page.</p>
    </div>
  )
}
