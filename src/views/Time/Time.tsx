import React, { useState } from 'react';
import Dictaphone from '../../components/VoiceRecognition';
const Time = () => {
    const [tatvasoftIn, setTatvasoftIn] = useState([]) as any;
    const [tatvasoftOut, setTatvasoftOut] = useState([]) as any;

    const tatvasoftInAdd = () => {
        console.log("tatvasoftInAdd");
        let today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + '' + today.getHours() + ':' + today.getMinutes();
        console.log(date);
        let dataToAdd = [...tatvasoftIn];
        dataToAdd.push(date);
        setTatvasoftIn(dataToAdd);
        console.log(tatvasoftIn);
    }

    const tatvasoftOutAdd = () => {
        console.log("tatvasoftOutAdd");
        let today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + '' + today.getHours() + ':' + today.getMinutes();
        console.log(date);
        let dataToAdd = [...tatvasoftOut];
        dataToAdd.push(date);
        setTatvasoftOut(dataToAdd);
        console.log(tatvasoftOut);
    }
    return (
        <div className="App">
            <Dictaphone
                tatvasoftInAdd={tatvasoftInAdd}
                tatvasoftOutAdd={tatvasoftOutAdd}
            />
            <div className="table-responsive-sm">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>TatvsoftIn</th>
                            {tatvasoftIn.map((In: any) =>
                                <td>{In}</td>
                            )}
                        </tr>
                        <tr>
                            <th>tatvasoftOut</th>
                            {tatvasoftOut.map((Out: any) =>
                                <td>{Out}</td>
                            )}
                        </tr>
                    </thead>
                </table>
            </div>
        </div >
    );
}
export default Time;