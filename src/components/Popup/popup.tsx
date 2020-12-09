import React, { useState } from "react";
import Select from 'react-select';
import Popup from "reactjs-popup"
import Info from '@material-ui/icons/Info';
export const Popups = (Props: any) => {
    const [selected, setSelected] = useState([] as any);
    const options = [...Props.options]
    const team_id = Object.values(Props.team_id)
    return (
        <>
            <Popup
                trigger={
                    <button className="btn btn-sm btn-outline-secondary">
                        {" "}
                        <Info />{" "}
                    </button>
                }
                modal
                nested
            >
                <div className="popupmodal">
                    <div className="header">
                        {" "}Team{" "}
                        <Select
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy={"Select"}
                        />
                    </div>
                    <div className="content">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First_Name</th>
                                    <th scope="col">Last_Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Props.data.map((emp: any) => {
                                    // team_id.map((item: any) => {
                                        (<tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.first_name}</td>
                                            <td>{emp.last_name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.password}</td>
                                        </tr>)
                                    // })
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Popup>
        </>
    )
}