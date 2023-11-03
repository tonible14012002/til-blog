import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";


export default function About () {
    return (
        <div>
            <Alert>
                <AlertTriangle size={16} className="!text-danger-700"/>
                <AlertDescription>
                    This page is under construct.
                </AlertDescription>
            </Alert>
        </div>
    )
}