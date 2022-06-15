import { render } from '@testing-library/react'
import { Menu } from '..';

describe('[Component] - Menu', () => {
    it('should be able render correctly', () => {
        const { container} = render(<Menu />);

        expect(container).toBeDefined()
    });
});
