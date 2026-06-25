// import { isValidPhoneNumber } from 'react-phone-number-input'
import { isValidPhoneNumber } from 'libphonenumber-js'

export const validatePhone = (value: string | null | undefined) => {
  if (!value) {
    return 'Phone number is required'
  }

  return /^\+[1-9]\d{1,14}$/.test(value) ? true : 'Enter a valid phone number'
}

export const validateEmail = (value: string | null | undefined) => {
  if (!value) {
    return 'Email is required'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(value) ? true : 'Enter a valid email address'
}

export const validatePercentage = (value: number | null | undefined) => {
  if (value == null) return true

  return value >= 0 && value <= 100 ? true : 'Percentage must be between 0 and 100'
}

export const validatePercentile = (value: number | null | undefined) => {
  if (value == null) return true

  return value >= 0 && value <= 100 ? true : 'Percentile must be between 0 and 100'
}

export const validatePositiveNumber = (value: number | null | undefined) => {
  if (value == null) return true

  return value >= 0 ? true : 'Value must be 0 or greater'
}

export const validateRank = (value: number | null | undefined) => {
  if (value == null) return true

  return value > 0 ? true : 'Rank must be greater than 0'
}

export const validateYear = (value: number | null | undefined) => {
  if (!value) {
    return 'Year is required'
  }

  const currentYear = new Date().getFullYear()

  return value >= 2000 && value <= currentYear + 5 ? true : 'Enter a valid year'
}
