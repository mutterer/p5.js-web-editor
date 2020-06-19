import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from '../theme';
import SortArrowUp from '../images/sort-arrow-up.svg';
import SortArrowDown from '../images/sort-arrow-down.svg';
import Github from '../images/github.svg';
import Google from '../images/google.svg';
import Plus from '../images/plus-icon.svg';
import Close from '../images/close.svg';
import Exit from '../images/exit.svg';
import DropdownArrow from '../images/down-filled-triangle.svg';

// HOC that adds the right web accessibility props
// https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html

// could also give these a default size, color, etc. based on the theme
// Need to add size to these - like small icon, medium icon, large icon. etc.
function withLabel(SvgComponent) {
  const Icon = (props) => {
    const StyledIcon = styled(SvgComponent)`
      &&& {
        color: ${prop('Icon.default')};
        & g, & path, & polygon {
          opacity: 1;
          fill: ${prop('Icon.default')};
        }
        &:hover {
          color: ${prop('Icon.hover')};
          & g, & path, & polygon {
            opacity: 1;
            fill: ${prop('Icon.hover')};
          }
        }
      }
    `;

    const { 'aria-label': ariaLabel } = props;
    if (ariaLabel) {
      return (<StyledIcon
        {...props}
        aria-label={ariaLabel}
        role="img"
        focusable="false"
      />);
    }
    return (<StyledIcon
      {...props}
      aria-hidden
      focusable="false"
    />);
  };

  Icon.propTypes = {
    'aria-label': PropTypes.string
  };

  Icon.defaultProps = {
    'aria-label': null
  };

  return Icon;
}

export const SortArrowUpIcon = withLabel(SortArrowUp);
export const SortArrowDownIcon = withLabel(SortArrowDown);
export const GithubIcon = withLabel(Github);
export const GoogleIcon = withLabel(Google);
export const PlusIcon = withLabel(Plus);
export const CloseIcon = withLabel(Close);
export const ExitIcon = withLabel(Exit);
export const DropdownArrowIcon = withLabel(DropdownArrow);
