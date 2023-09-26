import React from 'react'
import { TitleBar } from '../../components/titleBar'

export function PartPage() {
    return (
        <div className='flex flex-col justify-center w-9/12 h-4/5 gap-4'>
            <TitleBar title='Listado de Partes' />

            {/* {loading ? (
                <Loading />
            ) : (
                <>
                    <TableMachine maquinas={maquinas} areas={areas} refresh={onRefresh} update={updateMachine} deletem={deleteMachine} />
                </>
            )}
            <ModalBasic show={show} showOrHide={showOrHide} title={titleModal} children={component} /> */}
        </div>
    )
}
