
export default function Button (props) {

    
    const handleClick =()=>{
        //console.log(props.onClick);
        if (props.onClick){
            props.onClick();
        }
    }
    return (
        <button
            className={theme(props.theme)}
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => handleClick()}
        >
            {props.children}
        </button>
    )
}

function theme (key){
    const theme1 = "bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
    const theme2 = "bg-pink-200 text-blue active:bg-pink-600 font-bold text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    const arrayTheme =[theme1, theme2];
    return arrayTheme[key];
}