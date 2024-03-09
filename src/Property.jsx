import PropTypes from 'prop-types'


function Property({name,price,rating,id}) {
  return (
    <div className='Property'>
<h2>{name}</h2>
<h3>${price} a night</h3>
<h4> {rating}</h4>
    </div>
  )
}


Property.propTypes ={
name:PropTypes.string,
price:PropTypes.number,
rating:PropTypes.number
};

export default Property
