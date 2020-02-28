import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Livros = () => {

	const [data, setData] = useState([])

	useEffect(() => {
		axios
			.get('/api/livros')
			.then(res => {
				setData(res.data.data)
			})
	}, [])

	const deleteLivro = id => {
		axios
			.delete('api/livros/' + id) 
			.then(res => {
				const filtrado = data.filter(item => item.id !== id)
				setData(filtrado)
			})
	}

	const renderLine = record => {
		return (
			<tr key={record.id}>
				<th scope='row'>{record.id}</th>
				<td>{record.name}</td>
				<td>
					<Link onClick={() => deleteLivro(record.id)} className='btn btn-danger'>Remover</Link>
					<Link to={'/livros/' + record.id} className='btn btn-secondary'>Info livro</Link>
				</td>
			</tr> 
		)
	}

	if (data.length === 0) {
		return (
			<div className='container'> 
				<h1>Livros</h1>
				<div className='alert alert-warning alert-dismissible fade show' role='alert'>
					<strong>Não há livros cadastrados.<Link to="/livros/novo" className="alert-link">Clique aqui</Link> para cadastrar um novo livro.</strong>                        
				</div>
			</div>
		)
	}

	return (
		<div className='container'>
			<h1>Livros</h1>
			<Link 
				exact                
				to='/livros/novo' 
				className='btn btn-secondary btn-block'>Adicionar livro
			</Link>
			<hr/>
			<table className='table table-hover table-dark'>
				<thead>
					<tr>
						<th scope='col'>Id</th>
						<th scope='col'>Livro</th>
						<th scope='col'>Ações</th>
					</tr>
				</thead>
				<tbody>
					{data.map(renderLine)}
				</tbody>
			</table>
		</div>
	)
}

export default Livros