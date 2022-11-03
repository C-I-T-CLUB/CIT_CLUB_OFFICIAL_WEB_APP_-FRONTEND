import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';
import './../assets/css/projects.css';
var projects = [
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },
  {
    "id":uuidv4(),
    "title": "rending",
    "description": " This is all about the trending songs",
    "owner": "MMU",
    "sponsor": "CIT club",
    "url":"https://"
  },

]
// console.log(projects)
function Projects() {

  // const testJson = () => {
  //   // console.log('hello world')
  // }

  // testJson();
  return (
    <div>
      <h1 class="text-center">Projects</h1>
      <div className='cardContainer'>

        {projects.map((item) => {
          return (
            <div key={item.id} className='cards' style={{ border: '2px solid #1F64BD' }}>
              {/* fetch the pictures here */}
              {/* should have been input wit other parameters */}
              <img src={require('../assets/cit club design/pexels-designecologist-1779487.jpg')} alt="project1" className="pro_img cards-img-bt-space" />
              <h4>Project Title:{item.title}</h4>
              <p> About:{item.description}</p>
              <h6> Project Owner:{item.owner}</h6>
              <h6>Project Sponsor:{item.sponsor}</h6>
              {/* link to be provided too */}
              <Link to={item.url} target="_blank" className="view_resources_btn">
                view project
              </Link>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Projects