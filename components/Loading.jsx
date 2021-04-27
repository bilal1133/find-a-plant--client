import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import img1 from '~/public/static/img/loading/p1.png';
import img2 from '~/public/static/img/loading/p2.png';
import img3 from '~/public/static/img/loading/p3.png';
import img4 from '~/public/static/img/loading/p4.png';

let images = [img1, img2, img3, img4];

function Loading() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    useEffect(() => {
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });

    return (
        loading && (
            <div
                style={{
                    position: 'fixed',
                    top: '1px',
                    zIndex: '15000',
                    backgroundColor: 'rgb(202, 230, 231,0.5)',
                    height: '100vh',
                    width: '100vw',
                }}>
                <img
                    className="loading_img"
                    src={images[Math.floor(Math.random() * 4)]}
                />
            </div>
        )
    );
}

export default Loading;
