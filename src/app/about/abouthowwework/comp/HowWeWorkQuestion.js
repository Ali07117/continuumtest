
"use client";

import { questions } from '@/app/data/faqquestion'; // Import your data
import React, { useState } from 'react'; // Correct import for useState

function HowWeWorkQuestion(props) {
  const [show, setShow] = useState(questions[0].id); // Corrected: use questions, not question

  return (
    <>
      {questions.map((question, id) => {
        return (
          <div className=''>
            <div className="question-wrapper py-[2rem]" style={{ borderBottom: `${question.border} solid white` }}>
              <div className='flex items-center  pr-[1rem] justify-between cursor-pointer' onClick={() => setShow(question.id)}>
                <p className='text-[2rem] work-question-text text-[--textprimary] font-average'>{question.question}</p>
                {show === question.id ?
                  <img className='work-minus' src="/images/aboutpageimg/minus.svg" alt="" />
                  :
                  <img className='work-plus' src="/images/aboutpageimg/plus.svg" alt="" />
                }
              </div>
              <p className={` ${show === question.id ? 'block' : 'hidden'} work-answer-text text-[#949494] w-[80%] font-[400] text-[20px]`}>{question.answer}</p>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default HowWeWorkQuestion;
