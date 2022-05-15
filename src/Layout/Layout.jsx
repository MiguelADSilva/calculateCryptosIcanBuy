import { AppContainer } from './LayoutStyles'
import { Header, Footer } from '../components/indexComponents'

export const Layout = ({ children }) => {

    return (
        <AppContainer>
            <Header />
            <main>{children}</main>
            <Footer />
        </AppContainer>
    )
};