
import SectionOverview from '../../Components/Sub/Subscription/SectionOverview';
import SectionHow from '../../Components/Sub/Subscription/SectionHow';
import SectionEfficiency from '../../Components/Sub/Subscription/SectionEfficiency';
import SectionSubscribeAd from '../../Components/Sub/Subscription/SectionSubscribeAd';
import SectionFaq from '../../Components/Sub/Subscription/SectionFaq';

const SubscriptionPage = () => {

 return (
    <div className="page-subscription">
        <SectionOverview />
        <SectionHow />
        <SectionEfficiency />
        <SectionSubscribeAd />
        <SectionFaq />
    </div>

 );
};

export default SubscriptionPage;