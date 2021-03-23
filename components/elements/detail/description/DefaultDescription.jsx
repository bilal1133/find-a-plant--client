import React from 'react';

import { Tabs } from 'antd';
import PartialDescription from '~/components/elements/detail/description/PartialDescription';
import PartialSpecification from '~/components/elements/detail/description/PartialSpecification';
import PartialVendor from '~/components/elements/detail/description/PartialVendor';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import PartialOffer from '~/components/elements/detail/description/PartialOffer';
// import Product from '../../products/Product';
import PropTyes from 'prop-types';
import WPModulePlantInfo from './WPModulePlantInfo';

const { TabPane } = Tabs;

const DefaultDescription = ({ product }) => {
    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Description" key="1">
                    <PartialDescription />
                </TabPane>
                <TabPane tab="Specification" key="2">
                    <PartialSpecification
                        specification={product.specification[0]}
                    />
                </TabPane>
                <TabPane tab="Vendor" key="3">
                    <PartialVendor store={product.store} />
                </TabPane>
                <TabPane tab="Reviews (1)" key="4">
                    <PartialReview />
                </TabPane>
                {/* <TabPane tab="Questions and Answers" key="5">
                    Content of Tab Pane 3
                </TabPane> */}
                <TabPane tab="More Offers" key="6">
                    <WPModulePlantInfo attributes={product.specification[0]} />
                </TabPane>
            </Tabs>
        </div>
    );
};

DefaultDescription.prototype = {
    product: PropTyes.shape({}),
};

DefaultDescription.prototype = {
    product: {},
};

export default DefaultDescription;
