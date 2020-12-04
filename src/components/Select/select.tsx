
import React, { useState } from "react";
import Select from "react-multi-select-component";
export const DropDown = (Props: any) => {
    // return (
    //     <>
    //         <Select
    //             defaultValue={Props.id}
    //             onChange={Props.handleChange}
    //             options={Props.options}
    //         />
    //     </>
    // )
    const [selected, setSelected] = useState([]);
    const options = [...Props.options]
    return (
        <div>
            <pre>{JSON.stringify(selected)}</pre>
            <Select
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
            />
        </div>
    );
};