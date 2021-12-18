import { useState } from 'react'

import BtnGroup from './btngroup'
import BtnUI from './btnui'
import Logo from './logo'
import Nav from './nav'
import Overlay from './overlay'
import styles from './header.module.scss'

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false)
    const [isSearchVisible, setSeachVisible] = useState(false)

    return <header className={styles.header}> 
        {isMenuVisible &&
            <Overlay
                type="menu"
                closeHandler={setMenuVisible} 
            />
        }
        {isSearchVisible &&
            <Overlay
                type="search"
                closeHandler={setSeachVisible} 
            />
        }
        <Logo />
        <Nav type="desktop" />
        <BtnGroup>
            <BtnUI icon="menu" clickHandler={() => {
                setMenuVisible(true)
            }} />
            <BtnUI icon="search" clickHandler={() => {
                setSeachVisible(true)
            }}/>
        </BtnGroup>
    </header>
    
}

export default Header 