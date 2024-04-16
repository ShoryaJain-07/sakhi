import React from 'react'
import {quizes} from '../../constants/index'

const Quiz = () => {
  return (
    <div className='w-full'>
        <div className='w-full p-4 text-6xl text-red-400 font-bold'>
            Quiz
        </div>
        <div className='w-full p-10'>
            {quizes.map((item,index)=>(
                <div className='w-full p-4 mb-8 rounded bg-red-100'>
                    <div className='text-start text-2xl mb-4 font-bold'>{index+1}. {item.ques}</div>
                    <div className='text-start text-lg'>
                        <input type='radio' id={item.option1} name='option'/>
                        <label htmlFor={item.option1}> {item.option1}</label><br/>
                        <input type='radio' id={item.option2} name='option'/>
                        <label htmlFor={item.option2}> {item.option2}</label><br/>
                        <input type='radio' id={item.option3} name='option'/>
                        <label htmlFor={item.option3}> {item.option3}</label><br/>
                        <input type='radio' id={item.option4} name='option'/>
                        <label htmlFor={item.option4}> {item.option4}</label><br/>
                    </div>

                </div>
            ))}

        </div>
    </div>
  )
}

export default Quiz