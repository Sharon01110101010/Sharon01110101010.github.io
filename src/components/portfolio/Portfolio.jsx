import React from 'react'
import './portfolio.css'
import APT from '../../assets/APT.pdf'
import AWA from '../../assets/AWA.pdf'
import Stark from '../../assets/Stark.pdf'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'


const data = [
    {
        id:1,
        image: IMG1,
        webtitle: 'Human Fussion',
        title: 'Exploring the Effect of Contact Location on FSR and Piezoelectric Sensor Outputs to Transduce Slowly- and Rapidly Adapting Tactile Feedback for Sensory Prostheses',
        PDF: APT,
        Web:"https://case.edu/humanfusions/"
    },
    {
        id:2,
        image: IMG2,
        webtitle: 'Human Fussion',
        title: 'Heuristics reserach on Anytimes Weight A*',
        PDF: AWA,
        Web:"https://earlham.edu/faculty-staff/sofia-lemons/"
    },
    {
        id:3,
        image: IMG3,
        webtitle: 'Human Fussion',
        title: 'Studying Sensory Discrimination Via Spinal Cord Stimulation Induced Artificial Sensation In Rodents',
        PDF: Stark,
        Web:"https://yadavlabs.com/"
    }
]



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5> My Recent Research</h5>
            <h2> Project</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id, image, webtitle, title, PDF, Web}) =>{
                        return(
                            <article key = {id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={webtitle}/>
                            </div>
                            <h3> {title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={PDF} download className='btn'> Download pdf</a>
                                <a href={Web} className='btn btn-primary' target='_bland'>Website</a>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

// const Portfolio = () => {
//     return (
//         <section id='portfolio'>
//             <h5> My Recent Research</h5>
//             <h2> Project</h2>

//             <div className="contanier portfolio__contanier">
//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG1} alt=''/>
//                     </div>
//                     <h3> This is a project title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href={APT} download className='btn'> Download pdf</a>
//                         <a href="https://case.edu/humanfusions/" className='btn btn-primary' target='_bland'>Website</a>
//                     </div>
//                 </article>

//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG2} alt=''/>
//                     </div>
//                     <h3> This is a project title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href={AWA} download className='btn'> Download pdf</a>
//                         <a href="https://earlham.edu/faculty-staff/sofia-lemons/" className='btn btn-primary' target='_bland'>Website</a>
//                     </div>
                   
//                 </article>

//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG3} alt=''/>
//                     </div>
//                     <h3> This is a project title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href={Stark} download className='btn'> Download pdf</a>
//                         <a href="https://yadavlabs.com/" className='btn btn-primary' target='_bland'>Website</a>
//                     </div>
      
//                 </article>
//             </div>
//         </section>
//     )
// }

export default Portfolio





