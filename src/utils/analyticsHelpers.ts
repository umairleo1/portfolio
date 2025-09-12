import { env } from '@/config/env';

export const shouldInitializeAnalytics = (): boolean => {
  if (env.isDevelopment() || env.isTest()) {
    return false;
  }

  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const port = window.location.port;

    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      port !== ''
    ) {
      return false;
    }
  }

  return true;
};
