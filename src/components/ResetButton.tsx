import {FC} from "react";
import {CounterPropsType} from "./Counter";


export const ResetButton: FC<CounterPropsType> = (props) => {
    const DisReset = props.count === 0
    return (
        <div>
            <button className='buttonReset' onClick={props.resetCount} disabled={DisReset}>Reset</button>
        </div>
    )
}