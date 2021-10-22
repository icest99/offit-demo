import TestCount from '../TestCount';
import ScriptTag from 'react-script-tag';
import './Popup.css';

function Playing(props) {

    return (
      <div className="Playing" class="flex flex-col">

        <div class="modal" id="modal-one" aria-hidden="true">
            <div class="modal-dialog ">
            
                <div class="modal-header bg-yellow-2">
                    <h2 class="text-3xl">Congratulation!</h2>
                    <a href="#modal-one" class="btn-close" aria-hidden="true"></a>
                </div>

                <div class="modal-body text-center bg-yellow-2">
                    <p class="text-xl">You Earned <br/></p>
                    <p class="text-5xl">95</p>
                </div>

                <div class="modal-footer bg-yellow-2 pb-10"> 
                    <button onClick={ () => props.handleClick('won')} href="#modal-one" class="btn rounded-2xl text-2xl text-white bg-red-1 mx-auto px-12 py-3">Yay!</button>
                </div>
            </div>
        </div>

        <div class="mx-auto text-4xl ">
                <TestCount/>
            </div>
        <button class=" bg-red-1 mx-auto mt-10 text-white text-2xl font-bold py-4 px-10 rounded-2xl" onClick={ () => props.handleClick('start')}>End the game</button>
        {/* <button onClick={ () => props.handleClick('lost')}>Won the Game</button>
        <button onClick={ () => props.handleClick('start')}>New Game</button> */}
      </div>
    )
  }
  
  export default Playing
    