import React from 'react';
import { useAnalytics } from '@/hooks';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string | undefined;
  linkName: string;
  section: string;
  category: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const TrackedLink: React.FC<TrackedLinkProps> = ({
  href,
  children,
  className,
  linkName,
  section,
  category,
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
}) => {
  const { trackExternalLink } = useAnalytics();

  const handleClick = () => {
    trackExternalLink(href, linkName, section, category);
    onClick?.();
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className || ''}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default TrackedLink;
