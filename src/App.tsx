import {Form} from "./components/Form.tsx";
import {elements} from "./components/test_form.ts";
import Modal from "./components/Modal.tsx";
import ModalButton from "./components/ModalButton.tsx";


function App() {
    return (
        <div className={"container mt-3"}>
            <ModalButton connected_with={"example"} button_text={"Test"}/>
            <Modal title={"Some Cool"} connected_with={"example"}>
                <Form elements={elements} onSubmit={(el) => {
                    console.log(el)
                }}/>
            </Modal>
        </div>
    )
}

export default App
