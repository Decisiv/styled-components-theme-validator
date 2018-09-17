import compose from 'lodash.compose';
import curry from 'lodash.curry';
import { checkPropTypes, shape } from 'prop-types';

function removeFromProd(nonProdArg, prodArg) {
  if (process.env.NODE_ENV !== 'production') {
    return nonProdArg;
  }
  return prodArg;
}

/**
 * Creates the theme proptypes object in a non-prod build, returns undefined in prod.
 * @param {Object} propTypes An object definining the expected propTypes within the theme.
 */
export const buildThemePropTypes = compose(removeFromProd);

/**
 * Performs prop-type validations against the theme actually being used
 * by a styled component.
 *
 * @param {String} componentName  The component's displayName. Must be passed
 *                                in as `this` will be `undefined`.
 * @param {Object} themePropTypes Defines the expected propTypes to be found
 *                                in the theme.
 * @param {Object} props          The component's props.
 */
export const validateTheme = removeFromProd(
  curry((componentName, themePropTypes, props) => {
    checkPropTypes(
      { theme: shape(themePropTypes).isRequired },
      props,
      'theme',
      componentName,
    );
  }),
  /* istanbul ignore next */ () => {},
);
