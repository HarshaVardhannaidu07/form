import type { ReactNode } from "react"
import { Label } from "@/components/ui/label"

interface FormFieldProps {
  label: string
  children: ReactNode
  error?: string
  description?: string
  optional?: boolean
}

export function FormField({ label, children, error, description, optional }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Label htmlFor={label.toLowerCase().replace(/\s+/g, "-")}>
          {label}
          {optional && <span className="text-muted-foreground ml-1 text-sm">(Optional)</span>}
        </Label>
      </div>

      {description && <p className="text-sm text-muted-foreground">{description}</p>}

      {children}

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  )
}
