import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import Table from '../../components/Table/Table';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import { createStyles } from '@material-ui/core';
import axios from "axios";
import { IState } from "../../api/types/stateProps";
import { RouteComponentProps } from "react-router-dom";

const styles = createStyles({
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: 300,
    fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: 400,
      lineHeight: 1
    }
  }
});

class TableList extends React.Component<RouteComponentProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      employees: [],
      selectValue: [],
      isOpen: false
    };
  }
  public componentDidMount(): void {
    axios.get(`http://localhost:5000/employees`).then((data) => {
      this.setState({ employees: data.data });
    });
  }
  public deleteEmployee(id: number) {
    console.log(id);
    axios.delete(`http://localhost:5000/employees/${id}`).then(data => {
      const index = this.state.employees.findIndex(employee => employee.id === id);
      console.log(index);
      this.state.employees.splice(index, 1);
      this.props.history.push('/');
    })
  }
  handleChange = (selectValue: any) => {
    this.setState({ selectValue });
    console.log(selectValue.length);
  };
  setSelectValue = () => {
    this.setState({ selectValue: [] });
  }
  render() {
    const employees = this.state.employees;
    const { selectValue } = this.state;
    console.log(employees);
    return (
      <>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4>Simple Table</h4>
                <p>
                  Here is a subtitle for this table
            </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['','ID', 'First_name', 'Last_Name', 'Email', 'Password','']}
                  tableData={employees}
                  deleteEmployee={this.deleteEmployee}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain={true}>
              <CardHeader plain={true} color="primary">
                <h4>
                  Table on Plain Background
            </h4>
                <p>
                  Here is a subtitle for this table
            </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={['ID', 'First_name', 'Last_Name', 'Email', 'Password']}
                  tableData={employees}
                  deleteEmployee={this.deleteEmployee}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </>
    );
  }
}

export default withStyles(styles)(TableList);
