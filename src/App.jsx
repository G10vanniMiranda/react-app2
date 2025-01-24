import './App.css'

function App() {
  return (
    <div className="container">
      <h1 className="mt-3 mb-3">Cadastro de Produtos</h1>

      <form>

        <div className="row mb-3">

          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do Produto"
            />
          </div>

          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Quantidade"
            />
          </div>

          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Preço"
            />
          </div>

        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Url da imagem"
            />
          </div>
        </div>

        <div className="btn-group d-flex gap-3">
          <button className='btn btn-outline-success'>Inserir</button>
          <button className='btn btn-outline-primary'>Salvar</button>
        </div>

      </form>

      <table className="table">

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Imagem</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <th scope="row">1</th>
            <td>Alienware m16</td>
            <td>14.999,90</td>
            <td>4</td>
            <td>
              <img
                width={50}
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-r2-intel/media-gallery/laptop-aw-m16r2-nt-bk-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=510&qlt=100,1&resMode=sharp2&size=510,402&chrss=full"
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

          <tr>
            <th scope="row">1</th>
            <td>NoteBook G15</td>
            <td>8499,90</td>
            <td>8</td>
            <td>
              <img
                width={50}
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/gray/non-touch/coral/notebook-laptop-g15-5530-gray-gallery-1-v2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=554&qlt=100,1&resMode=sharp2&size=554,402&chrss=full"
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

          <tr>
            <th scope="row">1</th>
            <td>Alienware m16</td>
            <td>15000,90</td>
            <td>4</td>
            <td>
              <img
                width={50}
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-r2-intel/media-gallery/laptop-aw-m16r2-nt-bk-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=510&qlt=100,1&resMode=sharp2&size=510,402&chrss=full"
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

          <tr>
            <th scope="row">1</th>
            <td>Alienware m16</td>
            <td>15000,90</td>
            <td>4</td>
            <td>
              <img
                width={50}
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-r2-intel/media-gallery/laptop-aw-m16r2-nt-bk-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=510&qlt=100,1&resMode=sharp2&size=510,402&chrss=full"
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

        </tbody>

      </table>
    </div>
  )
}

export default App
