import { render } from '@testing-library/react'
import { WModalMenuMobile } from '..';

describe('[Component] - Menu', () => {
    it('should be able render correctly', () => {
        const { container} = render(<ModalMenuMobile />);

        expect(container).toBeDefined()
    });
});
