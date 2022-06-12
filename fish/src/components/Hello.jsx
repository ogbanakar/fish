import React,{ useState} from 'react'

const Hello = () => {
        const [Count, setCount] = useState('sarakasaribe')
  return (
    <div>
        <p style={{color:"white"}}>
            {Count}
        </p>
        <button onClick={() => setCount(" innyen aythalla")}>Subscribe ge illi ottu guru
        </button>
    </div>
  )
}

export default Hello