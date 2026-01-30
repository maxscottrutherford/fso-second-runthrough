import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification, removeNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  );
};

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if ( filter === '' ) {
      return anecdotes
    }
    return anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
  })
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
  const handleVote = anecdote => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(setNotification(`You voted ${anecdote.content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => handleVote(anecdote)}
          />
      ))}
    </>
  );
};

export default Anecdotes
