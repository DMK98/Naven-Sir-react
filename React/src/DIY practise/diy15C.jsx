const Show = (props) => {

    return (
        <>
            <h3>Show component</h3>
            <p>some data from Show compnent</p>
            <b><p>name:{props.data.name}</p>
                <p>roll:{props.roll}</p></b>
        </>
    )
}

export { Show }