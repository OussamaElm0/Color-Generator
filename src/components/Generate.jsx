import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addColor } from '../redux/actions'
import styled from 'styled-components'
import { FiRefreshCw} from "react-icons/fi"
import Swal from "sweetalert2";

const Generate = () => {
    const [color, setColor] = useState('')
    const dispatch = useDispatch()

    const Button = styled.button`
        background-color: ${color};
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        margin: 10px;
    `
    const Div = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    `
    const H1 = styled.h1`
        font-size: 4rem;
        color: ${color};
    `
    const generateColor = () => {
        setColor('#' + Math.random().toString(16).substr(-6))
    }

    const handleClick = () => {
      dispatch(addColor(color));
      Swal.fire({
        icon: "success",
        title: "The color has been saved",
        showConfirmButton: false,
        timer: 1000,
      });
      generateColor()
    };

     useEffect(() => {
       generateColor();
     }, []);

    return (
      <Div>
        <H1>{color}</H1>
        <div>
          <Button onClick={handleClick}>Add Color And Generate</Button>
          <button onClick={generateColor} className="btn">
            <FiRefreshCw />
          </button>
        </div>
      </Div>
    );
}
export default Generate