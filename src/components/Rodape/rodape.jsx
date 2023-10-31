import Image from "next/image";

export default function Rodape () {
    return (
        <> 
            <footer className="bg-neutral-400 h-35 fixed w-full bottom-0">
            <div className="flex items-center justify-end rounded-b-xl border-t-2">

            <div> 
                <a href="https://www.portoseguro.com.br/pdc/login">
                    <button className="border-2 border-black rounded-2x1 text-black shadow-sm p-1 px-5 m-5">
                        Parceiros e Investidores
                    </button>
                </a>
            </div>

                <div className="flex items-center px-5 m-5">
                            <Image
                                src="/img/logo-porto02.png"
                                alt="Logo Porto"
                                width={100}
                                height={50}
                            />
                </div>

                <div className="text-white"> 
                    <p> Acompanhe a Porto nas redes sociais</p>
                       
                </div>
            </div>
            </footer>
        </>
    )
}

