import { render } from '@testing-library/react'
import { AboutMe } from '..';
describe('[Component] - About Me', () => {
  it('should be able render correctly', () => {
    const { container } = render(<AboutMe />);

    expect(container).toBeDefined()
  });
});
