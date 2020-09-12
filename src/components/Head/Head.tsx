import React from 'react'
import Links from './_children/Links'
//import Scripts from './_children/Scripts'
import DefaultMetaTags from './_children/DefaultMetaTags'

const HeadComponent = () => (
  <>
    <DefaultMetaTags />
    <Links />
    {/* <Scripts /> */}
  </>
)

export default HeadComponent
