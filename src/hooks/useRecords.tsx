import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';


type RecordItem = {
  tagIds:number[]
  note:string
  category:'+'|'-'
  amount:number
  createdAt:string //ISO 8601的格式
}

//newRecordItem忽律RecordItem里面的createdAt属性
type newRecordItem = Omit<RecordItem, 'createdAt' >


export const useRecords = ()=>{
  const [records,setRecords] = useState<RecordItem[]>([])

  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records));
  },[records]);

  const addRecord = (newRecord:newRecordItem)=>{
    const record = {...newRecord,createdAt:(new Date()).toISOString()}
  //setRecords一旦触发,Money.tsx将会被更新
    setRecords([...records,record]);
  }



  return {records,addRecord}
}