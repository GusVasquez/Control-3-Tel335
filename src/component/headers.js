function header (props) {
    return (
        <div>
            <header>
                <nav>
                    <h1>{props.course} - {props.detail}</h1>
                </nav>
            </header>
        </div>
    )
}

export default header