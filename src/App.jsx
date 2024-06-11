import Boot from './pages/Boot/Boot'
import Console from './pages/Console/Console'
import Infected from './pages/Infected/Infected'

import { Pages } from './constants'
import { getStorageValue } from './services/storage/storage'

const pagesMap = {
    [Pages.BOOT]: Boot,
    [Pages.CONSOLE]: Console,
    [Pages.INFECTED]: Infected,
}

function App() {
    const PageComponent = pagesMap[getStorageValue('page', Pages.BOOT)]
    return PageComponent ? <PageComponent /> : null
}

export default App
