import React from 'react';
import data from '~/public/static/data/services.json';
function OurServices() {
    return (
        <div className={'ourServices'}>
            <h1 className="our-services-heading">
                OUR <span>SERVICES</span>
            </h1>

            <div className="container-our">
                {data.map((single) => {
                    return (
                        <div key={single.name} className={`flip `}>
                            <div
                                className="front"
                                style={{
                                    'background-image': `url(${single.img})`,
                                }}>
                                <h1 className="text-shadow service-name">
                                    {single.name}
                                </h1>
                            </div>
                            <div className="back">
                                <h2>{single.name}</h2>
                                <p>{single.des}</p>
                                <button className="ps-btn">Read More</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OurServices;
