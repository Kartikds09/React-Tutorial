import propTypes from 'prop-types'

function List(props) {
    
    // fruits.sort((a,b)=> a.calories - b.calories) //numerically
    // fruits.sort((a,b)=> a.name.localeCompare(b.name));
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    
    //   const ListItems = fruits.map(fruit => <li key={fruit.id}> {fruit.name} : {fruit.calories}</li>);
  
  const ItemList = props.items;
  const category = props.category;
  const ListItems = ItemList.map(item => <li key={item.id}> {item.name} : &nbsp; {item.calories}</li>);
  return(    
    
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{ListItems}</ol> 
        </>
);
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id:propTypes.number,
                                              name: propTypes.string,
                                              calories: propTypes.number
    }))
}

List.defaultProps = {
    category:"category",
    items : []
}

export default List;

