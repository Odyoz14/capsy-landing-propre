import React, { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <h1 className="fixed top-6 left-1/2 transform -translate-x-1/2 text-5xl font-poetic text-sky-700 z-30 animate-fade-up">
        Capsy
      </h1>

      <div className="relative overflow-hidden bg-gradient-to-b from-sky-200 to-white min-h-screen flex flex-col items-center justify-center text-center py-20 px-4">
        <div className="floating-clouds fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="cloud absolute bg-white opacity-30 rounded-full"
              style={{
                width: `${100 + i * 40}px`,
                height: `${60 + i * 20}px`,
                top: `${10 + i * 20}%`,
                left: `-${100 + i * 60}px`,
                animation: `floatCloud ${20 + i * 10}s linear infinite`,
                filter: 'blur(12px)',
              }}
            />
          ))}
        </div>

        <div className="falling-stars fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="star absolute w-[2px] h-[20px] bg-white opacity-50 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <h2 className="text-4xl font-bold text-sky-700 mb-6 z-20">
          Voyagez dans le temps avec vos souvenirs
        </h2>

        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 z-20">
          {submitted ? (
            <p className="text-green-600 font-semibold">Merci ! Vous serez prévenu au lancement 🎉</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border rounded-md"
              />
              <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded">
                Être prévenu du lancement
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
