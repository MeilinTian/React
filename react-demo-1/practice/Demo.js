// 函数组件
export default function Demo(props) {
  const buy = () => {
    // console.log('buy')
    props.money = props.money - 10
  }
  console.log(props)
  return (
    <div>
      <h3>我是Demo组件</h3>
      <div>金钱: {props.money}</div>
      <button onClick={buy}>buy hotdog</button>
    </div>
  )
}