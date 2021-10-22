function Start(props) {

    return (
      <div className="Start" class="flex flex-col">

            {/* <Link to="Gacha2" class="mb-20 mx-auto mt-5 h-12 w-28 bg-red-1 rounded-2xl text-white text-2xl flex">
                <p class="mx-auto my-auto">Start</p>
            </Link> */}

        <button class="shadow-md button bg-red-1 mx-auto mt-20 text-white text-2xl font-bold py-4 px-10 rounded-2xl" onClick={ () => props.handleClick('playing')}>Start Game</button>
      </div>
    )
  }
  
  export default Start