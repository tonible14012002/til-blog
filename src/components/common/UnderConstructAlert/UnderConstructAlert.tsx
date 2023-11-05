import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export const UnderConstructAlert = () => {
    return (
        <Alert>
            <AlertTriangle size={16} className="!text-danger-700"/>
            <AlertDescription>
                This page is under construct.
            </AlertDescription>
        </Alert>
    )
}