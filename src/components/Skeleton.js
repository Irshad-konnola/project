

const Skeleton = ({item}) => {
  return [...Array(item).keys()].map(()=>
  <div className="animatte-pulse">
      <div className="bg-gray-300 rounded-lg h-72"></div>
  </div>
  )
}

export default Skeleton