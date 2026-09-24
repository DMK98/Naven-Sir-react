const Student = (props) => {
    return (
        <>
            <div className="box">
                <h3>{props.i + 1}</h3>
                <h2>{props.roll}</h2>
                <p>{props.name}</p>
                <button onClick={props.del}>X</button>
            </div>
        </>
    )
}

export { Student }