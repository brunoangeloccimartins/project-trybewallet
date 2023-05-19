import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';
import App from '../App';

describe('Testes componente <Login />', () => {
  test('Login está sendo renderizado na página', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/'] });
    const emailInput = screen.getByPlaceholderText(/email@email.com/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    const loginBtn = screen.getByText(/Entrar/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toHaveAttribute('disabled');
  });
  test('O email é adicionado ao estado global', async () => {
    const { store } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText(/email@email.com/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    const loginBtn = screen.getByText(/Entrar/i);
    const emailText = 'alguem@email.com';

    userEvent.type(emailInput, emailText);
    userEvent.type(passwordInput, '123456');

    await waitFor(() => {
      expect(emailInput).toHaveValue(emailText);
      expect(passwordInput).toHaveValue('123456');
    });

    userEvent.click(loginBtn);

    await waitFor(() => {
      const actualStore = store.getState();
      const { user: { email } } = actualStore;
      expect(email).toBe(emailText);
    });
  });
});
