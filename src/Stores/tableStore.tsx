import { makeAutoObservable, observable } from "mobx";
import { createContext } from "react";
import axios from "axios";
import React from "react";
class tableStore {
    @observable login: any;
    constructor() {
        makeAutoObservable(this)
    }
    public componentDidMount(): void {
        axios.get(`http://localhost:5000/employees/`).then((data) => {
            this.login = data.data;
        });
    }
}

export const TableStoreContext = createContext(new tableStore());