import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tree } from 'antd';
import _ from 'lodash';

const WidgetShopCategories = () => {
    const Router = useRouter();
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);

    const slug = Router.query[`product_categories.slug`];

    async function getCategories() {
        setLoading(true);
        const responseData = await ProductRepository.getProductCategories();
        if (responseData) {
            setCategories(responseData);
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.slug}
                    className={item.slug === slug ? 'active' : ''}>
                    <Link href={`/category/${item.slug}`}>{item.name}</Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
            null;
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Categories</h4>
            <Tree
                // onSelect={onSelect}
                // onCheck={onCheck}
                treeData={buildHierarchy(categories)}
                titleRender={(item) => {
                    return (
                        <Link
                            href={`/shop?product_categories.slug=${item.slug}`}>
                            <a
                                className={item.slug === slug ? 'active' : ''}
                                dangerouslySetInnerHTML={{
                                    __html: `${item.name}`,
                                }}></a>
                        </Link>
                    );
                    // return _.name;
                }}></Tree>
            {/* {categoriesView} */}
        </aside>
    );
};

export default WidgetShopCategories;
function buildHierarchy(arry) {
    if (_.isEmpty(arry)) {
        return [];
    }
    let roots = [],
        children = {};

    // find the top level nodes and hash the children based on parent
    for (let i = 0, len = arry.length; i < len; ++i) {
        let item = { ...arry[i] },
            p = item.parent ? item.parent._id : item.parent,
            target = !p ? roots : children[p] || (children[p] = []);
        item['key'] = item._id;
        target.push(item);
    }
    // function to recursively build the tree
    let findChildren = function (parent) {
        if (children[parent._id]) {
            parent.children = children[parent._id];
            for (let i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };

    // enumerate through to handle the case where there are multiple roots
    for (let i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }
    return roots;
}
