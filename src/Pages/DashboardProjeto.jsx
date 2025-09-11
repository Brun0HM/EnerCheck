import React, { useEffect, useState } from 'react'
import { InfoGeralContainer } from '../components/InfoGeralContainer'
import { ContainerChecagem } from '../components/ContainerChecagem'




const DashboardProjeto = () => {

const pontuacaoGeral = 80;

const [comentarioGeral, setComentarioGeral] = useState("")

const pontuacaoConformidade = 40;

const [comentConform, setComentConform] = useState("")



const trocarComentario = () => {

    if (pontuacaoGeral <= 50){
        setComentarioGeral("Ta razoável, ainda não aprovado craque");
    } else if(pontuacaoGeral >= 60 ){
        setComentarioGeral("Conformidade padrão, há pontos a melhorar");
    } else if(pontuacaoGeral >= 90){
        setComentarioGeral("Excelente conformidade");
    } else if (pontuacaoGeral <= 20) {
        setComentarioGeral("Erros críticos a serem revisados");
    }


}

useEffect(() => {
    trocarComentario();
}, [])

  return (
    <div className='d-flex flex-column gap-2'>

    <div className='my-3 d-flex flex-row p-3 gap-3'>
        <InfoGeralContainer
        topico={"Pontuação Geral"}
        iconeTopico={"bi-rocket-takeoff"}
        corNumero={"primary"}
        pontuacaoGeral={"80"}
        comentario={"Excelente conformidade"}
        />

<InfoGeralContainer
        topico={"Pontuação Geral"}
        iconeTopico={"bi-rocket-takeoff"}
        corNumero={"success"}
        pontuacaoGeral={pontuacaoGeral}
        comentario={comentarioGeral}
        />
    </div>

<div>
    <ContainerChecagem />
</div>
    </div>

  )
}

export default DashboardProjeto