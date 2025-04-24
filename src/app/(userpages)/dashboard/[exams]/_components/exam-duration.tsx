import { Timer } from "lucide-react"
import { useEffect, useState } from "react"

type ExamDuration = {
    duration: number,
    onTimerEnd?: () => void,
    onTimeChange?:(date:Date)=>void
}

export default function ExamDuration({ duration, onTimerEnd,onTimeChange }: ExamDuration) {

    // State
    const [date, setDate] = useState(new Date(0).setMinutes(duration));

    // Effects
    useEffect(() => {
        const timerId = setInterval(() => {
            setDate((prev) => {
                const currentDate = new Date(prev);

                // Check The Time is Up
                if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
                    if (onTimerEnd) onTimerEnd;
                    window.clearInterval(timerId);

                    return Date.now()
                }

                // Invoke time handler on ecah iteration
                onTimeChange?.(currentDate)
                return currentDate.setSeconds(currentDate.getSeconds() - 1);
            });

        }, 1000);
        return () => window.clearInterval(timerId)
    }, [onTimerEnd,onTimeChange])

    return (
        <div className="flex items-center gap-3 leading-none font-semibold ">
            {/* Icon */}
            <Timer />
            <span className="text-green-500">{Intl.DateTimeFormat('en-US', {
                minute: "2-digit",
                second: '2-digit'
            }).format(date)}</span>
        </div>
    )
}
