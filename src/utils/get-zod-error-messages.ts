import { ZodFormattedError } from 'zod';

export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[] {
  return Object.values(error  as unknown as Record<string, ZodFormattedError<T> | string[]>)
    .map(field => {
      if (Array.isArray(field)) return field;
      return field?._errors || [];
    })
    .flat()
    .filter(Boolean);
}