import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Note from "./components/Note";

export const App = () => {
    const [x, setX] = useState([]);

    useEffect(() => {
        setX(document.cookie.slice(5, document.cookie.length).split('='));
    }, [document.cookie]);

    console.log(x)


    const handleSubmit = (e) => {
        e.preventDefault();

        let inputValue = document.querySelector("input").value;
        document.querySelector("input").value = "";
        
        document.cookie += `note=${inputValue}; expires=20 Jun 9999 00:00:00 UTC;`;
    
        setX(document.cookie.slice(5, document.cookie.length).split('='));
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input />
                <button>ADD</button>
            </form>
            <div className="notes">
                {x.map(note => <Note txt={note} />).reverse()}
            </div>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3rem;
    flex-direction: column;

    form{
        min-width: 300px;
        width: 70%;
        max-width: 800px;

        input{
            width: 80%;
            padding: .8rem;
            border: none;

            &:focus{
                outline: none;
            }
        }

        button{
            width: 20%;
            padding: .8rem 1.6rem;
            border: none;
            }
        }
        div.notes{
            min-width: 300px;
            width: 70%;
            max-width: 800px;
        }
`;