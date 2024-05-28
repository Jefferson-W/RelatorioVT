import React from 'react';
import './App.css';
import { useEffect, useState } from "react";
import { FormLabel } from "@chakra-ui/react";

const Desenho2 = () => {

    const [limpar, setLimpar] = useState(0)


    useEffect(() => {

        const myPics = document.querySelector('#tela')
        const context = myPics.getContext("2d");

        context.lineWidth = 3

        let isDrawing = false;
        let x = 0;
        let y = 0;

        // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

        // Add the event listeners for mousedown, mousemove, and mouseup
        myPics.addEventListener("mousedown", (e) => {
            x = e.offsetX;
            y = e.offsetY;
            isDrawing = true;
        });

        myPics.addEventListener("mousemove", (e) => {
            if (isDrawing) {
                drawLine(context, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            }
        });

        window.addEventListener("mouseup", (e) => {
            if (isDrawing) {
                drawLine(context, x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                isDrawing = false;
            }
        });

        function drawLine(context, x1, y1, x2, y2) {
            context.beginPath();
            context.strokeStyle = "black";
            context.lineWidth = 1;
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
            // context.closePath();
        }
        const limparDados = () => {
            context.clearRect(0, 0, myPics.width, myPics.height)
        }
        if (limpar > 0) {
            limparDados()

            console.log(limpar)
        }
    }, [limpar]);


    return (
        <div className="App">
            <FormLabel >Assinatura do Cliente</FormLabel>
            <canvas id="tela" width="600px" height="100px">
            </canvas>
            <div id="limpar">
                <button onClick={() => setLimpar((limpar) => limpar + 1)}    >Limpar</button>
                {/* <button onClick={'handleClick'}    >Limpar</button> */}
            </div>
            <div id="gravar">
                <button onClick={() => setLimpar((limpar) => limpar + 1)}    >Gravar</button>
                {/* <button onClick={'handleClick'}    >Limpar</button> */}
            </div>

        </div>
    );
}

export default Desenho2;
