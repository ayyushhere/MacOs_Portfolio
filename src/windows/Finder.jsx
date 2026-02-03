import { WindowControls } from '#components'
import { locations } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Search } from 'lucide-react'
import { useLocationStore } from '#store/location'
import clsx from 'clsx'
import React from 'react'

const Finder = () => {

    const { activeLocation, setActiveLocation } = useLocationStore();

    const renderList = (items) => 
        items?.map((item) => (
            <li key={item.id} onClick={
                () => setActiveLocation(item)
            } className={clsx(activeLocation.id === item.id ? 'active' : 'not-active')}>
                <img src={item.icon} className='w-4' alt={item.name} />
                <p className='text-sm font-medium truncate'>{item.name}</p>
            </li>
        ));


    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className='bg-white flex h-full'>
                <div className='sidebar'>
                    <div>
                        <h3>Favourites</h3>
                        <ul>
                            {renderList(Object.values(locations))}
                        </ul>
                    </div>
                    <div>
                        <h3>Work</h3>
                        <ul>
                            {renderList(locations.work.children)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;