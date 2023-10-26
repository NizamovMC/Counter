import {FC} from "react";
import {CounterPropsType} from "./Counter";

export const Display: FC<CounterPropsType> = (props) => {
    return (
        <div className='counter'>
            <h2 className='in'>{props.count}</h2>
        </div>
    )
}