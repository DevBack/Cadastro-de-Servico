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
       getAll();
    }, [atualizar]);

    function getAll(){
        axios.get("http://localhost:8080/servicos/").then(result=>{
            setServicos(result.data);
        });
    }

    function getPendentes(){
        axios.get("http://localhost:8080/servicos/pendentes").then(result=>{
            setServicos(result.data);
        });
    }

    function getCancelados(){
        axios.get("http://localhost:8080/servicos/cancelados").then(result=>{
            setServicos(result.data);
        });
    }

    function handleChange(event){
        setServico({...servico,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault();
        if(servico.id){
            axios.put("http://localhost:8080/servicos/", servico).then(result=>{
                setAtualizar(result);
            });
        }
        else {
            axios.post("http://localhost:8080/servicos/", servico).then(result=>{
                setAtualizar(result);
            });
        }
        formClean();
    }

    function formClean(){
        setServico(
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
    }

    function remove(id){
        axios.delete("http://localhost:8080/servicos/" + id).then(result=>{
            setAtualizar(result);
        });
    }

    function cancel(id){
        axios.post("http://localhost:8080/servicos/" + id).then(result=>{
            setAtualizar(result);
        });
    }

  return (
      
      <div className="container-sm text-center position-relative">
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="row py-4">
                        <div className="col-sm-6">
                        <label className="form-label">Cliente</label>
                        <input onChange={handleChange} value={servico.cliente} type="text" className="form-control" placeholder="Nome do Cliente" name="cliente" />
                        </div>
                        <div className="col-sm">
                        <label className="form-label">Data de In??cio</label>
                        <input onChange={handleChange} value={servico.dataInicio} type="date" className="form-control" placeholder="Data de In??cio" name="dataInicio" />
                        </div>
                        <div className="col-sm">
                        <label className="form-label">Data de T??rmino</label>
                        <input onChange={handleChange} value={servico.dataFim} type="date" className="form-control" placeholder="Data de T??rmino" name="dataFim" />
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
                            <label className="form-label">Descri????o</label>
                            <textarea onChange={handleChange} value={servico.descricao} class="form-control" placeholder="Descri????o" name="descricao"></textarea>
                            <br/>
                        </div> 
                    </div>
                </div>
                <input class="btn btn-success" type="submit" value="Cadastrar" />&nbsp;
                <input onClick={formClean} class="btn btn-secondary" type="button" value="Limpar" />&nbsp;
                </form>
            </div>
        <hr/><hr/>
          <input onClick={getAll} class="btn btn-outline-secondary" type="button" value="Todos" />&nbsp;
          <input onClick={getPendentes} class="btn btn-outline-danger" type="button" value="Pendentes" />&nbsp;
          <input onClick={getCancelados} class="btn btn-outline-warning" type="button" value="Cancelados" />&nbsp;
        <br/>
        <br/>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">Descri????o</th>
                <th scope="col">Valor</th>
                <th scope="col">Status</th>
                <th scope="col">Op????es</th>
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
                            <td>
                                {servico.status!='Cancelado' &&
                                    <button onClick={()=>setServico(servico)} className="btn btn-primary btn-sm">Alterar</button>
                                }
                                &nbsp;
                                {servico.status!='Cancelado' &&
                                    <button onClick={()=>remove(servico.id)} className="btn btn-danger btn-sm">Excluir</button>
                                }
                                &nbsp;
                                {servico.status!='Cancelado' &&
                                    <button onClick={()=>cancel(servico.id)} className="btn btn-warning btn-sm">Cancelar</button>
                                }
                            </td>
                        </tr>
                    ))
                }     
            </tbody>
        </table>
      </div>

  );
}

export default Servico;