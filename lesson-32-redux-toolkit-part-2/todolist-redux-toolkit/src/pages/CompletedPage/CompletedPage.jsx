import { Heading } from "rsuite";

import CompletedToDoList from "../../modules/ToDoList/CompletedToDoList/CompletedToDoList";

const CompletedPage = ()=> {
    return (
        <main>
            <Heading level={1}>Completed To Do</Heading>
            <CompletedToDoList />
        </main>
    )
}

export default CompletedPage;