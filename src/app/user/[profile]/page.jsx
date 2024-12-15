import React from 'react'

const page = ({params}) => {
  return (
    <div>
      this is user profile, hello {params.profile}
    </div>
  )
}

export default page