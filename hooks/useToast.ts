import { useState } from "react";

export type ToastType = "success" | "error" | "warning" | "info";

function useToast() {
    const [showToast, setShowToast] = useState({
        open: false,
        type: "success" as ToastType,
        message: "",
    });

    const onCloseToast = () => {
        setShowToast((prev) => ({ ...prev, open: false }));
    };

    const onOpenToast = (message: string, type: ToastType = "success") => {
        setShowToast({ open: true, message, type });
    };

    return { showToast, onOpenToast, onCloseToast };
}

export default useToast;
