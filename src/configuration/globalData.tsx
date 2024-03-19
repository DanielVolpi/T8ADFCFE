const mediaQueriesBreakpoints = {
  small: 600,
  large: 900,
};

const mediaQueries = {
  smallResolution: `@media screen and (max-width: ${mediaQueriesBreakpoints.small}px)`,
  mediumResolution: `@media screen and (min-width: ${
    mediaQueriesBreakpoints.small + 1
  }px) and (max-width: ${mediaQueriesBreakpoints.large}px)`,
  largeResolution: `@media screen and (min-width: ${
    mediaQueriesBreakpoints.large + 1
  }px)`,
};

export { mediaQueries };
