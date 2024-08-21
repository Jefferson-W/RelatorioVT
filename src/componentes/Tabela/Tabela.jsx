import {
    Flex,
    Box,
    Center,
    FormControl,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";

import React, { useState, useEffect } from 'react';
import axios from "axios"


const options = {
    method: 'GET',
    timeout: 10000,

}

function TabelaComAPI() {
    const [dados, setDados] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [dadosFiltrados, setDadosFiltrados] = useState([]);

    useEffect(() => {

        try {
            const asyncFn = async () => {
                const url = 'https://projetobackend-aas8.onrender.com/allUsersChecks'
                const { data } = await axios.get(url, options)

                setDados(data.users)
            };

            asyncFn();

        } catch (error) {
            console.error('Erro ao buscar dados da API:', error)
        }
    }, []);

    useEffect(() => {
        const filtrados = dados.filter(item => {
            return (
                item.id.toLowerCase().includes(filtro.toLowerCase()) ||
                item.usuario?.name.toLowerCase().includes(filtro.toLowerCase()) ||
                item.chamado.toString().includes(filtro.toLowerCase()) ||
                item.contrato.toLowerCase().includes(filtro.toLowerCase())                
            );
        });
        setDadosFiltrados(filtrados);
    }, [filtro, dados]);

    const handleChange = event => {
        setFiltro(event.target.value);
    };

    return (
        <>
            <Box h="100vh">
                <Flex
                    align="center"
                    justify="center"
                    bg="blackAlpha.200"
                    h="calc(150vh)"
                >
                    <Center
                        w="100%"
                        // maxW={1280}
                        maxW="calc(90%)"
                        bg="white"
                        top={79}
                        position="absolute"
                        borderRadius={5}
                        p="6"
                        boxShadow="0 1px 2px #ccc"
                        paddingBottom={20}
                    >
                        <FormControl display="flex" flexDir="column" gap="4">
                            <TableContainer>
                                <Table size='lg' variant='striped' colorScheme='blackAlpha'>
                                    <Thead>

                                        <Tr>
                                            <Th align="right">
                                                <div>
                                                    <input
                                                        type="text"
                                                        placeholder="Filtrar..."
                                                        value={filtro}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Thead>
                                        <Tr>
                                            <Th>RelatórioID</Th>
                                            <Th>Cliente</Th>
                                            <Th>Chamado</Th>
                                            <Th>Abertura Chamado</Th>
                                            <Th>Contrato</Th>
                                            <Th>Garantia</Th>
                                            <Th>Tipo</Th>
                                            <Th>Inicio Atendimento</Th>
                                            <Th>Fim Atendimendo</Th>
                                            <Th>Assinatura</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {dadosFiltrados.map((item, index) => (
                                            <Tr key={index}>
                                                <Td>{item.id}</Td>
                                                <Td>{item.usuario?.name}</Td>
                                                <Td>{item.chamado}</Td>
                                                <Td>{item.abertura_chamado}</Td>
                                                <Td>{item.contrato}</Td>
                                                <Td>{item.garantia}</Td>
                                                <Td>{item.tipo}</Td>
                                                <Td>{item.inicio_atendimento}</Td>
                                                <Td>{item.fim_atendimento}</Td>
                                                <Td>{item.assinatura}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </FormControl>
                    </Center>
                </Flex>
            </Box >
        </>
    );
}
export default TabelaComAPI
