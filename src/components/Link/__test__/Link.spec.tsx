import { render } from '@testing-library/react'
import { Link } from '..';

describe('[Component] - Link', () => {
    it('should be able render correctly', () => {
        const { container} = render(<Link />);

        expect(container).toBeDefined()
    });
});
