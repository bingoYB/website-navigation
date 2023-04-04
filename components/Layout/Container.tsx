import NavHeader from './NavHeader'

export default function Container(props) {
    return <div id="container">
        <main>
            <NavHeader />
            <div id="page-content" className="content">
                {props.children}
            </div>
        </main>
    </div>
}