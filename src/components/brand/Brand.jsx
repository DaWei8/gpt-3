import React from 'react'
import './brand.css'
import {google, atlassian, slack, shopify, dropbox} from './import'


const Brand = () => {
  
  return (
    <div className='gpt3__brand'>
      <div className='gpt3__brand-logos'>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand