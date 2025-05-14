"use client"

import type { FormData } from "./application-form"
import { Input } from "@/components/ui/input"
import { FormField } from "./form-field"
import { User } from "lucide-react"

interface PersonalInfoFormProps {
  formData: FormData
  onChange: (field: keyof FormData, value: string) => void
  errors: Record<string, string>
}

export function PersonalInfoForm({ formData, onChange, errors }: PersonalInfoFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
          <User className="h-4 w-4" />
        </span>
        <h2 className="text-xl font-semibold">Personal Information</h2>
      </div>

      <FormField label="Full Name" error={errors.fullName}>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          placeholder="Enter your full name"
        />
      </FormField>

      <FormField label="Date of Birth" error={errors.dateOfBirth}>
        <Input
          id="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => onChange("dateOfBirth", e.target.value)}
        />
      </FormField>

      <FormField label="Nationality" error={errors.nationality}>
        <Input
          id="nationality"
          value={formData.nationality}
          onChange={(e) => onChange("nationality", e.target.value)}
          placeholder="Enter your nationality"
        />
      </FormField>

      <FormField label="Email" error={errors.email} description="Format: name@example.com">
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="Enter your email address"
        />
      </FormField>

      <FormField
        label="Phone"
        error={errors.phone}
        description="Format: +1 (123) 456-7890 or similar international format"
      >
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Enter your phone number with country code"
        />
      </FormField>
    </div>
  )
}
