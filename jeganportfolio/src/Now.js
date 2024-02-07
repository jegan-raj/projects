
import React, { useEffect,useState} from 'react'

const Now = () => {

    const [user ,setuser]  = useState([])
    useEffect(()=>{
        fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
        .then(res =>res.json())
        .then(res => setuser(res))
    })
  return (
    <div>
      {
        user.map((user)=>{
            return(
                <div key={user.id}> 
                <h1 >{user.Title}</h1>
                <h6 >{user.Director}</h6>
                <img src={user.Images} alt="" />
                </div>
            )
        })
      }
    </div>
  )
}

export default Now
