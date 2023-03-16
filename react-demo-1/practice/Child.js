export default function Child(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <div>Father's name: {props.singer}</div>
    </div>
  )
}