import { AuthVerificationStep } from '../types'

export const getTitleDescription = (step: AuthVerificationStep) => {
  switch (step) {
    case AuthVerificationStep.Register:
      return {
        title: 'Register',
        description:
          'Create a Sibocil account effortlessly by providing essential information and contribute to recycling efforts.',
      }
    case AuthVerificationStep.Otp:
      return {
        title: 'Verification',
        description:
          'Enhance account security with a unique One-Time Password (OTP) sent via whatsapp or email during the login process.',
      }
    case AuthVerificationStep.Done:
      return {
        title: 'Wait a moment',
        description:
          'Welcome to Sibocil! Explore your recycling statistics on the user-friendly dashboard.',
      }
    default:
      return {
        title: 'Opps...',
        description:
          'Oops! Encounter an issue? The error page provides guidance on resolving errors for a seamless user experience',
      }
  }
}
