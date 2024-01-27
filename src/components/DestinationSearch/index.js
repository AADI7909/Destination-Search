// Write your code here
const DestinationSearch = props => {
  const {destinationsList} = props
  const {name, imageUrl} = destinationsList

  return (
    <li>
      <img src={imageUrl} alt="avatar" />
      <div>
        <h1> {name} </h1>
      </div>
    </li>
  )
}
export default DestinationSearch
