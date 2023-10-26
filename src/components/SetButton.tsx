import {FC} from "react";
import {CounterPropsType} from "./Counter";


export const SetButton: FC<CounterPropsType> = (props) => {
    const DisSet = props.count === 5

    return (
        <div>
            <button className='buttonSet' onClick={props.increaseCount} disabled={DisSet} >Set</button>
        </div>
    )
}