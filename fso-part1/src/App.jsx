const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return <div>
    greeting app created by <a href='https://www.github.com/maxscottrutherford'>maxscottrutherford</a>
  </div>
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      {/* <Hello name='Max'/>
      <Hello name='Josh'/>
      <Hello name='Michael'/> */}
      <Hello name='Maya' age={26 + 10} />
      <Footer />
    </div>
  )
}

export default App