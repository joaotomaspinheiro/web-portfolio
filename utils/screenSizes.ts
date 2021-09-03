export const DESKTOP = 1298;
export const TABLET = 960;
export const MOBILE = 504;

export const isDesktop = (viewportWidth: number) => viewportWidth >= DESKTOP;
export const isTablet = (viewportWidth: number) => viewportWidth < DESKTOP && viewportWidth > MOBILE;
export const isMobile = (viewportWidth: number) => viewportWidth <= MOBILE;