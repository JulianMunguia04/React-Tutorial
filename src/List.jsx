import PropTypes from 'prop-types'

function List(props){

  const category = props.category
  const itemList = props.items

  const listItems = itemList.map((item)=>{
    return <li key={item.name}>
            {item.name}: &nbsp; 
            <b>{item.calories}</b></li>
  })

  return(
    <>
      <h3>{category}</h3>
      <ul>
        {listItems}
      </ul>
    </>
  );
}

List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(
                          {name: PropTypes.string, 
                          calories : PropTypes.number}))
}

List.defaultProps = {
  category:"Category",
  items: []
}

export default List