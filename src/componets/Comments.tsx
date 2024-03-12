import React, { useState } from 'react';
import '../Comentarios.css'
const Comments: React.FC = () => {
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [commentsList, setCommentsList] = useState<Array<{ name: string; email:string; comment: string; rating: number }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Agregamos el comentario a la lista
    const newComment = { name, email:correo, comment, rating };
    setCommentsList([newComment, ...commentsList]);

    // Limpiamos los campos
    setName('');
    setComment('');
    setCorreo('')
    setRating(0);
  };

  return (
    <div className="comments">
      <h2>Dejanos un Comentario</h2>
      <div className="comment-list">
        {commentsList.map((c, index) => (
          <div key={index} className="comment-container">
            <p>
              <strong className='sub'>{c.email}</strong>
              {c.name} - {c.comment}
            </p>
            <div className="container-start">

              {[5, 4, 3, 2, 1].map((star) => (
                <div
                  key={star}
                  className={`star ${star <= c.rating ? 'active' : ''}`}
                ><i className="fa fa-star"></i></div>
              ))}


            </div>
          </div>
        ))}
      </div>
      <div className="comment-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />

          <label htmlFor="comment">Comentario:</label>
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>

          <div className="container-star">


            <label htmlFor="rating">Estrellas:</label>
            <div className="valoracion">
              {[5, 4, 3, 2, 1].map((star) => (
                <div
                  key={star}
                  className={`star ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                ><i className="fas fa-star"></i></div>
              ))}
            </div>
          </div>
          <button type="submit">Enviar Comentario</button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
