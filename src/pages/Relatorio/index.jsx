import {
    Flex,
    Box,
    Center,
    FormControl,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";


function App() {
    return (
        <Box h="100vh">
            <Flex
                align="center"
                justify="center"
                bg="blackAlpha.200"
                h="calc(150vh)"
            >
                <Center
                    w="100%"
                    maxW={1280}
                    bg="white"
                    top={70}
                    position="absolute"
                    borderRadius={5}
                    p="6"
                    boxShadow="0 1px 2px #ccc"
                    paddingBottom={20}
                >
                    <FormControl display="flex" flexDir="column" gap="4">
                        <TableContainer>
                            <Table size='lg'>
                                <Thead>
                                    <Tr>
                                        <Th>RelatórioID</Th>
                                        <Th>Cliente</Th>
                                        <Th>Chamado</Th>
                                        <Th>Abertura Chamado</Th>
                                        <Th>Inicio Atend</Th>
                                        <Th>Fim Atend</Th>
                                        <Th>Km Inicio</Th>
                                        <Th>Km Fim</Th>
                                        <Th>Contrato</Th>
                                        <Th>Garantia</Th>
                                        <Th>Tipo</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>be1455b4</Td>
                                        <Td>Google</Td>
                                        <Td isNumeric>9785443</Td>
                                        <Td>2024-06-06</Td>
                                        <Td>2024-06-06</Td>
                                        <Td>2024-06-06</Td>
                                        <Td isNumeric>1544</Td>
                                        <Td isNumeric>1594</Td>
                                        <Td >Não</Td>
                                        <Td >Sim</Td>
                                        <Td >Preventiva</Td>
                                        
                                    </Tr>
                                    <Tr>
                                        <Td>654591</Td>
                                        <Td>Amazon</Td>
                                        <Td isNumeric>9785442</Td>
                                        <Td>2024-06-06</Td>
                                        <Td>2024-06-06</Td>
                                        <Td>2024-06-06</Td>
                                        <Td isNumeric>1544</Td>
                                        <Td isNumeric>1594</Td>
                                        <Td >Sim</Td>
                                        <Td >Sim</Td>
                                        <Td >Corretiva</Td>
                                        
                                    </Tr>
                                    <Tr>
                                        <Td>1541954s</Td>
                                        <Td>Facebook</Td>
                                        <Td isNumeric>9785441</Td>
                                        <Td>2024-06-06</Td>
                                        <Td>2024-06-06</Td>
                                        <Td>2024-06-06</Td>
                                        <Td isNumeric>1544</Td>
                                        <Td isNumeric>1594</Td>
                                        <Td >Não</Td>
                                        <Td >Não</Td>
                                        <Td >Preventiva</Td>
                                        
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </FormControl>
                </Center>
            </Flex>
        </Box >
    );
}

export default App;
