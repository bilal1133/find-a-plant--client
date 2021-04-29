import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
// import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
// import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import SubscribePopup from '~/components/shared/SubscribePopup';

const HomepageDefaultPage = () => {
    return (
        <ContainerHomeDefault title="Take care your Garden online.">
            <HomeDefaultBanner />
            <SiteFeatures />
            <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
            <HomeAdsColumns />
            <HomeDefaultTopCategories />
            <HomeDefaultProductListing
                collectionSlug="plant-and-tree"
                title="Plant And Tree"
            />
            <HomeDefaultProductListing
                collectionSlug="pots-and-planters"
                title="Pots And Planters"
            />
            <HomeDefaultProductListing
                collectionSlug="seed-and-equipment"
                title="Seed And Equipment"
            />
            {/* <HomeAds /> */}
            {/* <DownLoadApp /> */}
            <NewArrivals collectionSlug="New-arrivals-products" />
            <Newletters />
            <SubscribePopup active={false} />
        </ContainerHomeDefault>
    );
};

export default HomepageDefaultPage;
