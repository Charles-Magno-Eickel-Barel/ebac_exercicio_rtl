import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';  // Verifique se o caminho está correto para o seu arquivo App

test('insere dois comentários com sucesso', () => {
  // Renderiza o componente principal (App)
  render(<App />);  // Certifique-se de que esta linha está correta

  // Seleciona os elementos de input e o botão usando o atributo data-testid
  const input = screen.getByTestId('comment-input');
  const submitButton = screen.getByTestId('submit-button');

  // Simula a inserção do primeiro comentário
  fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(submitButton);

  // Verifica se o primeiro comentário foi inserido
  expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

  // Simula a inserção do segundo comentário
  fireEvent.change(input, { target: { value: 'Segundo comentário' } });
  fireEvent.click(submitButton);

  // Verifica se o segundo comentário foi inserido
  expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
});
