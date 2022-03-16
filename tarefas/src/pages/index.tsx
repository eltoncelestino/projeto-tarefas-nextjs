import type { NextPage } from 'next'
import Tarefa from '../model/Tarefa'

const Home: NextPage = () => {
  let tarefa: Tarefa = new Tarefa(1, "NextJS")
  tarefa = tarefa.alternarStatus()

  return (
    <div className="">
      <span>{tarefa.id}</span>
      <span>{tarefa.descricao}</span>
      <span>{tarefa.concluida ? 'sim' : 'não'}</span>
    </div>
  )
}

export default Home
