import {
    Box,
    FormLabel,
    Select,
    Input,
    HStack,
} from "@chakra-ui/react"
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const optionsGet = {
    method: 'GET',
    timeout: 10000,

}
function SelectCliente(props) {

    const [options, setOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState('')
    const [cpf, setCpf] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const url = 'https://projetobackend-aas8.onrender.com/allUsers'
                const { data } = await axios.get(url, optionsGet)
                setOptions(data.users)
            } catch (error) {
                console.error('Failed to fetch options', error)
            }
        }

        fetchOptions()
    }, [])

    const limparCamposCliente = () => {
        setCpf('')
        setEndereco('')
        setNumero('')
        setBairro('')
        setCidade('')
        setEstado('')
    }
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value
        setSelectedOption(selectedValue)

        const selectedOption = options.find(option => option.id === selectedValue)
        if (selectedOption) {
            setCpf(selectedOption.cpf)
            setEndereco(selectedOption.endereco)
            setNumero(selectedOption.numero)
            setBairro(selectedOption.bairro)
            setCidade(selectedOption.cidade)
            setEstado(selectedOption.estado)
        } else {
            limparCamposCliente()
        }
    }

    return (
        <>
            <HStack spacing="4">
                <Box w="100%">
                    <FormLabel htmlFor="nome" >Cliente</FormLabel>
                    <Select placeholder='Selecione o Cliente' ref={props.refe} onChange={handleSelectChange} >
                        {options.map(option => (
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ))}
                    </Select>
                </Box>
                <Box w="100%">
                    <FormLabel htmlFor="cpf">CPF/CNPJ</FormLabel>
                    <Input id="cpf" type="cpf" placeholder={cpf} value={cpf} readOnly />
                </Box>
            </HStack>
            <HStack id="hstackEndereco" spacing="4">
                <Box id="boxEndereco1" w="200%">
                    <FormLabel htmlFor="endereco">Endereço</FormLabel>
                    <div>
                        <Input id="endereco" placeholder={endereco} value={endereco} readOnly />
                    </div>
                </Box>
                <Box id="boxEndereco1" w="50%">
                    <FormLabel htmlFor="Tefone">Número</FormLabel>
                    <Input id="numero" type="number" placeholder={numero} value={numero} readOnly />
                </Box>
                <Box id="boxEndereco2" w="100%">
                    <FormLabel htmlFor="bairro">Bairro</FormLabel>
                    <div id="bairro">
                        <Input placeholder={bairro} value={bairro} readOnly />
                    </div>
                </Box>
                <Box id="boxEndereco2" w="100%">
                    <FormLabel htmlFor="cidade">Cidade</FormLabel>
                    <Input id="cidade" placeholder={cidade} value={cidade} readOnly />
                </Box>
                <Box id="boxEndereco2" w="50%">
                    <FormLabel htmlFor="estado">Estado</FormLabel>
                    <div id="estado">
                        <Input placeholder={estado} value={estado} readOnly />
                    </div>
                </Box>
            </HStack>
        </>
    )
}

export default SelectCliente