import React from 'react';
import '../componentes/App.css';
import { useEffect, useState } from "react";

const Desenho = () => {

    const [limpar, setLimpar] = useState(0)
    let width
    let height

    useEffect(() => {

        const canvas = document.querySelector('#tela')
        const ctx = canvas.getContext('2d')
        const bounding = canvas.getBoundingClientRect()


        const pincel = {
            ativo: false,
            movendo: false,
            pos: { x: 0, y: 0 },
            posAnterior: null
        }

        let PosicaoY = canvas.offsetTop
        let PosicaoX = canvas.offsetLeft

        ctx.lineWidth = 3

        const desenharLinha = (linha) => {

            ctx.beginPath()
            ctx.moveTo(linha.posAnterior.x, linha.posAnterior.y)
            ctx.lineTo(linha.pos.x, linha.pos.y)
            ctx.stroke()
        }

        canvas.onmousedown = () => {
            pincel.ativo = true
        }

        canvas.onmouseup = () => {
            pincel.ativo = false
        }

        canvas.onmousemove = (evento) => {

            let Y = evento.clientY - bounding.top
            let X = evento.clientX - bounding.left
            console.log(PosicaoY)

            pincel.pos.x = X
            pincel.pos.y = Y
            pincel.movendo = true
        }

        // canvas.onmouseout = () => {
        //     pincel.ativo = false
        // }

        const ciclo = () => {
            if (pincel.ativo && pincel.movendo && pincel.posAnterior) {

                desenharLinha({ pos: pincel.pos, posAnterior: pincel.posAnterior })
                pincel.movendo = false
            }

            pincel.posAnterior = { x: pincel.pos.x, y: pincel.pos.y }

            setTimeout(ciclo, 10)

        }

        const limparDados = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }

        if (limpar > 0) {
            limparDados()

            console.log(limpar)
        }

        ciclo()

    }, [limpar]);


    return (
        <div className="App">
            <canvas id="tela" width={width} height={height}> </canvas>
            <div>
                <button onClick={() => setLimpar((limpar) => limpar + 1)}    >Limpar</button>
                {/* <button onClick={'handleClick'}    >Limpar</button> */}
            </div>

        </div>
    );
}

export default Desenho;