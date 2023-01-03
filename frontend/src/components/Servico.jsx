import React, {useEffect, useState} from 'react';
import './Servico.css';
import axios from 'axios';

function Servico() {

    const [servico, setServico] = useState(
        {
            id:'',
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
    const [atualizar, setAtualizar] = useState();

    useEffect(()=>{
        axios.get("http://localhost:8080/servicos/").then(result=>{
            setServicos(result.data);
        })
    }, [atualizar]);

    function handleChange(event){
        setServico({...servico,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8080/servicos/", servico).then(result=>{
            setAtualizar(result);
        });
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
              <div className="col-sm-12">
                <label className="form-label">Descrição</label>
                <textarea onChange={handleChange} value={servico.descricao} class="form-control" placeholder="Descrição" name="descricao"></textarea>
                <br/>
              </div> 
          </div>
          </div>
          <input class="btn btn-success" type="submit" value="Cadastrar" />
        </form>
        <hr/><hr/>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Valor</th>
                <th scope="col">Status</th>
                <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    servicos.map(servico => (
                        <tr key={servico.id}>
                            <td>{servico.cliente}</td>
                            <td>{servico.descricao}</td>
                            <td>{servico.valor}</td>
                            <td>{servico.status}</td>
                            <td></td>
                        </tr>
                    ))
                }     
            </tbody>
        </table>
      </div>

  );
}

export default Servico;