import { render } from '@testing-library/react'
import { Skills } from '../Skills'

describe('[Component] - Skills', () => {
    it('should be able render correctly', () => {
        const { container} = render(<Skills />);

        expect(container).toBeDefined
    });
});
