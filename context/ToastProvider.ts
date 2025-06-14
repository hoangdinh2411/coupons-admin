import  { createContext, useContext, useState, ReactNode } from "react";
import CustomToast from "@/components/Toast";

export type ToastType = "success" | "error" | "warning" | "info";

interface ToastContextType {
    onOpenToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [showToast, setShowToast] = useState<{
        open: boolean;
        type: ToastType;
        message: string;
    }>({
        open: false,
        type: "success",
        message: "",
    });

    const onOpenToast = (message: string, type: ToastType = "success") => {
        setShowToast({ open: true, message, type });
    };

    const onCloseToast = () => {
        setShowToast((prev) => ({ ...prev, open: false }));
    };

    return (
        <ToastContext.Provider value= {{ onOpenToast }
}>
    { children }
    < CustomToast
show = { showToast.open }
message = { showToast.message }
type = { showToast.type }
onClose = { onCloseToast }
    />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used inside ToastProvider");
    }
    return context;
};