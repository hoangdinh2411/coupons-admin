'use client';
import React, { useEffect } from 'react';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';

export default function ToastProvider() {
  const { toasts } = useToasterStore();

  useEffect(() => {
    const visible = toasts.filter((t) => t.visible);
    if (visible.length > 1) {
      const oldest = visible[0];
      if (oldest?.id) {
        toast.dismiss(oldest?.id);
      }
    }
  }, [toasts]);
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 5000,
        removeDelay: 500,
      }}
    />
  );
}
