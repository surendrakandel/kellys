/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import Banners from '../assets/banner.jpg';
import HeroAnim from './heroanim';


export default function Banner() {
  return (
    <section sx={styles.banner} id="home" >
      <HeroAnim className="sm:top-0"/>
      <Container sx={styles.banner.container}>

        <Box sx={styles.banner.contentBox}>
        <p sx={{fontSize:"25px"}} className='font-sans mt-2'>Accouting & Tax Firm</p>
          <Heading as="h2" sx={{color:"rgb(7,55,104)", fontSize:"40px"}}>
            We help the Small Businesses & Entrepreneurs to create
          </Heading>
          <p sx={{color:"rgb(7,55,104)", fontSize:"35px", marginTop:"5px" }}>
          extraordinary companies</p>
          <Button  variant="primary"><a href="#book_a_meeting">Lets Work Together to Succeed</a></Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={Banners} alt="banner"  />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    // backgroundColor:"rgb(0,149,152)",
    zIndex: 2,
    height: "1220px",
    width:"100%",
    minWidth:"500px",
    fontFamily:"font-sans",
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop:"170px",
      fontFamily:"font-sans",
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
      fontFamily:"font-sans",
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
        maxHeight:"500px"
      },
    },
  },
};
