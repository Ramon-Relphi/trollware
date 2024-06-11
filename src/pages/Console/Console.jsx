import { Pages, ConsoleLogs } from '../../constants'
import { setStorageValue } from '../../services/storage/storage'

function Console() {
    setStorageValue('page', Pages.INFECTED)

    return (
        <div className="w-screen flex h-screen flex-col items-center justify-center gap-2 bg-[#000a07]">
            <div className="flex h-auto w-auto flex-col items-start justify-center gap-2">
                {ConsoleLogs.map((item, index) => (
                    <p
                        key={index}
                        className={`ubuntu-light text-sm ${item.color}`}
                    >
                        {item.text}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Console
