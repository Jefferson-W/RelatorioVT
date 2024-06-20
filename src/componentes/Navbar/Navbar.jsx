import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center
} from '@chakra-ui/react'
import Logo from "../../assets/duallytecLogo.png"
import { Link } from 'react-router-dom';


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
            <div id="relatorio" style={{ fontFamily: 'Abel' }}>
                Relatório de visita técnica
            </div>           
            <div id="paginas">
                <Breadcrumb>
                    <BreadcrumbItem >
                        <Link to="/">
                            <BreadcrumbLink >Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="relatorios">
                            <BreadcrumbLink >Relatórios</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </Center>
    )
}

export default Navbar