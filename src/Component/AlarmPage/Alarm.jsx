import React from 'react';
import './Alarm.css';

export default function Alarm() {
    const [alarms, setAlarms] = React.useState([]);
    const [time, setTime] = React.useState('');
    const [selectedDays, setSelectedDays] = React.useState([]);
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [isAlarmPlaying, setIsAlarmPlaying] = React.useState(false);
    const [activeAlarm, setActiveAlarm] = React.useState(null);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //  alarm sound
    const alarmSound = React.useRef(new Audio('/alrammusig.mp3'));

    React.useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);

            alarms.forEach((alarm) => {
                const [alarmHours, alarmMinutes] = alarm.time.split(':').map(Number);
                if (
                    now.getHours() === alarmHours &&
                    now.getMinutes() === alarmMinutes &&
                    alarm.days.includes(days[now.getDay()]) &&
                    !isAlarmPlaying 
                ) {
                    setIsAlarmPlaying(true);
                    setActiveAlarm(alarm);
                    alarmSound.current.play();
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [alarms, isAlarmPlaying, days]);

    const stopAlarm = () => {
        alarmSound.current.pause();
        alarmSound.current.currentTime = 0; 
        setIsAlarmPlaying(false);
        setActiveAlarm(null);
    };

    const toggleDay = (day) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    const addAlarm = (e) => {
        e.preventDefault();
        if (time) {
            const daysToSet = selectedDays.length > 0 ? selectedDays : days;
            if (
                alarms.some(
                    (alarm) =>
                        alarm.time === time &&
                        daysToSet.every((day) => alarm.days.includes(day))
                )
            ) {
                alert('This alarm already exists!');
                return;
            }
            setAlarms((prev) => [...prev, { time, days: daysToSet }]);
            setTime('');
            setSelectedDays([]);
        } else {
            alert('Please select a time.');
        }
    };

    const deleteAlarm = (index) => {
        setAlarms((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div  className="alarmPage">
            <div className="display">{currentTime.toLocaleTimeString()}</div>
            <form className="alarm-form" onSubmit={addAlarm}>
                <input
                    type="time"
                    className="alarm-input"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <div className="days-selector">
                    {days.map((day) => (
                        <button
                            type="button"
                            key={day}
                            className={`day-button ${
                                selectedDays.includes(day) ? 'selected' : ''
                            }`}
                            onClick={() => toggleDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
                <button className="start" type="submit">
                    Add Alarm
                </button>
            </form>

            <div className="alarm-list">
                {alarms.length > 0 ? (
                    alarms.map((alarm, index) => (
                        <div key={index} className="alarm-item">
                            <div>
                                {alarm.time} - {alarm.days.join(', ')}
                            </div>
                            <button
                                className="delete-btn"
                                onClick={() => deleteAlarm(index)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No alarms set</p>
                )}
            </div>

            {isAlarmPlaying && (
                <div className="alarm-popup">
                    <p>Alarm for {activeAlarm.time}!</p>
                    <button onClick={stopAlarm}>Stop</button>
                </div>
            )}
        </div>
    );
}
