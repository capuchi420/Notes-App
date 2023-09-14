import React from "react";
import styled from 'styled-components';
import Note from "./components/Note";

export const App = () => {
    return (
        <Container>
            <form>
                <input />
                <button>ADD</button>
            </form>
            <div>
                <Note />
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

    div{
        
    }
`;