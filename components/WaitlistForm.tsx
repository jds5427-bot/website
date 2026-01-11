'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  company_name: z.string().optional(),
  industry: z.string().optional(),
  company_size: z.string().optional(),
  referral_source: z.string().optional(),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to join waitlist')
      }

      toast.success('Success!', {
        description: 'Please check your email to verify your address.',
      })
      
      reset()
    } catch (error) {
      toast.error('Error', {
        description: error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@company.com"
          {...register('email')}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company_name">Company Name</Label>
        <Input
          id="company_name"
          type="text"
          placeholder="Your Company"
          {...register('company_name')}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select
          onValueChange={(value) => setValue('industry', value)}
          disabled={isSubmitting}
        >
          <SelectTrigger id="industry">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mep-engineering">MEP Engineering</SelectItem>
            <SelectItem value="architecture">Architecture</SelectItem>
            <SelectItem value="consulting">Consulting</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company_size">Company Size</Label>
        <Select
          onValueChange={(value) => setValue('company_size', value)}
          disabled={isSubmitting}
        >
          <SelectTrigger id="company_size">
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10 employees</SelectItem>
            <SelectItem value="11-50">11-50 employees</SelectItem>
            <SelectItem value="51-200">51-200 employees</SelectItem>
            <SelectItem value="201-500">201-500 employees</SelectItem>
            <SelectItem value="500+">500+ employees</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="referral_source">How did you hear about us?</Label>
        <Input
          id="referral_source"
          type="text"
          placeholder="Optional"
          {...register('referral_source')}
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
      </Button>
    </form>
  )
}
