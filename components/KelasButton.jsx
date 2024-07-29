const KelasButton = ({ onClick, isActive }) => {
    return (
        <button 
            onClick={onClick} 
            className={`rounded-md py-1 px-3 ${
                isActive 
                    ? 'bg-basicBlack-10 text-white border-basicBlack-10 border-2 transition-all' 
                    : 'bg-white text-basicBlack-10 border-basicBlack-10 border-2 hover:bg-basicLightGrey-10 transition-all'
            }`}
        >
            Kelas
        </button>
    );
}

export default KelasButton;