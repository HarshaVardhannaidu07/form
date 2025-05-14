"use client"

import type { FormData } from "./application-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormField } from "./form-field"
import { Heart } from "lucide-react"

interface HealthSafetyFormProps {
  formData: FormData
  onChange: (field: keyof FormData, value: string) => void
  errors: Record<string, string>
}

export function HealthSafetyForm({ formData, onChange, errors }: HealthSafetyFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
          <Heart className="h-4 w-4" />
        </span>
        <h2 className="text-xl font-semibold">Health and Safety</h2>
      </div>

      <FormField
        label="Health Declaration"
        description="I confirm that I am in good health and fit for space travel"
        error={errors.healthDeclaration}
      >
        <RadioGroup
          value={formData.healthDeclaration}
          onValueChange={(value) => onChange("healthDeclaration", value)}
          className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 mt-2"
        >
          <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted cursor-pointer">
            <RadioGroupItem value="yes" id="health-yes" />
            <Label htmlFor="health-yes" className="cursor-pointer">
              Yes, I confirm
            </Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted cursor-pointer">
            <RadioGroupItem value="no" id="health-no" />
            <Label htmlFor="health-no" className="cursor-pointer">
              No, I have health concerns
            </Label>
          </div>
        </RadioGroup>
      </FormField>

      <div className="space-y-4">
        <h3 className="font-medium">Emergency Contact Information</h3>

        <FormField label="Emergency Contact Name" error={errors.emergencyContactName}>
          <Input
            id="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={(e) => onChange("emergencyContactName", e.target.value)}
            placeholder="Enter emergency contact name"
          />
        </FormField>

        <FormField
          label="Emergency Contact Phone"
          error={errors.emergencyContactPhone}
          description="Format: +1 (123) 456-7890 or similar international format"
        >
          <Input
            id="emergencyContactPhone"
            value={formData.emergencyContactPhone}
            onChange={(e) => onChange("emergencyContactPhone", e.target.value)}
            placeholder="Enter emergency contact phone with country code"
          />
        </FormField>
      </div>

      <FormField
        label="Medical Conditions"
        description="Please list any medical conditions we should be aware of"
        error={errors.medicalConditions}
        optional
      >
        <Textarea
          id="medicalConditions"
          value={formData.medicalConditions}
          onChange={(e) => onChange("medicalConditions", e.target.value)}
          placeholder="Enter any medical conditions"
          className="min-h-[100px]"
        />
      </FormField>
    </div>
  )
}
