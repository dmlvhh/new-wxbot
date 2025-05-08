import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from "./index.module.scss"
import {Button, Descriptions, Grid, Select, Table, Tag} from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];
const tableData = [
    {
        key: '1',
        name: 'Jane Doe',
        salary: 23000,
        address: '32 Park Road, London',
        email: 'jane.doe@example.com',
    },
    {
        key: '2',
        name: 'Alisa Ross',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com',
    },
    {
        key: '3',
        name: 'Kevin Sandra',
        salary: 22000,
        address: '31 Park Road, London',
        email: 'kevin.sandra@example.com',
    },
    {
        key: '4',
        name: 'Ed Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        email: 'ed.hellen@example.com',
    },
    {
        key: '5',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com',
    },
];

const Index: React.FC = () => {


    return (
        <div className={styles.container}>

        </div>
    );
};

export default Index;