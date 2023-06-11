import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className="row">
      { productos.map( prod => 
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" style={{margin:'15px 0px 15px 0px', display:'flex', justifyContent: 'center'}}>
          <Item key={prod.id} {...prod}/>
        </div> ) }
    </div>
  )
}

export default ItemList