import { useState } from "react"
import Input from "./Input";
import TableQuiz from "./TableQuiz";

export default function AverageApp() {
  const [quiz, setQuiz] = useState(4);
  const [ values, setValues ] = useState([]);

  const AddExams = () => {
    setValues( new Array(quiz).fill(0) );
  }
  const changeValueNotes = (idx, value)=>{
    const data = [...values];
    data[idx] = value;
    setValues(data);

  }
  return (
    <>
    <div className="FormNewValues">
        <Input 
        type = 'number' 
        set = { setQuiz }
        value = { quiz }
        >
        </Input>
        <button onClick={ AddExams  }>+</button>
    </div>
    <TableQuiz data={values} onChangeNote = {changeValueNotes} ></TableQuiz>
    <div className="result">
    <span>{values.reduce( ( acum, k) => acum+=k,0)}</span>
    </div >
    </>
  )
}
