const Userprofile = props => {
  const {eachuser, key, eachresult} = props
  const {imageUrl, id} = eachuser
  const dataid = id.toLowerCase()
  const clickimage = () => {
    eachresult(id, imageUrl)
  }
  return (
    <div>
      <button onClick={clickimage} data-testid={`${dataid}Button`}>
        <img src={imageUrl} alt={id} />
      </button>
    </div>
  )
}
export default Userprofile
