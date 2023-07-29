import Button from '~/components/Button'
import { AiFillDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import Input from '~/components/Input'
import { useState } from 'react'

const Main = () => {
  const [name, setName] = useState('')
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    console.log(name)
  }
  return (
    <>
      <Button onClick={() => console.log('Hello')}>
        Add
        <AiFillDelete color='red' />
        <BsFillPencilFill />
      </Button>
      <Input type='text' onChange={handleNameChange} />
    </>
  )
}
export default Main
