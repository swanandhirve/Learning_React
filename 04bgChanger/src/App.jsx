// import { useState } from 'react';
import { CreateToggles } from './toggles';

function App() {
  // let [count, setCount] = useState(0);
  
// let handleClick = function () {
//   let btn = document.getElementById('count');
//   btn.onclick = function () {
//     setCount(c => c + 1);

//     this.innerText = `Count: ${count}`;
//     // this.style.backgroundColor = setColor;
//   };
// };

  return (
    <>
      {/* <div className='flex-center'
        id="button"
        style={{ height: '100%', width: '100%' }}>
          <button className='btn' id="count" onClick={handleClick}>
            Count: {count}
          </button>
      </div> */}
      <CreateToggles />
    </>
  );
}

export default App;
