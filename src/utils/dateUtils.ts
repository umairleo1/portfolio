export const getCurrentISODate = (): string => {
  return new Date().toISOString();
};

export const getCurrentDateOnly = (): string => {
  return new Date().toISOString().split('T')[0] as string;
};

export const getOpenGraphDate = (): string => {
  return new Date().toISOString();
};

export const getStructuredDataDate = (): string => {
  return new Date().toISOString();
};

export const getBuildTimeDate = (): string => {
  return process.env.REACT_APP_BUILD_TIME ?? new Date().toISOString();
};

export const getSitemapDate = (): string => {
  return getCurrentDateOnly();
};

export const getPortfolioLastModified = (): string => {
  return getBuildTimeDate();
};
