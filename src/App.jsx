import React, { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const steps = [
    { icon: '🖋️', label: 'Créez un compte' },
    { icon: '📸', label: 'Ajoutez vos souvenirs' },
    { icon: '📅', label: 'Choisissez une date' },
    { icon: '🔒', label: 'Scellez votre capsule' },
    { icon: '📬', label: 'Recevez-la plus tard' }
  ]

  const stepColors = [
    'bg-white',
    'bg-sky-50',
    'bg-white',
    'bg-sky-50',
    'bg-white'
  ]

  return (
    <div className="bg-sky-200 min-h-screen w-full flex flex-col justify-between">
      <div className="py-10 text-center">
        <h1 className="text-5xl font-poetic text-sky-700 mb-4">Capsy</h1>
        <h2 className="text-2xl font-semibold text-sky-800">Voyagez dans le temps avec vos souvenirs</h2>
      </div>

      {/* Étapes */}
      <div className="flex justify-center items-center gap-4 px-4 flex-wrap mb-10">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`flex flex-col items-center text-center rounded-xl shadow-md p-6 w-40 ${stepColors[index]}`}>
              <div className="text-4xl">{step.icon}</div>
              <p className="mt-2 font-semibold text-sky-800">{index + 1}. {step.label}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="text-2xl text-sky-600">➡️</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Formulaire */}
      <div className="bg-white w-full py-10 px-4 flex flex-col items-center">
        <div className="w-full max-w-md">
          {submitted ? (
            <p className="text-green-600 font-semibold text-center">Merci ! Vous serez prévenu au lancement 🎉</p>
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
    </div>
  )
}
