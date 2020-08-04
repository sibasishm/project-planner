import React, { useState } from 'react';

import { StyledSpan, StyledLabel } from './styled/Checkbox';

export const Checkbox = ({ label, isChecked }) => {
  const [checked, setChecked] = useState(isChecked || false);
  return (
    <>
      <StyledSpan
        role="checkbox"
        aria-checked={checked}
        aria-labelledby={label}
        tabIndex="0"
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></StyledSpan>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </>
  );
};
