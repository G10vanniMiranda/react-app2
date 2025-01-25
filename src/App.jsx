import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const url = 'http://localhost:3000/produtos';

  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [foto, setFoto] = useState('');

  const [classInserir, setClassInserir] = useState('');
  const [classAlterar, setClassAlterar] = useState('sumir');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((res) => setData(res.data))
  }, [data, setData]);

  const Inserir = () => {
    axios.post(url, {
      produto, valor, quantidade, foto
    })
  }

  const Cadastrar = (e) => {
    e.preventDefault();

    if (produto === '') {
      alert('Informe o nome do produto')
    } else if (valor === '') {
      alert('Informe o valor do produto')
    } else if (quantidade === '') {
      alert('Informe a quantidade do produto')
    } else if (foto === '') {
      alert('Informe a url da imagem do produto')
    } else {
      alert('Produto cadastrado com sucesso')
      Inserir();
      setProduto('');
      setValor('');
      setQuantidade('');
      setFoto('');
    }
  }

  return (
    <div className="container">
      <h1 className="mt-3 mb-5 text-center">Cadastro de Produtos</h1>

      <form onSubmit={Cadastrar} className='mb-5'>

        <div className="row mb-3">

          <div className="col">
            <input
              type="text"
              value={produto}
              className="form-control"
              placeholder="Nome do Produto"
              onChange={(e) => setProduto(e.target.value)}
            />
          </div>

          <div className="col">
            <input
              type="text"
              value={valor}
              className="form-control"
              placeholder="Valor"
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="col">
            <input
              type="text"
              value={quantidade}
              className="form-control"
              placeholder="Quantidade"
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>

        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              value={foto}
              className="form-control"
              placeholder="Url da imagem"
              onChange={(e) => setFoto(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className={`btn btn-outline-success ${classInserir}`}>Inserir</button>
        <button type="submit" className={`btn btn-outline-primary ${classAlterar}`}>Salvar</button>

      </form>

      <table className="table">

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Valor</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Imagem</th>
            <th scope="col" className='text-center'>Ações</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.produto}</td>
              <td>{item.valor}</td>
              <td>{item.quantidade}</td>
              <td>
                <img
                  width={50}
                  src={item.foto}
                  alt="Imagem do Produto"
                />
              </td>
              <td>
                <div className="btn-group d-flex gap-1">

                  <button className='btn btn-outline-warning'>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>

                  <button className='btn btn-outline-danger'>
                    <i className="fa-solid fa-trash"></i>
                  </button>

                </div>
              </td>
            </tr>
          ))

          }

        </tbody>

      </table>
    </div>
  )
}

export default App