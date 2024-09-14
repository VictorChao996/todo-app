import express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

let todos = [];

app.use(cors());
app.use(express.json()); //for req.body

/**
 * Middleware for logging request headers and body
 */
app.use((req, res, next) => { 
    console.log(`---------------------------------`);
    console.log(`req.headers:`, req.headers);
    console.log(`req.body:`, req.body);
    console.log(`-> other log below this line:`);
    next()
});


app.get('/api/todos', (req, res) => {
    try{
        const result = todos;
        res.send(result);
    }catch(e){
        console.log(e);
        throw new Error('Error getting todos');
    }
});

app.post('/api/todo', (req, res) => {
    const todo = req.body.title;
    try{
        todos.push(todo);
        res.send('Todo added successfully');
    }catch(e){
        console.log(e);
        throw new Error('Error adding todo');
    }
});

app.delete('/api/todos', (req, res) => {
    try{
        todos = [];
        res.send('Todos deleted successfully');
    }catch(e){
        console.log(e);
        throw new Error('Error deleting todos');
    }
});

app.post('/api/save-todos', (req, res) => {
    try{
        todos = req.body.todos;
        res.send('Todos saved');
        console.log(`save todos: `, todos);
    }catch(e){
        throw new Error('Error saving todos');
    }
});

app.get('/api/throw-error', (req, res) => {
    throw new Error('This is an error!');
}); 

/**
 * Middleware for error handling response, by defining the specific error for every request
 */
app.use((err, req, res, next) => {
    res.status(500).send('Internal server error: ' + err.message);
    
});

app.listen(port, ()=>{
    console.log(`Server app is listening on port ${port}`);
});