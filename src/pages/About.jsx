import React from 'react'
import countryfact from '../api/countryData.json'

const About = () => {
  return (
    <section className='section-about container'>
      <h2 className="container-title">Here are the Interesting Facts <br /> we are proud of</h2>
      <div className="gradient-cards">

        {
          countryfact.map((item) => {
            return (
              <div className="card">
                <div className="container-card bg-green-box">
                  <p className='card-title'>{item.countryName}</p>
                  <p className='container-card-p'><span className='card-description'>Capital:</span>{item.capital}</p>
                  <p className='container-card-p'><span className='card-description'>Population:</span>{item.population}</p>
                  <p className='container-card-p'><span className='card-description'>Interesting Fact:</span>{item.interestingFact}</p>

                </div>
              </div>
            )
          })
        }


      </div>
    </section>
  )
}

export default About
