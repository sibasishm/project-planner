import React, { useState } from 'react';

import { StyledSpan, StyledLabel } from './styled/Checkbox';

export const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <StyledSpan
        role="checkbox"
        aria-checked={checked}
        aria-labelledby={label}
        tabIndex="0"
        onClick={() => setChecked(!checked)}
      ></StyledSpan>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </>
  );
};
