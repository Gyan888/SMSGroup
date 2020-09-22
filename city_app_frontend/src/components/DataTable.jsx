import MaterialTable from 'material-table'
import React, { forwardRef, useState } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import FilterList from '@material-ui/icons/FilterList';
import { fetchCityAppData, setCityAppData, deleteCityAppData, updateCityAppData} from '../services/APIServices';
import {find, get, set, omit} from 'lodash';

let DataTable = () =>{

    let toDateFormat = dateTime =>{
      if (!dateTime || typeof dateTime === 'string')
        return dateTime;
      return  dateTime.toISOString().split('T')[0]
    };

    const [data, setData] = useState([]);

    let fetchCityData = query =>
        new Promise((resolve, reject) =>{
        let pageId = query.page + 1
        let {filters, orderBy, orderDirection} = query;
        let startDate = get(find(filters, (val => get(val, 'column.field') === 'start_date')), "value");
        let endDate = get(find(filters, (val => get(val, 'column.field') === 'end_date')), "value");
        orderBy = get(orderBy, 'field');
        orderBy = orderDirection ==='desc' ? `-${orderBy}`: orderBy;
        fetchCityAppData(pageId, toDateFormat(startDate), toDateFormat(endDate), orderBy)
        .then(result =>{
          resolve({
            data: result.results,
            page: result.page - 1,
            totalCount: result.total,
          })
        });
      });



    const tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      };

    const [columns, setColumns] = useState([
      { title: 'City', field: 'city' ,filtering: false},
      { title: 'Start Date', field: 'start_date', type: 'date', filtering: true, filterPlaceholder: "Filter By Start Date"},
      { title: 'End Date', field: 'end_date', type: 'date', filtering: true, filterPlaceholder: "Filter By End Date"},
      { title: 'Price', field: 'price', type: 'numeric', filtering: false},
      { title: 'Status', field: 'status', filtering: false},
      { title: 'Color', field: 'color', filtering: false}
    ]);

    return (
      <MaterialTable
        title="City App Table "
        columns={columns}
        style={{'height': "100%"}}
        data={fetchCityData}
        icons={tableIcons}
        options={{
          filtering: true,
          pageSize: 10,
          addRowPosition: "first"
        }}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                set(newData, 'start_date', toDateFormat(newData.start_date));
                set(newData, 'end_date', toDateFormat(newData.end_date));
                setCityAppData(newData).then(res =>{
                  resolve();
                });
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const {id} = newData
                set(newData, 'start_date', toDateFormat(newData.start_date));
                set(newData, 'end_date', toDateFormat(newData.end_date));
                delete newData['id'];
                updateCityAppData(id, newData).then(res =>{
                  resolve();
                })
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                deleteCityAppData(oldData.id).then(res=>{
                  resolve();
                });
              }, 1000)
            }),
        }}
      />
    )
  }

export default DataTable;