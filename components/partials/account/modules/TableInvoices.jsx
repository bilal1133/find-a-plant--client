import React, { useEffect, useState } from 'react';
import { Table, Divider, Tag } from 'antd';
import Link from 'next/link';
import { connect, useSelector } from 'react-redux';
import checkoutRepositry from '~/repositories/checkoutRepositry';
import _ from 'lodash';
const TableInvoices = ({ user }) => {
    console.log(user?._id);
    const [invoiceData, setinvoiceData] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        checkoutRepositry.getCheckoutRecords(user?._id).then((data) => {
            setinvoiceData(data);
            setloading(false);
        });
    }, [user?._id]);

    /*
            You can change data by API
            example: https://ant.design/components/table/
        */
    const tableData = [
        {
            id: '1',
            invoiceId: '500884010',
            title: 'Marshall Kilburn Portable Wireless Speaker',
            dateCreate: '20-1-2020',
            amount: '42.99',
            status: 'Successful delivery',
        },
        {
            id: '2',
            invoiceId: '593347935',
            title: 'Herschel Leather Duffle Bag In Brown Color',
            dateCreate: '20-1-2020',
            amount: '199.99',
            status: 'Cancel',
        },
        {
            id: '3',
            invoiceId: '593347935',
            title: 'Xbox One Wireless Controller Black Color',
            dateCreate: '20-1-2020',
            amount: '199.99',
            status: 'Cancel',
        },
        {
            id: '4',
            invoiceId: '615397400',
            title: 'Grand Slam Indoor Of Show Jumping Novel',
            dateCreate: '20-1-2020',
            amount: '41.00',
            status: 'Cancel',
        },
    ];

    // contact_no: 3164455005
    // createdAt: "2021-06-05T21:06:53.747Z"
    // id: "60bbe76d58053000151f9676"
    // payment: {method: "cash_on_delivery", _id: "60bbe76d58053000151f9679", __v: 0, id: "60bbe76d58053000151f9679"}
    // payment_status: false
    // products: [{…}]
    // published_at: "2021-06-05T21:06:53.734Z"
    // shipment_status: "processing"
    // shipping_adress: {_id: "60bbe76d58053000151f9677", address: "Iste qui quae omnis ", apartment: "Dolor minima vitae e", provence: "Balochistan", city: "Quos laborum Repreh", …}
    // store: {_id: "608510af5693643f9810216c", store_name: "DHA", published_at: "2021-04-25T06:48:37.661Z", Address: {…}, createdAt: "2021-04-25T06:48:15.431Z", …}
    // total: 222
    // updatedAt: "2021-06-05T21:06:53.841Z"
    // user: {confirmed: true, blocked: false, user_type: null, p

    const tableColumn = [
        {
            title: 'Id',
            dataIndex: 'id',
            rowKey: 'id',
            key: 'id',
            width: '120px',
            render: (text, record) => (
                <Link href={`/account/invoice-detail/${record.id}`}>
                    {record.id}
                </Link>
            ),
        },
        {
            title: 'Payment Method',
            dataIndex: 'title',
            rowKey: 'title',
            key: 'title',
            render: (text, record) => (
                <p>{_.startCase(record.payment.method)}</p>
            ),
        },
        {
            title: 'Payment Status',
            rowKey: 'dateCreate',
            dataIndex: 'dateCreate',
            key: 'dateCreate',
            width: '120px',
            render: (text, record) =>
                record.payment_status ? (
                    <span class="badge bg-success p-3">Approved</span>
                ) : (
                    <span class="badge bg-info p-3">Pending</span>
                ),
        },
        {
            title: 'Amount',
            rowKey: 'amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (text, record) => (
                <span className="text-right">${record.total}</span>
            ),
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            rowKey: 'status',
            width: '150px',
            render: (text, record) => (
                <span className="text-right">{record.shipment_status}</span>
            ),
        },
        {
            title: 'Shipping Adress',
            key: 'status',
            dataIndex: 'status',
            rowKey: 'status',
            width: '150px',
            render: (text, record) => (
                <span className="text-right">
                    {record.shipping_adress.address}
                </span>
            ),
        },
    ];
    return (
        <Table
            scroll={{ x: 1300 }}
            loading={loading}
            columns={tableColumn}
            dataSource={invoiceData}
            rowKey={(record) => record.id}
        />
    );
};

export default connect(({ auth }) => ({
    user: auth.user,
}))(TableInvoices);
