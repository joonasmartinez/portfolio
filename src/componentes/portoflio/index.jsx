import React, {useState, useEffect, useRef} from "react";
import { Project } from "../projects";
import {BsArrowRightSquare} from 'react-icons/bs'
import {BsArrowLeftSquare} from 'react-icons/bs'
import * as C from './styles';

export const Portfolio = ()=>{

    const [repos, setRepos] = useState([{}]);
    const Rolar = useRef(null) 

    useEffect(()=>{
        fetch('https://api.github.com/users/joonasmartinez/repos', {method:'GET'}).then(res => res.json()).then(repo => setRepos(repo))

    }, [])


    return (
        <>
        <C.Window>
            <C.RowIcon onClick={()=>{Rolar.current.scrollLeft -= Rolar.current.offsetWidth}}>
                <BsArrowLeftSquare/>
            </C.RowIcon>
            <C.Basic ref={Rolar}>
                {console.log(repos)}
                {repos != {} ? repos.map(repo => <Project Title={repo.name} Desc={repo.description} Updated={repo.updated_at} Repo={repo.html_url} Home={repo.homepage}/>) : <h3>Problemas em localizar projetos.</h3>}
        
            </C.Basic>
            <C.RowIcon onClick={()=>{Rolar.current.scrollLeft += Rolar.current.offsetWidth}}>
                <BsArrowRightSquare/>
            </C.RowIcon>
        </C.Window>
        </>
    )
}