import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    changeAnecdote(state, action) {
      const updated = action.payload
      return state.map(a => (a.id === updated.id ? updated : a))
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

const {  createAnecdote, setAnecdotes, changeAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updated = await anecdoteService.voteOnAnec(anecdote)
    dispatch(changeAnecdote(updated))
  }
}

export default anecdoteSlice.reducer
