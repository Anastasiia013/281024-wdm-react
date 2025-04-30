import { Heading } from "rsuite";

import ToDoList from "../../modules/ToDoList/ToDoList";

const HomePage = ()=> {
    return (
        <main>
            <Heading level={1}>To Do List</Heading>
            <ToDoList />
        </main>
    )
}

export default HomePage;