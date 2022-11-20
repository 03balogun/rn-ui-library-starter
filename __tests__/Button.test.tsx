import {render, screen} from '@testing-library/react-native';
import * as React from 'react';

import {Button} from '../src';

describe('<Button />', () => {
  const mockFn = jest.fn();
  const BUTTON_LABEL = 'Register';

  it('renders correctly', () => {
    const tree = render(
      <Button text={BUTTON_LABEL} onPress={mockFn} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correct text label', () => {
    render(<Button text={BUTTON_LABEL} onPress={mockFn} />);

    const textLabel = screen.getByText(BUTTON_LABEL);
    expect(textLabel.props.children).toBe(BUTTON_LABEL);
  });
});
