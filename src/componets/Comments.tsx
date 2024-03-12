import React, { useEffect, useState } from 'react';
// Importa el módulo de Firebase desde el archivo TypeScript
import {  collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';

// Asegúrate de que la ruta sea correcta
import '../Comentarios.css';
import { db } from '../config/firebaseConfig';

interface Comment {
  name: string;
  correo: string;
  comment: string;
  rating: number;
  timestamp: Date;
}

const Comments: React.FC = () => {
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [commentsList, setCommentsList] = useState<Comment[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newComment: Comment = { name, correo, comment, rating, timestamp: new Date() };

    try {
      // Utiliza la función addDoc para añadir un documento a la colección
      await addDoc(collection(db, 'comments'), newComment);
      // Actualiza el estado con el nuevo comentario
      setCommentsList([newComment, ...commentsList]);
      setName('');
      setCorreo('');
      setComment('');
      setRating(0);
    } catch (error) {
      console.error('Error al guardar el comentario en Firebase:', error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Utiliza las funciones de Firestore para obtener los comentarios
        const snapshot = await getDocs(query(collection(db, 'comments'), orderBy('timestamp', 'desc'), limit(3)));

        const fetchedComments: Comment[] = snapshot.docs.map((doc) => doc.data() as Comment);
        setCommentsList(fetchedComments);
      } catch (error) {
        console.error('Error al obtener los comentarios de Firebase:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="comments">
      <h2>Dejanos un Comentario</h2>
      <div className="comment-list">
        {commentsList.map((c, index) => (
          <div key={index} className="comment-container">
            <p>
              <strong className='sub'>{c.correo}</strong>
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
