import './battleScreen.css';

const BattleScreen = ({ myPokeSelection, computerRandomSelection, myHealth, enemyHealth }) => {
    return (
    <div className="battle-container">
        <div className="enemy-container">
            <div className="health-info">
                <h2>Health: {enemyHealth}</h2>
                <h3>{computerRandomSelection[0]?.name}</h3>
            </div>
            <img src={computerRandomSelection[0]?.sprites.front_default} alt='enemy pokemon' />
        </div>
        <div className="my-container">
            <img src={myPokeSelection[0]?.sprites.front_default} alt='my pokemon' />
            <div className="health-info">
                <h2>Health: {myHealth}</h2>
                <h3>{myPokeSelection[0]?.name}</h3>
            </div>
        </div>
    </div>
    );
};

export default BattleScreen;