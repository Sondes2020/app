import React from 'react'

const CardList = ({user}) => {
    return (
        <div className='card'>
            <div className='card-inner' >

            

     <div  className='card-front'  >
<ul>
    <li>{user.name}</li>
    <li>{user.username}</li>
    <li>{user.email}</li>
    <li>{user && user.address && user.address.street}</li>
    
    <li>{user && user.address && user.address.suite}</li>
    <li>{user && user.address && user.address.city}</li>
    <li>{user && user.address && user.address.zipcode}</li>
    
</ul>
                </div>
     <div className='card-back'  >
         <ul>
         <li>{user.phone}</li>
         <li>{user.website}</li>
         {/* <li>{user.company}</li> */}
         </ul>
                   </div> 
            </div>
            
        </div> 
    )
}

export default CardList
