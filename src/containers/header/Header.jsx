import React from 'react'
import "./header.css"
import people from "../../assets/assets/people.png"
import ai from "../../assets/assets/ai.png"
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's build something amazing with  GPT-3 OpenAi
        </h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit amet rerum consequuntur nostrum laboriosam ut, quibusdam veniam ratione magni esse in eos animi, natus provident sunt eius, cupiditate ullam praesentium!
          </p>
        <div className='gpt3__header-content__input'>
          
          <input type='email' placeholder='Your E-mail adress'/>
          <button type='button'>
            Get Started
          </button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in the last 24 hours</p>
        </div>
       


      </div>
       <div className='gpt3__header-image'>
          <img src={ai} alt="AI" />
        </div>

    </div>
  )
}

export default Header