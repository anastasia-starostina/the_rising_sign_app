import React, { useState, useEffect } from 'react'

function DailyHoroscope() {

  const [advice, setAdvice] = useState('')

//refactor into POST request

  const url = "https://aztro.sameerkumar.website?sign=aries&day=today"
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json()
      setAdvice(json.slip.advice)
    } catch (error) {
      console.log("error", error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>{advice}</div>
  )
}

export default DailyHoroscope