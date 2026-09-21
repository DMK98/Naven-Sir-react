// const Student =(props)=>{
const Student = ({ roll, name = "not yet given" }) => {
    // console.log(props);

    return (
        <div>
            <h3>Student component</h3>
            <p>some text goes here</p>
            {/* <p>Roll:{props.roll}</p>
            <p>Name:{props.name}</p> */}
            <p>Roll:{roll}</p>
            <p>Name:{name}</p>
            <hr />
        </div>
    );
}

// export {Student};
export default Student;