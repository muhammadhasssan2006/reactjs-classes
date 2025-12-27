import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaaar from './components/Navbaar.jsx';
import Cardss from './components/card/Cards.jsx';
import { postData } from './Data.jsx';

function App() {

  // let arr = ["Hassan","usman","ahmed","rafay"];
  return (
    <>
    {/* strict mode check twice  */}
    {/* modular css file name must ne compunent name.module.css  */}
    {/* <Navbaaar/>
    <div className='d-flex gap-3 justify-content-center  mt-4'>
      <Cardss/>
    <Cardss/>
    <Cardss/>
    </div> */}
    {
      // arr.map((e,i)=>{
      //   return (
      //     <li>{e}</li>

      //   );

      // })

      postData.map((e,i)=>{
        return(
          <div key={i}>
            
          <h3>{e.title}</h3>
          <p>{e.body}</p>
          {/* <table>
            <tr>
              <td>{e.title}</td>
              <td>{e.body}</td>
            </tr>
          </table> */}
          </div>
        )

      })
    }


 </>
)
}

export default App
