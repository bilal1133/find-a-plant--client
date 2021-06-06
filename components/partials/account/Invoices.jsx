import React from 'react';

import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableInvoices from './modules/TableInvoices';
import { accountLinks } from '~/constants/UserDashboard';
const Invoices = () => {
    return (
        <section className="ps-my-account ps-page--account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ps-page__left">
                            <AccountMenuSidebar data={accountLinks} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-page__content">
                            <div className="ps-section--account-setting">
                                <div className="ps-section__header">
                                    <h3>Invoices</h3>
                                </div>
                                <div className="ps-section__content">
                                    <TableInvoices />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Invoices;
