import React from 'react';
import './StopWatch.css';

export default function Stopwatch() {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    const intervalRef = React.useRef(null);

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const centiseconds = Math.floor((ms % 1000) / 10);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
    };

    const startTimer = () => {
        if (!isRunning) {
            const startTime = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10);
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setTime(0);
        setIsRunning(false);
    };

    React.useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
      <div className="soft-main">
            <div className="stopwatch">
            <div className="display">{formatTime(time)}</div>
            <div className="controls">
                <button className="start" onClick={startTimer} disabled={isRunning}>
                    Start
                </button>
                <button className="stop" onClick={stopTimer} disabled={!isRunning}>
                    Stop
                </button>
                <button className="reset" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
      </div>
       
    );
}
