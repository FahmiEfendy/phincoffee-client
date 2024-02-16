import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Category from '@pages/Category';
import Language from '@containers/Language';
import { render as RtlRender } from '@testing-library/react';
import store from '../../../src/configureStore';

const render = (component) =>
  RtlRender(
    <Provider store={store}>
      <Language>
        <MemoryRouter>{component}</MemoryRouter>
      </Language>
    </Provider>
  );

describe('Categories', () => {
  test('Category Container Page is Rendered', () => {
    const { getByTestId } = render(<Category />);

    const categoryContainer = getByTestId('category-container');
    expect(categoryContainer).toBeInTheDocument();
    expect(categoryContainer).toHaveClass('container');
  });
});
