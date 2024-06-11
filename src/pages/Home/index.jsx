import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import Desenho2 from "../../componentes/Desenho2";
import { useRef } from "react";
import api from '../../services/api'


function App() {

  const inputChamado = useRef()
  const inputCliente = useRef()
  const inputIniAtendimento = useRef()
  const inputAberturaChamado = useRef()
  const inputFimAtendimento = useRef()
  const inputKmInicio = useRef()
  const inputKmFim = useRef()
  const radioContratoSim = useRef()
  const radioGarantiaSim = useRef()
  const radioTipoCorretiva = useRef()

  async function criarRelatorio() {

    try {
      const request = await api.post('/check', {
        chamado: inputChamado.current.value,
        abertura_chamado: inputAberturaChamado.current.value,
        inicio_atendimento: inputIniAtendimento.current.value,
        fim_atendimento: inputFimAtendimento.current.value,
        km_inicio: inputKmInicio.current.value,
        km_fim: inputKmFim.current.value,
        contrato: radioContratoSim.current.checked.toString(),
        garantia: radioGarantiaSim.current.checked.toString(),
        tipo: radioTipoCorretiva.current.checked.toString(),
        user: inputCliente.current.value
      })

      const statusCode = request.status

      if (statusCode == 201) {
        toast({
          title: 'Dados enviados com sucesso!.',
          description: "Relatório criado.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }
    } catch (error) {
      let erro = error.response.data.message

      if (erro.includes('prisma.checkIn.create()')) {
        toast({
          title: 'Erro ao enviar dados!.',
          description: 'Cliente não informado/ Cliente não encontrado',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Erro ao enviar dados!.',
          description: erro,
          status: 'error',
          duration: 5000,
          isClosable: true,

        })
      }
    }
  }

  const toast = useToast()

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
          // maxW="calc(90%)"
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
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' ref={inputAberturaChamado} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="chamado">Chamado</FormLabel>
                <Input id="chamado" type="number" ref={inputChamado} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Inicio de Atendimento</FormLabel>
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' ref={inputIniAtendimento} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="nasc">Fim de Atendimento</FormLabel>
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' ref={inputFimAtendimento} />
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
                <Input id="kmInicio" type="number" ref={inputKmInicio} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="nasc">KM Fim</FormLabel>
                <Input id="kmFim" type="number" ref={inputKmFim} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome" >Cliente</FormLabel>
                <Input id="nome" placeholder='Nome do cliente' ref={inputCliente} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cpf">CPF/CNPJ</FormLabel>
                <Input id="cpf" type="cpf" placeholder='CPF/CNPJ do Cliente' />
              </Box>
              {/* <Box w="100%">
                  <FormLabel htmlFor="cel">Celular</FormLabel>
                  <Input id="cel" type="number" />
                </Box> */}
            </HStack>
            <HStack spacing="4">
            </HStack>
            <HStack spacing="4">

              <Box w="200%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="50%">
                <FormLabel htmlFor="Tefone">Número</FormLabel>
                <Input id="numero" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="bairro">Bairro</FormLabel>
                <Input id="bairro" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
              <Box w="50%">
                <FormLabel htmlFor="estado">Estado</FormLabel>
                <Input id="estado" />
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
                    <Radio colorScheme='green' value='2' ref={radioContratoSim}>
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
                    <Radio colorScheme='green' value='2' ref={radioGarantiaSim}>
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
                    <Radio colorScheme='green' value='2' ref={radioTipoCorretiva}>
                      Corretiva
                    </Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>

            <HStack spacing="4">
              <FormLabel>Observações</FormLabel>
              <Box width="100%">
                <Input placeholder='Observações' size='md' />
              </Box>
            </HStack>
            <HStack spacing="4">
              <FormLabel>Detalhe feito pelo Cliente</FormLabel>
              <Box width="100%">
                <Input placeholder='Detalhes do Cliente' size='md' />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box width="100%">
                <FormLabel>Relatório Técnico</FormLabel>
                <Textarea placeholder='' />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box width="100%">
                <FormLabel>Considerações Gerais / Material Utilizado</FormLabel>
                <Textarea placeholder='' />
              </Box>
            </HStack>

            <HStack spacing="4" >
              <Box w="100%">
                <div width="100%">
                  <Desenho2 onClick={criarRelatorio} />
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
