function Won(props) {

    return (
      <div className="Won" class="flex mt-10">
        <button class=" bg-red-1 mx-auto mt-10 text-white text-2xl font-bold py-4 px-10 rounded-2xl" onClick={ () => props.handleClick('playing')}>Play Again</button>
      </div>
    )
  }
  
  export default Won