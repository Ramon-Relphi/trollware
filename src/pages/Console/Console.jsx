import { Pages } from '../../constants'
import { setStorageValue } from '../../services/storage/storage'

function Console() {
    setStorageValue('page', Pages.INFECTED)

    return (
        <div className="w-scren flex h-screen flex-col items-center justify-center gap-2 bg-[#000a07]">
            <div className="flex h-auto w-auto flex-col items-start justify-center gap-2">
                <p className="ubuntu-light text-sm text-green-500">
                    Infecção Confirmada ✔
                </p>
                <p className="ubuntu-light text-sm text-green-500">
                    Virus Injetado e Ativo ✔
                </p>
                <p className="ubuntu-light text-sm text-purple-500">
                    Propagando-se na rede...
                </p>
                <p className="ubuntu-light text-sm text-green-500">
                    Rede Contaminada ✔
                </p>
                <p className="ubuntu-light text-sm text-purple-500">
                    Enviando Dados Sensíveis...
                </p>
                <p className="ubuntu-light text-sm text-yellow-500">
                    Operação de Dados Interceptada ⚠
                </p>
                <p className="ubuntu-light text-sm text-purple-500">
                    Desbloqueando Operação de Dados...
                </p>
                <p className="ubuntu-light text-sm text-green-500">
                    Operação de Dados Liberada ✔
                </p>
                <p className="ubuntu-light text-sm text-purple-500">
                    Enviando Dados Sensíveis...
                </p>
                <p className="ubuntu-light text-sm text-green-500">
                    Dados Enviados com Sucesso [4.42s] ✔
                </p>
                <p className="ubuntu-light text-sm text-purple-500">
                    Ativando Virus em Background...
                </p>
                <p className="ubuntu-light text-sm text-green-500">
                    Virus Ativo em Background ✔
                </p>
                <p className="ubuntu-light text-sm text-purple-500">
                    Ativando Transmissão de Dados em Background...
                </p>
                <p className="ubuntu-light text-sm text-green-500">
                    Transmissão de Dados Ativa em Background ✔
                </p>
                <p className="ubuntu-light text-sm text-green-500">
                    Remoção do Virus Bloqueada ✔
                </p>
            </div>
        </div>
    )
}

export default Console
