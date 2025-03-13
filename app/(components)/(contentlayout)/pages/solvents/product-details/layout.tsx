import React, { Suspense } from 'react'

const layout = ({children}:any) => {
  return (
    <>
    <Suspense>
         {children}
    </Suspense>
    </>
  )
}

export default layout