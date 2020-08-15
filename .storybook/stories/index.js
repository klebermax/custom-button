import React from 'react';

import CustomButton from '../../src/index';
import { storiesOf } from '@storybook/react';

storiesOf('Custom button', module).addWithJSX('simple', () => (
  <CustomButton></CustomButton>
));
