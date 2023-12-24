import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeColor } from "../redux/actions";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const MyColors = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [colorSelected, setColorSelected] = useState('')
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch()

  const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
  const Span = styled.span`
    background-color: ${(props) => props.color};
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin: 10px;
  `;

  const modalStyle = {
    backgroundColor: colorSelected,
    color: "#fff"
  }

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  
  const handleColors = (color) => {
    setColorSelected(color)
    handleModal()
  }
  const handleRemove = () => {
    dispatch(removeColor(colorSelected));
    handleModal()
    Swal.fire({
      icon: "success",
      title: "The color has been removed",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  return (
    <>
      <Div>
        {colors.length !== 0 ? (
          colors.map((color, index) => (
            <Span key={index} color={color} onClick={() => handleColors(color)}>
              {color}
            </Span>
          ))
        ) : (
          <h1>No colors added yet!</h1>
        )}
      </Div>
      
      <Modal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            backgroundColor: colorSelected,
            color: "#000",
            border: "none",
            borderRadius: "5px",
            padding: "20px",
            maxWidth: "400px",
            margin: "auto",
          },
        }}
      >
        <h1 style={{ color: "#fff" }}>{colorSelected}</h1>
        <button onClick={handleRemove} className="btn bg-light text-danger">
          Remove Color
        </button>
        {" "}
        <button onClick={handleModal} className="btn bg-light text-success">
          <IoCloseSharp />
        </button>
      </Modal>
    </>
  );
};

export default MyColors;
