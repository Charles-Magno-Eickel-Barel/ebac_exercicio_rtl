import React, { useState } from 'react';

function App() {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment('');  // Limpa o campo após a inserção
    }
  };

  return (
    <div>
      <input
        data-testid="comment-input"  // Adiciona data-testid ao input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escreva um comentário"
      />
      <button
        data-testid="submit-button"  // Adiciona data-testid ao botão
        onClick={handleAddComment}
      >
        Enviar
      </button>

      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
