import React, { useEffect, useState } from 'react'
import { InfoGeralContainer } from '../components/InfoGeralContainer'
import { ContainerChecagem } from '../components/ContainerChecagem'




const DashboardProjeto = () => {

const pontuacaoGeral = 40;

const [comentarioGeral, setComentarioGeral] = useState("")

const pontuacaoConformidade = 40;

const [comentConform, setComentConform] = useState("")



const trocarComentario = () => {

    if (pontuacaoGeral >= 50){
        setComentario("Ta razoável, ainda não aprovado craque");
    } else if(pontuacaoGeral >=70 ){
        setComentario("Conformidade padrão, há pontos a melhorar");
    } else if(pontuacaoGeral >= 90){
        setComentario("Excelente conformidade");
    } else if (pontuacaoGeral <= 20) {
        setComentario("Erros críticos a serem revisados");
    }
}

  return (
    <div className='d-flex flex-column gap-2'>

    <div className='my-3 d-flex flex-row p-3 gap-3'>
        <InfoGeralContainer
        topico={"Pontuação Geral"}
        iconeTopico={"bi-rocket-takeoff"}
        corNumero={"primary"}
        pontuacaoGeral={"90"}
        comentario={"Excelente conformidade"}
        />

<InfoGeralContainer
        topico={"Pontuação Geral"}
        iconeTopico={"bi-rocket-takeoff"}
        corNumero={"success"}
        pontuacaoGeral={pontuacaoGeral}
        comentario={comentario}
        />
    </div>

<div>
    <ContainerChecagem />
</div>
    </div>

  )
}

export default DashboardProjeto