import React from 'react'
import './footer.css';
const Footer = () => {
  const options = [];

  for (var i = 0; i < 128; i++) {
      var sizing = Math.floor(2 + Math.random() * 4);
      options.push(
          <div className="bubble" style={{
              offset: '10rem',
              width: '100vw',
              size: Math.floor(2 + Math.random() * 4) + 'rem',
              transform: 'translate(' + -Math.floor(-5 + Math.random() * 140) + 'rem,' + Math.floor(Math.random() * 150) + '%)',
              animationDelay: Math.floor(-1*(2+Math.random()*50))+'s',
              offsetDistance: Math.floor(6+Math.random()*4)+'rem'
          }}>
          </div>

      )
  }

  return (
      <div>
          <div className="main" />
          <div className="footer">
              <div className="bubbles">
                  {options}
              </div>
              <div className="content">
                  
              </div>
          </div>
          <svg style={{ position: 'fixed', top: '100vh' }}>
              <defs>
                  <filter id="blob">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                      <feColorMatrix
                          in="blur"
                          mode="matrix"
                          result="blob"
                          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
                      />
                      <feComposite in="SourceGraphic" in2="blob" operator="atop" />
                  </filter>
              </defs>
          </svg>
      </div>
  )

}

export default Footer