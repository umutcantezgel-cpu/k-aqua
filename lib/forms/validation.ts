export function validateRequired(value: any, message = 'Dieses Feld ist erforderlich'): string | null {
  return !value || (typeof value === 'string' && value.trim() === '') ? message : null;
}

export function validateEmail(email: string): string | null {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !re.test(email) ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein' : null;
}

export function validatePhone(phone: string): string | null {
  const re = /^[\d\s+\-()]+$/;
  return !re.test(phone) ? 'Bitte geben Sie eine gültige Telefonnummer ein' : null;
}

export function validateMinLength(value: string, minLength: number, message?: string): string | null {
  if (value.length < minLength) {
    return message || `Mindestens ${minLength} Zeichen erforderlich`;
  }
  return null;
}

export function validateMaxLength(value: string, maxLength: number, message?: string): string | null {
  if (value.length > maxLength) {
    return message || `Maximal ${maxLength} Zeichen erlaubt`;
  }
  return null;
}
