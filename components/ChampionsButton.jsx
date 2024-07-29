
const ChallengesButton = ({ onClick, isActive }) => {
    return (
        <button 
            onClick={onClick} 
            className={`flex items-center text-sm sm:text-lg justify-center px-4 py-1 rounded-md 10 ${
                isActive 
                    ? 'bg-basicBlack-10 text-white border-basicBlack-10 border-2 transition-all' 
                    : 'bg-white text-basicBlack-10 border-basicBlack-10 border-2 hover:bg-basicLightGrey-10 transition-all'
            }`}
        >
            Champions
        </button>
    );
}

export default ChallengesButton;