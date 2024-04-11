
import React from 'react';
import './Dashboard.css';
import GraphData from './graphdata/GraphData'
import TabularData from './tabulardata/TabularData';
import OpenPositionTable from './openpositiontable/OpenPositionTable';
import Overview from './overview/Overview';
import Wallet from './wallet/Wallet';
import UserTable from './usertable/UserTable';
const Dashboard = () => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-5" style={{marginTop:'140px'}}>
                <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    <Overview />
                        <GraphData />
                        <TabularData />
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <Wallet />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-5 mt-5">
                <UserTable />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-5">
                <OpenPositionTable />
            </div>
        </>
    );
}

export default Dashboard;
