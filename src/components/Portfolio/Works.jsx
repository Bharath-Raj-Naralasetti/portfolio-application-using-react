import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { ProjectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    const [item, setItem] = useState({name:"All"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(()=>{
        if(item.name === "All"){
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((project)=>{
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    },[item]);

    const handleClick = (e, index) =>
    {
        setItem({name: e.target.textContent});
        setActive(index);
    }
  return (
    <div>
        <div className="work__filters">
        {ProjectsNav.map((item, index)=>{
            return(
            <span className={`${active === index ? 'active-work': ''} work__item`} onClick={(e)=>{handleClick(e, index);}} key={index}>{item.name}</span>)
        })}
    </div>

    <div className="work__container container grid">
        {projects.map((item)=>{
            return <WorkItems item={item} key={item.id}/>
        })}
    </div>
    </div>
  )
}

export default Works
