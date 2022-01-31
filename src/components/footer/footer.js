/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import Logos from 'assets/logos.svg';
import { FaRegBell } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer sx={styles.footer} >
      <Container className="p-8">
        {/* End of footer widgets area */}
        <Box className="py-6 pb-10" sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={Logos} alt="Logo" sx={{color:"rgb(255,162,49)", width:"250px"}}/>
          </Link>
          <Box sx={styles.footer.menus} >
          <nav>
              {data.map(({ path, label }, i) => (
                  <a href={"#"+path} sx={styles.a} >
                  {label}
                  </a>
              ))}
          </nav>
          </Box>
        </Box>
        <Text className="text-sm text-center font-sans" sx={styles.footer.copyright}>
          Copyright by {new Date().getFullYear()} TodayTech, LLC( www.todaytech.io )
        </Text>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    fontFamily:"font-sans",
    minWidth:"500px",
    backgroundColor: 'rgb(7,55,104)',
    footerBottomArea: {
      borderTopColor: 'border_color',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        minWidth: "500px",
        width: "100%",
        maxWidth:"1240px",
        display: 'flex',
        justifyContent:"end",
        color:"white",
        alignItems: 'center',
        flexWrap: 'wrap',
      },
    },
    a:{
      px: [2, null, 4],
    },
    link: {
      fontSize: [1, '15px'],
      color: 'white',
      fontWeight: '600',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
    },
    copyright: {
      color:"rgb(236,42,85)",
      fontWeight:700,
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },
      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
