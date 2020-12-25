import { makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
class tableStore {
    constructor() {
        makeAutoObservable(this)
    }
    getData = () => {
        const [data, setData] = observable(useState([] as any))
        useEffect(() => {
            axios.get('http://localhost:5000/employees')
                .then(res => {
                    const employees = Object.keys(res.data)
                    const testData = employees.map(key => {
                        const emp = res.data[key]
                        return {
                            id: emp.id,
                            first_name: emp.first_name,
                            last_name: emp.last_name,
                            email: emp.email,
                            password: emp.password,
                            team_id: emp.team_id
                        }
                    });
                    setData(testData);
                })
        }, [])
        return data;
    }
}
export const TableStoreContext = createContext(new tableStore());