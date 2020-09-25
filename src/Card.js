import React from 'react'

const Card =({name, email,id})=>{
    
return(
<div class=' tc bg-light-green dit br3 pa3 ma3 grow bw2 shadow-5'>

<img alt='robot' src={`https://robohash.org/${Math.random(-12,12)} ` } />
<div>
<h4>{id}</h4>
    <h2> {name} </h2>
<p>{email}</p>

</div>



</div>


)

}
export default Card