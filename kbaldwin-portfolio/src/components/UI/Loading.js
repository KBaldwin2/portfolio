
import DotLoader from "react-spinners/DotLoader";


export default function Loading() {
    return (
        <DotLoader color={"#ff05ac"} size={150} cssOverride={{display: "block",
        margin: "10% auto auto", width: "150px"}}/>
    )
}