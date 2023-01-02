import React, {useEffect, useState} from 'react';
import './Servico.css';
import axios from 'axios';

function Servico() {

    const [servico, setServico] = useState(
        {
            cliente:'',
            dataInicio:'',
            dataFim:'',
            valor:'',
            valorPago:'',
            dataPagamento:'',
            status:'',
            descricao:''
        }
    );

    const [servicos, setServicos] = useState([]);

    function handleChange(event){
        setServico({...servico,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(servico);
    }

  return (
      
      <div className="container-sm texte-center">
        <form onSubmit={handleSubmit}>
          <div className="row py-4">
            <div className="col-sm-7">
              <label className="form-label">Cliente</label>
              <input onChange={handleChange} value={servico.cliente} type="text" className="form-control" placeholder="Nome do Cliente" name="cliente" />
            </div>
            <div className="col-sm">
              <label className="form-label">Data de Início</label>
              <input onChange={handleChange} value={servico.dataInicio} type="date" className="form-control" placeholder="Data de Início" name="dataInicio" />
            </div>
            <div className="col-sm">
              <label className="form-label">Data de Término</label>
              <input onChange={handleChange} value={servico.dataFim} type="date" className="form-control" placeholder="Data de Término" name="dataFim" />
            </div>
          <div className="row g-4">  
              <div className="col-sm">
                <label className="form-label">Valor</label>
                <input onChange={handleChange} value={servico.valor} type="text" className="form-control" placeholder="Valor" name="valor" />
              </div>
              <div className="col-sm">  
                <label className="form-label">Valor Pago</label>
                <input onChange={handleChange} value={servico.valorPago} type="text" className="form-control" placeholder="Valor Pago" name="valorPago" />
              </div>
              <div className="col-sm">
                <label className="form-label">Data do Pagamento</label>
                <input onChange={handleChange} value={servico.dataPagamento} type="date" className="form-control" placeholder="Data de Pagamento" name="dataPagamento" />
              </div>
              <div className="col-sm">
                <label className="form-label">Status</label>
                <select onChange={handleChange} value={servico.status} class="form-select" aria-label="Default select example" name="status">
                  <option selected >Pendente</option>
                  <option value="1">Realizado</option>
                  <option value="2">Cancelado</option>
                </select>
              </div>
              <div className="col-sm-12">
                <label className="form-label">Descrição</label>
                <textarea onChange={handleChange} value={servico.descricao} class="form-control" placeholder="Descrição" name="descricao"></textarea>
                <br/>
              </div> 
          </div>
          </div>
          <input class="btn btn-success" type="submit" value="Cadastrar" />
        </form>
      </div>

  );
}

export default Servico;