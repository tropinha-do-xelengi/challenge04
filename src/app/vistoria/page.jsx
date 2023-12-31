"use client";
import "./vistoria.css";
import { useState } from "react";

export default function Vistoria() {
    const [novaBicicleta, setNovaBicicleta] = useState({
        marca: "",
        tipo: "",
        modelo: "",
        preco: "",
        dataCompra: "", });
    
        const handleChange = (evt) => {
        const { name, value } = evt.target;
        setNovaBicicleta({ ...novaBicicleta, [name]: value });  };
    
        const handleCadastro = async  (evt) => {
            evt.preventDefault();
    
                try {
                const response = await fetch("http://localhost:8080", {
                    method: "POST",
                    body: JSON.stringify(novaBicicleta),
                });
    
            const resultado = await response.json();
            console.log(resultado)
            console.log(resposta.status)
            window.location.href = "/";
        
                } catch (error) {
                alert("Seu cadastro não funcionou, tente novamente: " + error.message);
                } };

    return (
        <> 
            <div id="lin_grad">
                <h1 className=" p-5 text-center text-black text-3xl justify-center"><strong> Bem Vindo(a) sua Vistoria!! </strong></h1> <br />
                    <p className="text-center text-base"> A partir daqui, você será guiado(a) pela nossa interface personalizada durante as fotografias da sua bike, mas antes, por favor preencha os dados a seguir: </p>

                <div className="form" onSubmit={handleCadastro}>
                    <form action="#" className="form-vistoria"> 
                        <fieldset className="form-vistoria-holder"> 
                            <h3 className="p-5 text-center text-2xl"><strong> Bike da Porto Seguro</strong></h3>

                            <div className="form-texto">
                                <input class="formulario" type="text" name="preco" id="idPreco" placeholder="Qual o valor da sua Bike?" value={novaBicicleta.preco} onChange={handleChange}/>
                            </div>
                            
                            <div className="form-texto">
                                <input class="formulario" type="text" name="modelo" id="idModelo" placeholder="Qual o modelo da sua Bike?" value={novaBicicleta.modelo} onChange={handleChange} />
                            </div>

                            <div className="form-texto"> 
                                <input className="formulario" type="text" name="tipo"  id="idTipo" placeholder="Qual o tipo de bicicleta?" value={novaBicicleta.tipo} onChange={handleChange} />
                            </div> 
                            
                            <div className="form-texto">
                                <label for="txtDataCompra" id="lblData">Qual a data da compra da sua bike?</label>
                                <input class="formulario" type="date" name="dataCompra" id="idDataCompra" placeholder="Qual a data da compra?" value={novaBicicleta.dataCompra} onChange={handleChange}/>
                            </div>
                            
                                    <div className="flex items-center justify-center rounded-b-xl ">
                                            <button className="border-2 border-blue-600 rounded-2xl text-blue-600 p-1 px-3 m-3">
                                                Iniciar Vistoria
                                            </button>
                                    </div>
                        </fieldset>
                    </form> 
                </div>

                <div> 
                    <a href="/">
                        <button className="botao-porto">
                            Projeto: Porto Seguro
                        </button>
                    </a>
                </div>


            </div> 
        </>
    )
}
