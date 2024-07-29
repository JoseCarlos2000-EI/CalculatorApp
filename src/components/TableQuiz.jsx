import Input from "./Input"

export default function TableQuiz({data, onChangeNote}) {
    return (
        <div className="tblQuiz">
            <table>
                <tbody>
                    <tr>
                        {
                            data.map((note, idx) =>{
                                return(
                                    <td key={idx}>
                                        <Input
                                        type="number"
                                        plh="Ingrese Nota"
                                        value={note}
                                        set={(newValue)=> onChangeNote(idx, newValue)}
                                        ></Input>
                                    </td>
                                )
                            })
                        }
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
