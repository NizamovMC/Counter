import {FC} from "react";
import {Display} from "./Display";
import {SetButton} from "./SetButton";
import {ResetButton} from "./ResetButton";

export type CounterPropsType = {
    count?: number
    increaseCount?: () => void  //disabled={count === 5} disabled={count === 0}
    resetCount?: () => void
}

export const Counter: FC<CounterPropsType> = (props) => {
    const {increaseCount, resetCount, count} = props


    return (
        <div>
            {/*<h2 className='in'>{count}</h2>*/}
            <Display count={count}/>
            <SetButton increaseCount={increaseCount} />
            <ResetButton resetCount={resetCount} />

        </div>
    )
}