import React from 'react'
import PropTypes from 'prop-types'
import {ListGroup, ListGroupItem, CustomInput, Button} from 'reactstrap'

// Make the List Item only
const ListItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <ListGroupItem>
            <CustomInput 
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            <div className='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button 
                className='ml-auto'
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>
        </ListGroupItem>
    )
}

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

// Let's Make all the List View Here

const ListView = ({todos, toggleSelect, toggleComplete}) => {
    return(
        <ListGroup>
            {todos.map(todo => (
                <ListItem 
                    todo= {todo}
                    key= {todo.id}
                    toggleSelect = {toggleSelect}
                    toggleComplete = {toggleComplete}
                />
            ))}
        </ListGroup>
    )
}

ListView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView