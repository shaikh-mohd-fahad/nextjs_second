import React from 'react'
import Image from 'next/image'
import imgpath from "../../../public/trainer2.jpg"
const page = () => {
  return (
    <div>
      this  is user dashboard
      <Image src={imgpath} alt="temp photo" height={200} width={200}/>
    </div>
  )
}

export default page
