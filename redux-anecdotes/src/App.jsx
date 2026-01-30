import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <Notification />
      <Anecdotes />
      <Filter />
      <AnecdoteForm />
    </div>
  )
}

export default App
