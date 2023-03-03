import { data_arr } from './data'
// import React from 'react'
export type objType = {
    [key: string]: any;
}

const obj : objType = {};
let currdate : string =  "";
let currtime : string = "";
for(let i = 0; i < data_arr.length; i++) {
    [currdate, currtime] = data_arr[i].schedule_time.split(' ');

    if(obj[`${data_arr[i].item_date}`] === undefined) {
        obj[`${data_arr[i].item_date}`] = {};
    }
    if(obj[`${data_arr[i].item_date}`][`${currdate}`] === undefined) {
        obj[`${data_arr[i].item_date}`][`${currdate}`] = [];
    }
    // else {
        
        obj[`${data_arr[i].item_date}`][`${currdate}`].push(currtime);
    // }
}


export const shapedData = obj;