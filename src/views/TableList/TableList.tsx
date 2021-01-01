import Grid from '@material-ui/core/Grid'
import React, { useState, useEffect, useContext } from 'react';

import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';

import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Icons } from 'material-table';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { forwardRef } from 'react';
import { createStyles } from '@material-ui/core';
import { Popups } from '../../components/Popup/popup';
import Dictaphone from '../../components/VoiceRecognition';
import Time from '../Time/Time';
// import { observer } from "mobx-react";
// import { TableStoreContext } from "../../Stores/tableStore";
const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const TableList = (props: any) => {
  // const TableStore = useContext(TableStoreContext)
  // const datas = TableStore.getData();
  // console.log(datas);
  const [data, setData] = useState([] as any);
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([] as any)
  const [selectValue, setselectValue] = useState([] as any);
  const fetchEmployees = async () => {
    const employees = await fetch('http://localhost:3001/employee')
      .then(res => res.json())
      .then(res => setData(res))
  }
  useEffect(() => {
    fetchEmployees()
  }, [])
  const handleRowUpdate = (newData: any, oldData: any, resolve: { (value?: any): void; (): void; }) => {
    //validation
    let errorList: string | any[] | ((prevState: never[]) => never[]) = []
    if (errorList.length < 1) {
      console.log(oldData.id);
      axios.put("http://localhost:3001/employee/" + oldData.id, newData)
        .then(res => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve()
          setIserror(false)
          setErrorMessages([])
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()
        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }

  const handleRowAdd = (newData = [] as any, resolve: { (value?: any): void; (): void; }) => {
    //validation
    let errorList = []
    if (newData.first_name === undefined) {
      errorList.push("Please enter first name")
    }
    if (newData.last_name === undefined) {
      errorList.push("Please enter last   name")
    }
    if (newData.email === undefined) {
      errorList.push("Please enter a valid email")
    }
    if (newData.password === undefined) {
      errorList.push("Please enter a valid password")
    }
    if (errorList.length < 1) { //no error
      axios.post("http://localhost:3001/employee/", newData)
        .then(res => setData(res))
        .catch(error => {
          setErrorMessages(["Cannot add data. Server error!"])
          setIserror(true)
          resolve()
        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }

  const handleRowDelete = (oldData: any, resolve: any) => {
    axios.delete("http://localhost:3001/employee/" + oldData)
      .then(res => setData(res))
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }
  const handleChange = (selectValue: any) => {
    setselectValue({ selectValue });
  };
  const options = data.map((data: any) => (data.id));

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div>
            {iserror &&
              <Alert severity="error">
                {errorMessages.map((msg: any, i: any) => {
                  return <div key={i}>{msg}</div>
                })}
              </Alert>
            }
          </div>
          <Card>
            <CardHeader color="primary">
              <h4>Employee Management</h4>
            </CardHeader>
            <CardBody>
              <MaterialTable
                data={data}
                columns={[
                  { field: 'id', title: 'ID' },
                  { field: 'first_name', title: 'First name' },
                  { field: 'last_name', title: 'Last name' },
                  { field: 'email', title: 'Email' },
                  { field: 'password', title: 'Password' },
                  { field: 'team_id', title: 'team_id' },
                  {
                    title: "Team_Details",
                    field: "internal_action",
                    render: (rowData: any) => <Popups
                      first_name={rowData.first_name}
                      id={rowData.id}
                      team_id={rowData.team_id}
                      data={data}
                      selectValue={selectValue}
                      handleChange={handleChange}
                      options={options}
                    />
                  }
                ]}
                icons={tableIcons}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                      // this.UpdateData(newData);
                      console.log(newData);
                      console.log(oldData);
                      console.log(resolve);
                      handleRowUpdate(newData, oldData, resolve);
                    }),
                  onRowAdd: (newData) =>
                    new Promise((resolve) => {
                      console.log(newData);
                      console.log(resolve);
                      handleRowAdd(newData, resolve)
                    }),
                  onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                      console.log(oldData);
                      console.log(resolve);
                      handleRowDelete(oldData.id, resolve)
                    }),
                }} />

            </CardBody>
          </Card>
        </Grid>
      </Grid>
      <Time />
    </>
  );
}

export default TableList;


