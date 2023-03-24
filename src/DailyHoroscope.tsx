// import React, { useState, useEffect } from 'react'

// function DailyHoroscope() {

//   const [horoscope, setHoroscope] = useState('')

// //refactor into POST request

//   // const url = "https://aztro.sameerkumar.website?sign=aries&day=today"
//   // const fetchData = async () => {
//   //   try {
//   //     const response = await fetch(url);
//   //     const json = await response.json()
//   //     console.log(json)
//   //     setHoroscope(json.description)
//   //   } catch (error) {
//   //     console.log("error", error)
//   //   }
//   // }
//   useEffect(() => {
//     fetch('https://aztro.sameerkumar.website?sign=aries&day=today', {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify()
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         setHoroscope(data)
//       })
//       .catch((err) => {
//         console.log(err.message)
//       })
//   }, [])

//   return (
//     <div>{horoscope}</div>
//   )
// }

// export default DailyHoroscope