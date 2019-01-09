import React from 'react'

export default function CookieConsent({ handleClick }) {
  return (
    <div>
      <div>
        Um diese Website optimal zu gestalten und verbessern zu können,
        verwenden wir Cookies. Durch die weitere Nutzung unserer Website
        erklären Sie sich mit dem Einsatz von Cookies und unseren
        Datenschutzrichtlinien einverstanden.
      </div>
      <div>
        <button onClick={handleClick} value={'Einverstanden'} />
      </div>
    </div>
  )
}
