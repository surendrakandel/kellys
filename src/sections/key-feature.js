/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import Carousel from 'react-multi-carousel';
import ButtonGroup from 'components/button-group';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Response',
    title: 'Fast Response',
    text:
      'I assure you that we will work to get the help you need in very quick and convenient manner.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Personal Tax Preparation & Planning',
    title: 'Personal Tax Preparation & Planning',
    text:
      'Effective tax preparation and planning can help you to minimize your future tax liability. We can help you proactively manage both your personal and your business tax issues, including understanding how upcoming business opportunities impact your tax status and vice versa.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Tax Preparation & Planning for Business',
    title: 'Tax Preparation & Planning for Business',
    text:
    "Effective tax preparation and planning can help you to minimize your Business's future tax liability. We can help you proactively manage both your personal and your business tax issues, including understanding how upcoming business opportunities impact your tax status and vice versa.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Estate & Trust Tax Preparation',
    title: 'Estate & Trust Tax Preparation',
    text:
      'Estate matters affect everyone. By taking proactive steps today, you can ease the way for your heirs during a very difficult time. We can work with your legal counsel to help you to structure your estate and trusts to minimize taxes and ensure the smooth transition to your heirs. We are available to handle all estate and trust tax-related matters.',
  },
  {
    id: 5,
    imgSrc: Performance,
    altText: 'IRS Representation',
    title: 'IRS Representation',
    text:
      'An IRS audit can be an intimidating and complex process. If you or your business face an IRS audit, we can bring to bear years of experience in dealing with tax matters and IRS audit procedures to ensure that you are properly represented when dealing with the IRS and other tax authorities.',
  },
  {
    id: 6,
    imgSrc: Partnership,
    altText: 'Personal Tax Preparation & Planning',
    title: 'Personal Tax Preparation & Planning',
    text:
      'Effective tax preparation and planning can help you to minimize your future tax liability. We can help you proactively manage both your personal and your business tax issues, including understanding how upcoming business opportunities impact your tax status and vice versa.',
  },
  {
    id: 7,
    imgSrc: Subscription,
    altText: 'Payroll Services',
    title: 'Payroll Services',
    text:
    "Constantly changing federal, state and local laws and tax regulations make payroll management an ongoing challenge for business owners. Our payroll services professionals are well versed on these laws and regulations.",
  },
  {
    id: 8,
    imgSrc: Support,
    altText: 'Bookkeeping/Write-Up',
    title: 'Bookkeeping/Write-Up',
    text:
      'If your business does not currently have accounting staff or if your business is outgrowing its current bookkeeping system, we can provide comprehensive bookkeeping and write-up services to ensure the smooth operation of the financial side of your business.',
  },
  {
    id: 9,
    imgSrc: Subscription,
    altText: 'Sales Tax Services',
    title: 'Sales Tax Services',
    text:
    "State and local tax authorities are looking to maximize sales tax collections. We can help you understand and manage your sales tax obligations and prepare sales tax returns in an efficient and timely manner.",
  },
  {
    id: 10,
    imgSrc: Support,
    altText: 'Business Consulting',
    title: 'Business Consulting',
    text:
      'As a true business partner, we are available to help you deal with any business problem or opportunity. We stand ready to engage in business consulting projects to help you make the right decisions for the future of your business.',
  },
];

export default function KeyFeature() {
  return (
    <section className="p-24" sx={{ variant: 'section.keyFeature'  }, styles.section} id="services">
      <Container>
        <SectionHeader
         slogan="What we do?"
         title="We will help you with all your business advisory, accouting, payroll, and tax needs."
        />

        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

const styles = {
  section:{
    margin: "0px",
    fontSize: "25px",
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
