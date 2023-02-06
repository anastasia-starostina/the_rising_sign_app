import React, { useState, useEffect } from 'react'

function DailyAdvice() {

  const [advice, setAdvice] = useState('')

  const url = "https://api.adviceslip.com/advice"
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

export default DailyAdvice