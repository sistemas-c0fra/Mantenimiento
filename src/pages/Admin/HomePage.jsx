import React from 'react'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom'

export function HomePage() {
    return (
        <div className='flex justify-center w-9/12 gap-12'>
            <Link to={'/maquinas'}>
                <Button size='xl'>
                    Maquinas
                </Button>
            </Link>
            <Button size='xl'>
                <Link to={'/partes'}>
                    Partes
                </Link>
            </Button>
        </div>
    )
}
