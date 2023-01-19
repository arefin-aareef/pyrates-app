import React from 'react'

const Footer = () => {
  const today = new Date();
    return (
      <footer className='Footer'>
          <p> &copy; <a title='Visit Website' href="https://arefin-aareef.github.io/portfolio#" target='_blank'>Arefin</a> | {today.getFullYear()}</p>
      </footer>
    )
}

export default Footer