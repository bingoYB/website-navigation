import NavMenu from './NavMenu'
import Container from './Container'
import Top from './Top'
export default function App(props){
    return <div id="app">
        <Top/>
        <NavMenu/>
        <Container>
					{props.children}
				</Container>
    </div>
}