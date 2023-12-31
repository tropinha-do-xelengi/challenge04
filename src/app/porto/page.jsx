import Image from "next/image";
export default function Porto() {
    return ( 
    <> 
      <div id="lin_grad">
        <div className="flex justify-between"> 
                <div className="border-2 border-black rounded-md px-5 m-5">
                        <h1 className="text-4xl font-bold p-3"> Seguro Bike da Porto Seguro</h1>
                            <p> Seja bem-vindo! Ao Seguro de Bike da Porto Seguro
                                    <br />
                                Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.
                            </p>

                            <a href="/vistoria">
                                <button className="border-2 border-blue-800 rounded-2xl text-black shadow-sm p-1 px-3 m-5 font-bold">
                                    CONTRATE JÁ  
                                </button>
                            </a>

                            <a href="/">
                                <button className="border-2 border-blue-600 rounded-2xl text-black shadow-sm p-1 px-3 m-5 font-bold ">
                                    Projeto: Porto Seguro
                                </button>
                            </a>
                    
                    </div>
                        <div className="flex justify-end m-2">
                                <Image
                                    src="/img/ciclista2.png"
                                    alt="Criança brincando em uma bicicleta"
                                    width={206}
                                    height={10} />
            
                                <Image
                                    src="/img/ciclista3.png"
                                    alt="Um casal utilizando uma bicicleta"
                                    width={206}
                                    height={50} />

                                <Image
                                    src="/img/ciclista1.png"
                                    alt="Uma pessoa andando de bike"
                                    width={220}
                                    height={50} />
                    </div>
            </div>

            <div className="px-10"> 
                <h1 className="text-2xl"> Com o Seguro Bike da Porto Seguro, é pedalar e relaxar </h1>
                    <p className="mb-4"> O Seguro Bike é uma solução completa, que cuida não só da bicicleta e do ciclista, mas dos terceiros. <br />
                        São garantias e serviços pensados para cada modelo e perfil de cliente, com contratação simples e rápida, sem burocracia.</p>
            
                <h1 className="text-2xl "> Conheça as coberturas </h1>
                    <p className="mb-8"> Informações resumidas. Para mais detalhes, consulte as condições gerais. <br /> 
                        As coberturas de responsabilidade civil organizador ou expositor são coberturas básicas e obrigatórias. As coberturas adicionais não poderão ser contratadas isoladamente. </p>
            
            </div>

            <div className="px-10 flex justify-evenly mb-10">
                <div className="flex items-center">
                    <div className="mr-4">
                        <Image 
                            src="/img/bike.png"
                            alt="Png bike"
                            width={55}
                            height={55}  />
                    </div>
                <div>
                    <h4 className="text-1xl font-bold mb-2"> Danos à Bike </h4>
                    <p className="text-sm">Cobre os danos causados por incêndio, queda, <br /> tentativa de roubo
                    e, ainda, situações em que a <br /> bicicleta estiver sendo levada por um <br /> veículo transportador.</p>
                </div>
            </div>

                <div className="flex items-center">
                    <div className="mr-4"> 
                        <Image 
                            src="/img/ladrao.png"
                            alt="Png bike"
                            width={55}
                            height={55}  />
                    </div>
                    <div> 
                        <h4 className="text-1xl font-bold mb-2"> Subtração da Bike </h4>
                        <p className="text-sm">Cobre contra roubo, ou seja, quando há ameaça direta <br />   
                        ou uso de violência ao segurado ou arrombamento <br /> do local onde a bicicleta estiver guardada.</p>
                    </div>
                </div>
    
                <div className="flex items-center">
                    <div className="mr-4"> 
                        <Image 
                            src="/img/doente.png"
                            alt="Png bike"
                            width={55}
                            height={55}  />
                    </div>
                    <div> 
                        <h4 className="text-1xl font-bold mb-2"> Acidentes Pessoais </h4>
                        <p className="text-sm">Cobre as despesas em casos de morte acidental <br/> e invalidez permanente (total ou parcial) 
                        <br /> decorrente de acidente, além das despesas médicas, <br /> hospitalares e odontológicas.</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="mr-4"> 
                        <Image 
                            src="/img/mundo.png"
                            alt="Png bike"
                            width={55}
                            height={55}  />
                    </div>
                    <div> 
                        <h4 className="text-1xl font-bold mb-2"> Cobertura Internacional </h4>
                        <p className="text-sm">Possibilita a extensão das garantias contratadas <br/> 
                        para sinistros que ocorrerem fora do Brasil.</p>
                    </div>
                </div>
            </div>

            <div className="px-10 flex justify-evenly mb-20"> 
                <div className="flex items-center">
                    <div className="mr-4">  
                        <Image 
                            src="/img/bolsa.png"
                            alt="Png bolsa"
                            width={55}
                            height={55} /> 
                    </div> 

                    <div>
                        <h4 className="text-1xl font-bold mb-2">Bike Bagagem</h4> 
                        <p className="text-sm"> Cobre o extravio da bicicleta em viagens aéreas  e/ou rodoviárias, durante o trajeto <br />de ida e volta  de viagem do segurado, desde que tenha <br /> com o ticket de embarque. </p>
                    </div>
                </div> 

                <div className="flex items-center">
                    <div className="mr-4">  
                        <Image 
                            src="/img/escudo.png"
                            alt="Png bolsa"
                            width={55}
                            height={55} /> 
                    </div> 

                    <div>
                        <h4 className="text-1xl font-bold mb-2">Danos à Terceiros</h4> 
                        <p className="text-sm"> Cobre os danos materiais e/ou corporais causados a <br /> terceiros durante o uso da sua bicicleta. </p>
                    </div>
                </div> 

                <div className="flex items-center">
                    <div className="mr-4">  
                        <Image 
                            src="/img/raio.png"
                            alt="Png bolsa"
                            width={55}
                            height={55} /> 
                    </div> 

                    <div>
                        <h4 className="text-1xl font-bold mb-2">Danos Elétricos</h4> 
                        <p className="text-sm"> Cobre os danos causados por oscilações de energia, descargas elétricas <br /> e curtos-circuitos em bikes elétricas. </p>
                    </div> 
                </div>
            </div> 

            <div className="px-10 mb-10"> 
                <h1 className="text-2xl"> Todo cuidado é Porto: seguro completo e com serviços para a sua bike.</h1>
                    <p className="mb-4"> Além de ser o seguro mais completo do mercado, com o Seguro Bike da Porto Seguro, você conta agora com novos planos de serviços que trarão muito mais segurança para você e cuidados para a sua bicicleta.</p>
            </div>

            <div className="px-10 mb-4"> 
                <h1 className="text-2xl mb-5"> Conheça nossos planos de serviços: </h1>
                </div>
                
                    <div className='px-5'>
                    <Image 
                        src="/img/pedal-essencial.png" 
                        alt="Conserto" 
                        width={200} 
                        height={55}/>
                            <h2 className="text-xl font-bold">Pedal Essencial </h2>
                        <h3 className="mb-2">O plano gratuito* para você experimentar um dos serviços essenciais oferecidos, de acordo com as suas necessidades.</h3> 
                        <a href="https://www.portoseguro.com.br/conteudo/seguros/bike/">
                                <button className="border-2 border-blue-600 rounded-2xl text-black shadow-sm p-1 px-3 font-bold mb-6 ">
                                    Saiba Mais
                                </button>
                            </a>
                    </div>

                    <div className='px-5'>
                    <Image 
                        src="/img/pedal-leve.png" 
                        alt="Conserto" 
                        width={200} 
                        height={55}/>
                            <h2 className="text-xl font-bold">Pedal Leve </h2>
                        <h3  className="mb-2">Você gosta de pedalar e está buscando um plano de serviços intermediário? O Pedal leve da Porto é para você.</h3> 
                        <a href="https://www.portoseguro.com.br/conteudo/seguros/bike/">
                                <button className="border-2 border-blue-600 rounded-2xl text-black shadow-sm p-1 px-3 font-bold mb-6 ">
                                    Saiba Mais
                                </button>
                            </a>
                    </div>

                    <div className='px-5'>
                    <Image 
                        src="/img/pedal-elite.png" 
                        alt="Conserto" 
                        width={200} 
                        height={55}/>
                            <h2 className="text-xl font-bold">Pedal Elite </h2>
                        <h3  className="mb-2">Conte com diversos serviços capazes de elevar suas aventuras para o próximo nível.</h3> 
                        <a href="https://www.portoseguro.com.br/conteudo/seguros/bike/">
                                <button className="border-2 border-blue-600 rounded-2xl text-black shadow-sm p-1 px-3 font-bold">
                                    Saiba Mais
                                </button>
                            </a>
                    </div>



        </div>
    </>
    )
}

