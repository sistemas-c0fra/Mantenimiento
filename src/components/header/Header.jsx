import React from 'react'
import { Navbar } from 'flowbite-react';

export function Header() {
    return (
        <Navbar rounded className='w-9/12 h-20 flex items-center'>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Mantenimiento
                </span>
            </Navbar.Brand>

            <Navbar.Collapse>
                <Navbar.Link href="/">
                    <p>Inicio</p>
                </Navbar.Link>
                <Navbar.Link href="/maquinas">
                    Maquinas
                </Navbar.Link>
                <Navbar.Link href="#">
                    ----
                </Navbar.Link>
                <Navbar.Link href="#">
                    ----
                </Navbar.Link>
                <Navbar.Link href="#">
                    ----
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
