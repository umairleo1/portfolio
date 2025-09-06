import React from 'react';
import { useScrollDepthTracking, useTimeTracking } from '@/hooks/useAnalytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  // Initialize global engagement tracking
  useScrollDepthTracking();
  useTimeTracking();

  return <>{children}</>;
};

export default AnalyticsProvider;
