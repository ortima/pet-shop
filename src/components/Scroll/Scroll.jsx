import React, { useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Scroll = () => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 300 && !show) {
      setShow(true)
    } else if (window.scrollY <= 300 && show) {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [show])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          color="black"
          sx={{
            position: 'fixed',
            bottom: '2vh',
            right: '2vw',
            backgroundColor: '#DCDCDC',
            zIndex: 2,
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </div>
  )
}

export default Scroll
