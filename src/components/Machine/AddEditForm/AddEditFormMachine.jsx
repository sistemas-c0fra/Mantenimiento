import { Button, Label, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import Select from 'react-select'
import { useMaquinas } from '../../../hooks'

export function AddEditFormMachine(props) {
  const { areas, subareas, subzonas, refresh, close, maquina } = props
  const { addMaquina, updateMaquina } = useMaquinas()

  const formik = useFormik({
    initialValues: initialValues(maquina),
    validateOnChange: false,
    // validationSchema: validationSchema(),
    onSubmit: async (val) => {
      try {
        if (maquina) { await updateMaquina(val, maquina.id_maquina) }
        else { await addMaquina(val) }
        refresh()
        close()
      } catch (error) {
        console.warn(error)
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-3 gap-6" >
        <div className='flex flex-col gap-4'>
          <Label>Area</Label>
          <Select
            id='area'
            name='area'
            options={areas}
            value={formik.values.area}
            onChange={(val) => formik.setFieldValue('area', val)}
          />
          <Label>Maquina</Label>
          <TextInput
            type="text"
            id="maquina"
            value={formik.values.maquina}
            onChange={formik.handleChange}
          />
          <Label>Potencia - Capacidad</Label>
          <TextInput
            type="text"
            id="pot_cap"
            value={formik.values.pot_cap}
            onChange={formik.handleChange}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <Label htmlFor="input1" >Sub-Area</Label>
          <Select
            id='subarea'
            name='subarea'
            options={subareas}
            value={formik.values.subarea}
            onChange={(val) => formik.setFieldValue('subarea', val)}
          />
          <Label htmlFor="input1" >Marca</Label>
          <TextInput
            type="text"
            id="marca"
            value={formik.values.marca}
            onChange={formik.handleChange}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <Label htmlFor="input1" >Zona</Label>
          <Select
            id='subzona'
            name='subzona'
            options={subzonas}
            value={formik.values.subzona}
            onChange={(val) => formik.setFieldValue('subzona', val)}
          />
          <Label htmlFor="input1" >Modelo</Label>
          <TextInput
            type="text"
            id="modelo"
            value={formik.values.modelo}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <Button
        type='submit'
        className='mt-6 w-full'
        gradientMonochrome="info"
      >
        {maquina ? 'Actualizar' : 'Guardar'}
      </Button>
    </form>
  )
}

function initialValues(data) {
  return {
    area: data?.area_data || '',
    subarea: data?.subarea_data || '',
    subzona: data?.zona_data || '',
    maquina: data?.maquina || '',
    marca: data?.marca || '',
    modelo: data?.modelo || '',
    pot_cap: data?.pot_cap || ''
  }
}

// function validationSchema() {
//   return {

//   }
// }


