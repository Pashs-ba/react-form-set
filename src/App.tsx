import {Form} from "./components/Form.tsx";
import {elements} from "./components/test_form.ts";


function App() {
    return (
        <div className={"container mt-3"}>
            <Form elements={elements} onSubmit={(el) => {
                console.log(el)
            }}/>
        </div>
    )
}

export default App
