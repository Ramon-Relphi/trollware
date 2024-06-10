import Boot from './pages/Boot/Boot'
import Console from './pages/Console/Console'
import Infected from './pages/Infected/Infected'

import { Pages } from './constants/index'
import { getStorageValue } from './services/storage/storage'

function App() {
    const Page = () => {
        switch (getStorageValue('page', Pages.BOOT)) {
            case Pages.BOOT:
                return <Boot />

            case Pages.CONSOLE:
                return <Console />

            case Pages.INFECTED:
                return <Infected />
        }
        return null
    }

    return <Page />
}

export default App
