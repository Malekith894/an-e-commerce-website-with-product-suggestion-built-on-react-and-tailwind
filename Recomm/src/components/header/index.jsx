

function Header(){
    return(
        <div className="bg-white flex flex-row justify-between items-center pl-34 pr-34 fixed font-black font-bold border-b-gray-300 border-solid border-b-2 h-[80px] w-full">
            <div className="flex flex-row justify-center items-center gap-8">
                <button className="scale-150">🏡</button>
                <div className="caret-mauve-400">|</div>
                <button className="scale-150">🎁</button>
            </div>
            <input placeholder="🔎Search" className="border-2 w-94 rounded-xl p-1.5 bg-gray-100"></input>
        </div>
    );

};


export default Header;