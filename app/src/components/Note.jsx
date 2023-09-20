import React from 'react';
import styled from 'styled-components';

export default function Note(props) {
  const handleDone = (e) => {
    e.target.closest("main").style.backgroundColor = "#d5d5d5";

    var newCookie = "";
    var x = document.cookie.slice(5, document.cookie.length).split('=');
    for(let i = 0; i < x.length; i++){
      if(props.txt !== x[i]){
        if(i === x.length - 1){
          newCookie += `${x[i]}`;
        }else{
          newCookie += `${x[i]}=`;
        }
      }else{
        newCookie = newCookie.slice(0, newCookie.length - 1);
      }
      /*if(i === x.length - 1){
        newCookie = newCookie.slice(0, newCookie.length - 1);
      }*/
    }
    document.cookie = `note=; expires=20 Jun 1999 00:00:00 UTC;`;
    document.cookie = `note=${newCookie}; expires=20 Jun 9999 00:00:00 UTC;`;
    window.location.reload();
  };

  const handleDelete = (e) => {
    var newCookie = "";
    var x = document.cookie.slice(5, document.cookie.length).split('=');
    for(let i = 0; i < x.length; i++){
      if(props.txt !== x[i]){
        if(i === x.length - 1){
          newCookie += `${x[i]}`;
        }else{
          newCookie += `${x[i]}=`;
        }
      }else{
        newCookie = newCookie.slice(0, newCookie.length - 1);
      }
      /*if(i === x.length - 1){
        newCookie = newCookie.slice(0, newCookie.length - 1);
      }*/
    }
    document.cookie = `note=; expires=20 Jun 1999 00:00:00 UTC;`;
    document.cookie = `note=${newCookie}; expires=20 Jun 9999 00:00:00 UTC;`;
    window.location.reload();
  }

  return (
    <Container>
      <div className='note-txt'>
        <p id="txt">{props.txt}</p>
      </div>
      <div className='options'>
        <button className='delete' onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
        <button className='done' onClick={handleDone}><i className="fa-solid fa-check"></i></button>
      </div>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 .2rem 0;
  background-color: #fff;
  padding: 1rem;

  div.options{
    button{
      border: none;
      background-color: inherit;
      padding: 1rem;
      transition: .3s all ease-in;
    }
    
    button.delete:hover{
      background-color: #f00;
    }

    button.done:hover{
      background-color: #3bbb4c;
    }
  }
`
