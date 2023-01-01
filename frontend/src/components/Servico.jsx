import './Servico.css';

function Servico() {
  return (
      
      <div className="container-sm texte-center">
        <form>
          <div className="row py-4">
            <div className="col-sm-7">
              <label className="form-label">Cliente</label>
              <input type="text" className="form-control" placeholder="Nome do Cliente" name="cliente" />
            </div>
            <div className="col-sm">
              <label className="form-label">Data de Início</label>
              <input type="date" className="form-control" placeholder="Data de Início" name="dataInicio" />
            </div>
            <div className="col-sm">
              <label className="form-label">Data de Término</label>
              <input type="date" className="form-control" placeholder="Data de Término" name="dataFim" />
            </div>
          <div className="row g-4">  
              <div className="col-sm">
                <label className="form-label">Valor</label>
                <input type="text" className="form-control" placeholder="Valor" name="valor" />
              </div>
              <div className="col-sm">  
                <label className="form-label">Valor Pago</label>
                <input type="text" className="form-control" placeholder="Valor Pago" name="valorPago" />
              </div>
              <div className="col-sm">
                <label className="form-label">Data do Pagamento</label>
                <input type="date" className="form-control" placeholder="Data do Pagamento" name="dataPagamento " />
              </div>
              <div className="col-sm">
                <label className="form-label">Status</label>
                <select class="form-select" aria-label="Default select example" name="status">
                  <option selected>Pendente</option>
                  <option value="1">Realizado</option>
                  <option value="2">Cancelado</option>
                </select>
              </div>
              <div className="col-sm-12">
                <label className="form-label">Descrição</label>
                <textarea class="form-control" placeholder="Descrição" name="descricao"></textarea>
              </div> 
          </div>
          </div>
        </form>
      </div>
      
  );
}

export default Servico;