import React, { useState } from 'react'
import styles from './GamePage.module.css'

function GamePage() {
    const [btnstyle, Setbtnstyle] = useState()
    const [isDark, setIsDark] = useState(false);
    const [score, SetScore] = useState(0);
    const [currentRoll, setrolldice] = useState(1)
    const [error,seterror]=useState("")
    function generateRandomnumber() {
        return Math.floor(Math.random() * 6) + 1
    }

   function toggle(){
    setIsDark((prev)=>!prev)
   }

    function ShowRules() {
        if (!isDark) {
            Setbtnstyle({ backgroundColor: "black", color: "white" })
            setIsDark(!isDark)
        }
        else {
            Setbtnstyle({ backgroundColor: "white", color: "black" })
            setIsDark(!isDark)
        }
    }
    const [chooseNumber, SetSelectNumber] = useState();
    const [reset, setReset] = useState({});
    

    function ResetSet() {
          if(toggle) {
           setReset({ backgroundColor: "black", color: "white" })
           SetScore(0)
           setrolldice(1)
           SetSelectNumber()
           setTimeout(() => {
            setReset({ backgroundColor: "white", color: "black" })
          }, 600);
          }
    }

    function SelectNumber(num) {
        SetSelectNumber(num)
    }

    function RollDice() {
        if(!chooseNumber){
            seterror("Please Select a Number")
            setTimeout(() => {
             seterror('')   
            }, 1000);
            return;
        }
        seterror('')
        let newRoll = generateRandomnumber()
        setrolldice(newRoll)
        if (chooseNumber === newRoll) {
            SetScore(prev => prev + newRoll)
        }
        else {
            SetScore(prev => prev - 2)
        }
        SetSelectNumber()
    }

    return (
        <>
            <nav className={styles.Navigation}>
                <div className={styles.ScoreBoard}>
                    <p className={styles.Zero}>{score}</p>
                    <p className={styles.TotalScore}>Total Score</p>
                </div>
                <div className={styles.selectButton}>
                        <p className={styles.error}>{error}</p>
                    <div className={styles.PressButton}>
                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <button
                                key={num}
                                className={styles.SelBtn}
                                onClick={() => SelectNumber(num)}
                                style={chooseNumber === num ? { backgroundColor: 'black', color: 'white' } : {}}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                    <p className={styles.SelectNum}>Select Number</p>
                </div>
            </nav>
            <div className={styles.MainGame}>
                <div className={styles.Dice} onClick={() => RollDice()}>
                    <img src={`src/assets/dice_${currentRoll}.png`} alt="" className={styles.img} />
                    <p>Click On Dice To Roll</p>
                </div>
                <div className={styles.RulesBtn}>
                    <button className={styles.RollBtn} onClick={()=>ResetSet()} style={reset}>Reset Score</button>
                    <button className={styles.ResetBtn} onClick={ShowRules} style={btnstyle}>Show Rules</button>
                    {isDark && (
                        <div className={styles.Rules}>
                            <h1>How to play dice game</h1>
                            <p>Select any number</p>
                            <p>Click on the dice image</p>
                            <p>If your selected number matches the dice roll, you gain points</p>
                            <p>Wrong guesses deduct 2 points</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default GamePage