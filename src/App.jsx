import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio
} from "@chakra-ui/react";

import Desenho2 from "./componentes/Desenho2";

import Logo from "./assets/duallytecLogo.png"

function App() {
  return (
    <Box h="100vh">
      <Center
        id="header"
        as="header"
        h={100}
        bg="blue.300"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        <img src={Logo} />
        <div style={{ fontFamily: 'Abel' }}>
          Relatório de visita técnica
        </div>
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh)"
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
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Abertura Chamado</FormLabel>
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="chamado">Chamado</FormLabel>
                <Input id="email" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Inicio de Atendimento</FormLabel>
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="nasc">Fim de Atendimento</FormLabel>
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
              </Box>
              {/* <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Atendimento</FormLabel>
                <Input id="nasc" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="nasc">Horário</FormLabel>
                <Input id="nasc" type="date" />
              </Box> */}
              <Box w="100%">
                <FormLabel htmlFor="nasc">KM Inicio</FormLabel>
                <Input id="cel" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="nasc">KM Fim</FormLabel>
                <Input id="cel" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome" >Cliente</FormLabel>
                <Input id="nome" placeholder='Nome do cliente'/>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input id="email" type="email" placeholder='E-mail do Cliente' />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input id="cel" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="Tefone">Telefone</FormLabel>
                <Input id="Tefone" type="number" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <RadioGroup defaultValue='2'>
                  <FormLabel>Contrato?</FormLabel>

                  <HStack spacing={5} direction='row'>
                    <Radio colorScheme='red' value='1'>
                      Não
                    </Radio>
                    <Radio colorScheme='green' value='2'>
                      Sim
                    </Radio>
                  </HStack>
                </RadioGroup>
              </Box>

              <Box w="100%">
                <RadioGroup defaultValue='2'>
                  <FormLabel>Garantia?</FormLabel>

                  <HStack spacing={5} direction='row'>
                    <Radio colorScheme='red' value='1'>
                      Não
                    </Radio>
                    <Radio colorScheme='green' value='2'>
                      Sim
                    </Radio>
                  </HStack>
                </RadioGroup>
              </Box>
              <Box w="100%">
                <RadioGroup defaultValue='2'>
                  <FormLabel>Tipo</FormLabel>

                  <HStack spacing={5} direction='row'>
                    <Radio colorScheme='blue' value='1'>
                      Preventiva
                    </Radio>
                    <Radio colorScheme='green' value='2'>
                      Corretiva
                    </Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>

            <HStack spacing="4">
              <FormLabel>Observações</FormLabel>
              <Box width="50%">
                <Input placeholder='Observações' size='md' />
              </Box>
              <FormLabel>Detalhe feito pelo Cliente</FormLabel>
              <Box width="50%">
                <Input placeholder='Detalhes do Cliente' size='md' />
              </Box>
            </HStack>

            <HStack spacing="4" >
              <Box w="100%">
                <div width="100%">
                  <Desenho2 />
                </div>
              </Box>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box >
  );
}

export default App;
