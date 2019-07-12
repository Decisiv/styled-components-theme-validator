# Styled-Components Theme Validator

[![CircleCI master build](https://img.shields.io/circleci/project/github/Decisiv/styled-components-theme-validator/master.svg)](https://circleci.com/gh/Decisiv/styled-components-theme-validator)
[![npm version](https://img.shields.io/npm/v/styled-components-theme-validator.svg)](https://www.npmjs.com/package/styled-components-theme-validator)
[![npm downloads](https://img.shields.io/npm/dt/styled-components-theme-validator.svg)](https://www.npmjs.com/package/styled-components-theme-validator)

When developing libraries which make use of
[styled-components' theming capabilities](https://www.styled-components.com/docs/advanced#theming),
it can be useful to validate that the application's theme matches up with the
components' expectations. Unfortunately, styled-components doesn't give us any
good tools for this.

This package contains two tiny helper functions for validating the structure of
a theme passed to your component library, which report meaningful proptypes
errors if needed. Both of these helpers are built to only function in a
non-production environment.

## `buildThemePropTypes`

**`buildThemePropTypes`** is used to define a `PropTypes`-style object
specifying the theme structure expected by a component.

Note that the top-level `theme` key should not be included in the configuration
object.

```javascript
const THEME_PROPTYPES = buildThemePropTypes({
  colors: PropTypes.shape({
    black: PropTypes.string.isRequired,
  }).isRequired,
});
```

## `validateTheme`

**`validateTheme`** should be used within a component's CSS declaration to run
the prop-types validation. This must be done within the CSS declaration as it is
the only time the props are exposed in a way allowing for validation.

_IMPORTANT:_ `validateTheme` should be the first thing in the component's CSS
declaration. Otherwise the CSS may attempt to access theme values before
validating them, resulting in inaccurate error messaging.

To provide added clarity to the resulting error messages, pass in the
component's `displayName` as the first argument to `validateTheme`.

```javascript
const Card = styled.div`
  ${validateTheme('Card', THEME_PROPTYPES)}
  // your styles here...
`;
```

## Usage Example

```javascript
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  buildThemePropTypes,
  validateTheme,
} from 'styled-components-theme-validator';

const COMPONENT_NAME = 'Card';

const THEME_PROPTYPES = buildThemePropTypes({
  colors: PropTypes.shape({
    background: PropTypes.string.isRequired,
    chrome200: PropTypes.string.isRequired,
    shadow: PropTypes.string.isRequired,
  }).isRequired,
});

const Card = styled.div`
  ${validateTheme(COMPONENT_NAME, THEME_PROPTYPES)}
  background-color: ${props => props.theme.colors.background};
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.chrome200};
  box-shadow: 0 2px 2px 2px ${props => props.theme.colors.shadow};
  min-height: 50px;
`;

Card.displayName = COMPONENT_NAME;

export default Card;
```
