import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <Anecdotes />
      <Filter />
      <AnecdoteForm />
    </div>
  )
}

export default App
