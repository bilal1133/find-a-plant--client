import React from 'react';
import _ from 'lodash';
const PartialSpecification = ({ specification }) => {
    if (!specification) {
        return 'No Specification Provided';
    }

    let data = Object.keys(specification).filter((single) => {
        return !single.startsWith('_') && single !== 'v' && single != 'id';
    });
    console.log(data);
    return (
        <div className="table-responsive">
            <table className="table table-bordered ps-table ps-table--specification">
                <tbody>
                    {data.map((single) => {
                        return (
                            <tr key={single}>
                                <td>{_.startCase(single)}</td>
                                <td>{specification[single]}</td>
                            </tr>
                        );
                    })}
                    {/* 
                    <tr>
                        <td>Style</td>
                        <td>Ear Hook</td>
                    </tr>
                    <tr>
                        <td>Wireless</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>5.5 x 5.5 x 9.5 inches</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>6.61 pounds</td>
                    </tr>
                    <tr>
                        <td>Battery Life</td>
                        <td>20 hours</td>
                    </tr>
                    <tr>
                        <td>Bluetooth</td>
                        <td>Yes</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default PartialSpecification;
