import { Pages } from '../../constants'
import { setStorageValue } from '../../services/storage/storage'

function Boot() {
    const handleTimeout = () => {
        setStorageValue('page', Pages.CONSOLE)
        window.location.reload()
    }

    setTimeout(handleTimeout, 10000)

    return (
        <div className="w-screen flex h-screen flex-col items-center justify-center bg-[#04030c]">
            <div className="h-auto w-auto animate-bounce">
                <div className="flex h-20 w-20 animate-spin items-center justify-center rounded-full bg-gradient-to-tr from-[#ff3c3c] to-[#ffaa3c]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#04030c]">
                        <p className="animate-spin text-3xl font-bold text-[#8987e477]"></p>
                    </div>
                </div>
            </div>
            <p className="mt-10 animate-pulse font-medium text-white ubuntu-regular">
                Instalando ...
            </p>
            <p className="mt-2 text-xs text-yellow-700 ubuntu-light">
                Não feche o App durante a instalação.
            </p>
        </div>
    )
}

export default Boot
