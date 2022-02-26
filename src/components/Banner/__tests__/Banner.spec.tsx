import { render } from '@testing-library/react'
import { Banner } from '..';
describe('[Component] - Banner', () => {
  it('should be able render correctly', () => {
    const { container } = render(<Banner />);

    expect(container).toBeDefined()
  });
});
