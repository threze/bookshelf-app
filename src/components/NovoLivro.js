import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoLivro = () => {

    const [name, setName] = useState('')

    const [success, setSuccess] = useState(false)

    const onChange = event => {
        setName(event.target.value)
    }

    const onSave = () => {
        axios.post('/api/livros/', {
            name
        })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return (
            <div>
               <Redirect to='/livros' />
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Adicionar livro</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do livro' />
                </div>
                <button type='button' onClick={onSave} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}


export default NovoLivro 