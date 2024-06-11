// import AppRoutes from "./routes"
import { Center } from "@chakra-ui/react";
import Logo from "../../assets/duallytecLogo.png"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

function Navbar() {

    return (
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
            {/* <div id="paginas">
                <div id="home">
                    <span>Home</span>
                </div>
                <div id="relatorios">
                    <span>Relatorios</span>
                </div>
            </div> */}
            <div id="paginas">
                <Breadcrumb>
                    <BreadcrumbItem >
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='relatorios'>Relatórios</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>


        </Center>
    )
}

export default Navbar