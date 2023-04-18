import React,{useState} from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';
const Review=()=>{
    const[index,setIndex]=useState(0);
    const{name,job,image,text}=people[index];
    const checkNumber=(number)=>{
     if(number>people.length-1)
     {
        return 0;
     }
     if(number<0)
     {
        return people.length-1;
     }
     return number;
    }
    const prevPerson=()=>{
        setIndex((index)=>{
            let newIndex=index-1;
        return checkNumber(newIndex)
        })
    }
    const nextPerson=()=>{
        setIndex((index)=>{
            let newIndex=index+1;
        return checkNumber(newIndex)
        })
    }
    const randamPerson=()=>{
        let randamNumber=Math.floor(Math.random()*people.length);
        if(randamNumber===index)
        {
        randamNumber= index+1;   
        }
        setIndex(checkNumber(randamNumber));
    }
    
    return(
        <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img'></img>
          <span className='quote-icon'>
           <FaQuoteRight/>
          </span>
        </div>
        <h3 className='author'>{name}</h3>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
         <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
         <button className='next-btn'onClick={nextPerson}><FaChevronRight/></button>
        </div>
        <button className='random-btn' onClick={randamPerson}>surprise me</button>
        </article>
    )
}
export default Review;