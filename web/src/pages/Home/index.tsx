import React, { useEffect, useState, FormEvent } from 'react';

import { Container, SearchSection, ListSection, Title } from './styles';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import * as commentServices from '../../services/comments';

interface Comments {
  id: number;
  text: string;
  audio_url: string
}

const Home = () => {

  const [comments, setComments] = useState<Comments[]>();
  const [comment, setComment] = useState('');

  useEffect(() => {

    async function getAllComments() {
      try {
        const response = await commentServices.getAllComments();

        setComments(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getAllComments();

  }, [])

  async function handleSubmitComment(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await commentServices.postComment(comment.trim());

      setComment('');

      if(response.status === 201){
        if(comments){
          setComments([response.data, ...comments]);
        }else{
          setComments([response.data]);
        }
      }


    } catch (err) {
      console.log(err);
      if(err.response){
        alert(err.response.data.message);
      }else{
        alert("Servidor não encontrado");
      }
    }
  }

  return (
    <Container>
      <main>
        <SearchSection>
          <Title>Comment</Title>
          <form onSubmit={handleSubmitComment}>
            <TextArea value={comment} onChange={(value) => setComment(value)} />
            <Button name="Save" type="submit" />
          </form>
        </SearchSection>
        <ListSection>
          <Title>Comments</Title>

          {comments &&
            <ul>
              {comments.map(comment => (
                <li key={comment.id}>
                  {comment.text}
                 <audio controls >
                   <source src={comment.audio_url}/>
                 </audio>
                </li>
              ))}
            </ul>
          }
        </ListSection>
      </main>
    </Container>
  );
}

export default Home;