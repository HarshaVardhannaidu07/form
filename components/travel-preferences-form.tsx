"use client"

import type { FormData } from "./application-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormField } from "./form-field"
import { Briefcase } from "lucide-react"

interface TravelPreferencesFormProps {
  formData: FormData
  onChange: (field: keyof FormData, value: string) => void
  errors: Record<string, string>
}

export function TravelPreferencesForm({ formData, onChange, errors }: TravelPreferencesFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
          <Briefcase className="h-4 w-4" />
        </span>
        <h2 className="text-xl font-semibold">Travel Preferences</h2>
      </div>

      <FormField label="Departure Date" error={errors.departureDate}>
        <Input
          id="departureDate"
          type="date"
          value={formData.departureDate}
          onChange={(e) => onChange("departureDate", e.target.value)}
        />
      </FormField>

      <FormField label="Return Date" error={errors.returnDate}>
        <Input
          id="returnDate"
          type="date"
          value={formData.returnDate}
          onChange={(e) => onChange("returnDate", e.target.value)}
        />
      </FormField>

      <FormField label="Accommodation Preference" error={errors.accommodation}>
        <Select value={formData.accommodation} onValueChange={(value) => onChange("accommodation", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select accommodation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Space Hotel">Space Hotel</SelectItem>
            <SelectItem value="Martian Base">Martian Base</SelectItem>
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="Special Requests or Preferences" error={errors.specialRequests} optional>
        <Textarea
          id="specialRequests"
          value={formData.specialRequests}
          onChange={(e) => onChange("specialRequests", e.target.value)}
          placeholder="Enter any special requests or preferences"
          className="min-h-[100px]"
        />
      </FormField>
    </div>
  )
}
