import { useState } from 'react'

import './App.css'

const articles = [

  

]

function App() {

  const [titles, setTitles] = useState(articles)

  const [newTitle, setNewTitle] = useState ('')


  function addTitle(e){
    e.preventDefault()
    const newTitles = [newTitle, ...titles]

    setTitles(newTitles)

    setNewTitle('')

    console.log(newTitles);
    
  }

  function handleTrashBtn(e){
   console.log(e.target);
   const titleIndexToTrash = Number(e.target.getAttribute('data-index'))

   console.log(titles, titleIndexToTrash);

   const newTitles = titles.filter((title, index) => index != titleIndexToTrash)
   console.log(newTitles);

   setTitles(newTitles)
   
   
   
  }

  return (
    <>
    
      <div className='container'>
      <h2>Your Articles</h2>

      
        <form onSubmit={addTitle}>
          <div className='mb-3'>
            <label htmlFor='task' className='form-label'>Insert Title</label>
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" value={newTitle}
            onChange={e=> setNewTitle(e.target.value)}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
          </div>

        </form>
        <p className="list-titles">List titles</p>
        <ul className="list-group">
                {titles.map((title, index)=> <li key={index} className='list-group-item'>{title} <button
                className="btn btn-sm btn-danger"
                data-index={index}
                
                onClick={handleTrashBtn}
              >
                <i class="bi bi-trash3-fill "></i>
              </button>

              </li>)} 
        </ul>   
      </div>
      
    </>
  )
}

export default App
