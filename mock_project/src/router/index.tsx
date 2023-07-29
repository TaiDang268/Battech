import { useRoutes } from 'react-router'
import Input from '~/components/Input'
import Main from '~/pages/Main'

const routers = [
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/input',
    element: <Input />
  }
]
export default function Routers() {
  return useRoutes(routers)
}
