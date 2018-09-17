import PropTypes from 'prop-types';

import { buildThemePropTypes, validateTheme } from '../index';

describe('buildThemePropTypes', () => {
  it('returns first arg in non prod env', () => {
    const testObj = { thisIs: 'a test' };
    expect(buildThemePropTypes(testObj)).toBe(testObj);
  });

  describe('in a production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    afterEach(() => {
      process.env.NODE_ENV = 'test';
    });

    it('returns second arg in prod env', () => {
      const testObj = { thisIs: 'a test' };
      expect(buildThemePropTypes({}, testObj)).toBe(testObj);
    });

    it('returns undefined with no second arg in prod env', () => {
      const testObj = { thisIs: 'a test' };
      expect(buildThemePropTypes(testObj)).toEqual(undefined);
    });
  });
});

describe('validateTheme', () => {
  it('does not log error if valid theme supplied', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const themePropTypes = {
      colors: PropTypes.shape({
        black: PropTypes.string.isRequired,
      }).isRequired,
    };
    const goodProps = {
      theme: {
        colors: {
          black: 'black',
        },
      },
    };
    validateTheme('MyComponent', themePropTypes, goodProps);

    expect(consoleSpy).not.toHaveBeenCalled();

    consoleSpy.mockReset();
    consoleSpy.mockRestore();
  });

  it('logs error if no theme is supplied', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const themePropTypes = {
      colors: PropTypes.shape({
        black: PropTypes.string.isRequired,
      }).isRequired,
    };
    const badProps = {};
    validateTheme('MyComponent', themePropTypes, badProps);

    expect(consoleSpy).toHaveBeenCalled();
    const errorMsg = consoleSpy.mock.calls[0][0];
    expect(errorMsg).toContain(
      '`theme` is marked as required in `MyComponent`',
    );

    consoleSpy.mockReset();
    consoleSpy.mockRestore();
  });

  it('logs error if theme fails proptypes check', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const themePropTypes = {
      colors: PropTypes.shape({
        black: PropTypes.string.isRequired,
      }).isRequired,
    };
    const badProps = {
      theme: {
        colors: {},
      },
    };
    validateTheme('MyComponent', themePropTypes, badProps);

    expect(consoleSpy).toHaveBeenCalled();
    const errorMsg = consoleSpy.mock.calls[0][0];
    expect(errorMsg).toContain(
      '`theme.colors.black` is marked as required in `MyComponent`',
    );

    consoleSpy.mockReset();
    consoleSpy.mockRestore();
  });
});
