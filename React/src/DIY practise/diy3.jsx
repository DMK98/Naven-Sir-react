import { useState } from "react"

const Diy3 = () => {
    const [student, setStudent] = useState([
        { roll: 21, name: "Manish" },
        { roll: 22, name: "Anish" },
        { roll: 23, name: "Danish" },
        { roll: 24, name: "Rajnish" },
        { roll: 25, name: "Mohan" },
    ]);

    const handleChange = () => {
        setStudent(
            [
                { roll: 1, name: "John" },
                { roll: 2, name: "Wick" },
                { roll: 3, name: "Rambo" },
                { roll: 4, name: "Hitman" },
                { roll: 5, name: "Rock" },
            ]
        );
    }
    return (
        <>
            <h1>event</h1>
            {
                student.map((row, i) => {
                    return (
                        <div key={i}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Roll :{row.roll}</td>
                                        <td>Name :{row.name}</td>
                                    </tr>                                   
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }

            <button onClick={handleChange}>Change</button>

        </>
    )
}

export { Diy3 }