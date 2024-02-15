import React, { useEffect, useState } from 'react'

function  Github() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/adarsh44444').then(response=>response.json).then(data=>{
      console.log(data)
      setdata(data)
    })
  },[])
  return (
    <div className='text-center m-4 bg-gray-600'>Github {data.followers}
    <img src={data.avatar_url} alt="git picture" width={300}/>
    </div> 
  )
}

export default Github