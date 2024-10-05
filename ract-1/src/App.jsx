import { useRef, useState } from "react";

export default function App() {
    const input = useRef();

    const [colors, setcolors] = useState(["red", "blue", "green"]);









    return (
        <div>
            <input ref={input} />
            <button onClick={() => {


                let oColors = [...colors];
                oColors.push(input.current.value);
                setcolors(oColors);

            }}>Add Color</button>
            <button onClick={() => {
                let CColors = [...colors];
                CColors.splice(0, 1);
                setcolors(CColors);
            }}>delete</button>

            <button onClick={() => {

                let CColors = [...colors];
                CColors.splice(0, 1,"Tarek");
                setcolors(CColors);

            }}>Update</button>



            <ul>
                {
                    colors.map((el, index) => {
                        return <li key={index}>{el}</li>
                    })
                }
            </ul>

        </div>
    )
}