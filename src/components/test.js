import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const Test = () => {
    const [count, setCounter] = useState(0);
    const value1 = useMemo(() => {
        console.log("memo")
        return count + 10;
    }, [count])
    useEffect(() => {
        console.log("effect")
    }, [count])
    return <div>
        <span>count: {count}</span>
        <span>value1: {value1}</span>
        <Button onClick={() => setCounter(s => s + 1)}>add</Button>
    </div>
}
export default Test;