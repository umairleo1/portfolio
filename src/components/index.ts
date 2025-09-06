// Layout Components (Critical - Load Immediately)
export { default as Header } from './layout/Header';
export { default as Footer } from './layout/Footer';

// Critical Section Components (Above-the-fold)
export { default as Hero } from './sections/Hero';

// Common Components
export { default as ErrorBoundary } from './common/ErrorBoundary';
export { default as LoadingSpinner } from './common/LoadingSpinner';
export { default as SectionLoader } from './common/SectionLoader';
export { default as AnalyticsProvider } from './common/AnalyticsProvider';

// UI Components
export { default as Section } from './ui/Section';
export { default as SectionHeader } from './ui/SectionHeader';
export { default as TrackedLink } from './ui/TrackedLink';
export { default as ScrollToBottom } from './ui/ScrollToBottom';
export { default as LogoScroll } from './ui/LogoScroll';
export { default as Card } from './ui/Card';
export { default as Badge } from './ui/Badge';
export { default as Button } from './ui/Button';

// Section Components (Lazy Loaded)
export { default as Expertise } from './sections/Expertise';
export { default as Education } from './sections/Education';
export { default as Work } from './sections/Work';
export { default as Experience } from './sections/Experience';
export { default as Contact } from './sections/Contact';

// Effect Components (Lazy Loaded)
export { default as FloatingElements } from './effects/FloatingElements';
export { default as CursorTrail } from './effects/CursorTrail';
