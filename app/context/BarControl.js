'use client'

import { createContext, useState } from 'react';
export const BarContext = createContext();
const BarControl = ({ children }) => {
    const [categoryBar, setCategoryBar] = useState(false)
    const [settingBar, setSettingBar] = useState(false)
    return (
        <BarContext.Provider value={{ categoryBar, setCategoryBar, settingBar, setSettingBar }}>{children}</BarContext.Provider>
    )
}

export default BarControl