import './Execom_styles.css';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';


import Abhiram from './assets/execom/Abhiram.jpg';
import Anandakrishnan from './assets/execom/Anandakrishnan.jpg';
import AdithyaKrishna from './assets/execom/AdithyaKrishna.jpg';
import JoelJohn from './assets/execom/JoelJohn.jpg';
import Manasi from './assets/execom/Manasi.jpg';
import Linda from './assets/execom/Linda.jpg';
import Vishnu from './assets/execom/Vishnu.jpg';
import Nandhana from './assets/execom/Nandhana.jpg';
import Anakha from './assets/execom/Anakha.jpg';
import Piyush from './assets/execom/Piyush.jpg';
import Sourab from './assets/execom/Sourab.jpg';
import Gautham from './assets/execom/Gautham.jpg';
import AdithyanR from './assets/execom/AdithyanR.jpg';
import Stuthy from './assets/execom/Stuthy.jpg';
import Toms from './assets/execom/Toms.jpeg';
import Afshan from './assets/execom/Afshan.jpg';
import Rehan from './assets/execom/Rehan.jpg';
import Aileen from './assets/execom/Aileen.jpg';
import Akash from './assets/execom/Akash.jpg';
import Arathy from './assets/execom/Arathy.jpg';
import Arvind from './assets/execom/Arvind.jpg';
import Ben from './assets/execom/Ben.jpeg';
import Hrithik from './assets/execom/Hrithik.jpg';
import Lakshmi from './assets/execom/Lakshmi.jpg';
import Naureen from './assets/execom/Naureen.jpg';
import Swathy from './assets/execom/Swathy.jpg';
import Tilottama from './assets/execom/Tilottama.jpg';
import Sanjana from './assets/execom/Sanjana.jpg';
import Neha from './assets/execom/Neha.jpg';
import Melvin from './assets/execom/Melvin.jpg';
import Kedar from './assets/execom/Kedar.jpg';
import FarahFathima from './assets/execom/FarahFathima.jpg';
import Dan from './assets/execom/Dan.jpg';
import Bhadra from './assets/execom/Bhadra.jpg';
import BenThomas from './assets/execom/BenThomas.jpeg';
import Anupam from './assets/execom/Anupam.jpeg';
import Pranav from './assets/execom/Pranav.jpg';
import Mitra from './assets/execom/Mitra.jpg';
import Vishnumaya from './assets/execom/Vishnumaya.jpg';
import Kailas from './assets/execom/Kailas.jpeg';
import Aabid from './assets/execom/Aabid.jpg';
import Antony from './assets/execom/Antony.jpeg';

const generalMembers = [
    { name: 'Ajay Suresh SJ', position: 'Chairperson', image: Anupam, linkedin: 'https://www.linkedin.com/in/anupam-kurien-mathew/' },
    { name: 'Bhadra S', position: 'Secretary', image: Bhadra, linkedin: 'https://www.linkedin.com/in/bhadra-s-2033701b8/' },
    { name: 'Ben Thomas', position: 'Chief Link Representative', image: BenThomas, linkedin: 'https://www.linkedin.com/in/benthomas2309/' },
    { name: 'Mitra Prasannan', position: 'Technical Consultant', image: Mitra, linkedin: 'https://www.linkedin.com/in/mitra-prasannan-3a076523b/' },
    { name: 'Antony Joy', position: 'Technical Consultant', image: Antony, linkedin: 'https://www.linkedin.com/in/antony-joy/' },
    { name: 'Anandakrishnan K', position: 'Treasurer', image: Anandakrishnan, linkedin: 'https://www.linkedin.com/in/anandakrishnan-k-48a05a250' },
    { name: 'Abhiram Sudharshanan', position: 'Vice chair', image: Abhiram, linkedin: 'https://www.linkedin.com/in/abhiram-sudharsanan-845b8624b' },
    { name: 'Lakshmi Priya S', position: 'Joint Secretary', image: Lakshmi, linkedin: 'https://www.linkedin.com/in/lakshmi-priya-s-12b2b6249' },
    { name: 'Kedar M Kamath', position: 'Joint Secretary', image: Kedar, linkedin: 'https://www.linkedin.com/in/kedar-m-kamath-58001b27b' },
    { name: 'Joel George John', position: 'Project Head', image: JoelJohn, linkedin: 'https://www.linkedin.com/in/joel-john-07299b247/' },
    { name: 'Adithya Krishna K', position: 'Technical Coordinator', image: AdithyaKrishna, linkedin: 'https://www.linkedin.com/in/adithya-krishna-a22315235' },

    { name: 'Ben Bejoy Kudiyirippil', position: 'Link Representative', image: Ben, linkedin: 'https://www.linkedin.com/in/benbejoy' },
    { name: 'Kailas Nath', position: 'Membership Development Coordinator (MDC)', image: Kailas, linkedin: 'https://www.linkedin.com/in/kailas-nath-787363224' },
    // { name: '', position: 'Webmaster', image: null },
    { name: 'Vishnumaya S', position: 'Design Consultant', image: Vishnumaya, linkedin: 'https://www.linkedin.com/in/vishnumaya-s-6b3737209/' },
    { name: 'Toms K Nixon', position: 'Design Head', image: Toms, linkedin: 'https://www.linkedin.com/in/tomsknixon2002' },
];
const societyMembers_WIE = [

    { name: 'Neha Anwar', position: 'Chairperson', image: Neha, linkedin: 'https://www.linkedin.com/in/neha-anwar-a3a554231/' },
    { name: 'Manasi John Varghese', position: 'Vice Chairperson', image: Manasi, linkedin: 'https://www.linkedin.com/in/manasi-john-44906b275' },
    { name: 'Aileen Elsa Ajeesh', position: 'Secretary', image: Aileen, linkedin: 'https://www.linkedin.com/in/aileen-elsa-ajeesh-696116275' },
    { name: 'Farah Fathima', position: 'Joint Secretary', image: FarahFathima, linkedin: 'https://www.linkedin.com/in/farah-fathima-902b0b279' },
    { name: 'Swathy Krishna Sajeev', position: 'Technical Coordinator', image: Swathy, linkedin: 'https://www.linkedin.com/in/swathy-krishna-sajeev-78036b27b' },

];
const societyMembers_IAS = [

    { name: 'Sanjana D V', position: 'Chairperson', image: Sanjana, linkedin: 'https://www.linkedin.com/in/sanjana-d-v-506832219' },
    { name: 'Pranav R Nair', position: 'Vice Chairperson', image: Pranav, linkedin: 'https://www.linkedin.com/in/pranav-rajesh-nair-29112a251' },
    { name: 'Arvind Mahesh Iyer', position: 'Secretary', image: Arvind, linkedin: 'https://www.linkedin.com/in/arvind-iyer-544456249' },
    { name: 'Hrithik B Karikkot', position: 'Joint Secretary', image: Hrithik, linkedin: 'https://www.linkedin.com/mwlite/in/hrithik-b-699979204' },
    { name: 'Naureen Rukhiya', position: 'Technical Coordinator', image: Naureen, linkedin: 'https://www.linkedin.com/in/naureen-rukhiya-60a36b27b' },

];
const societyMembers_EDS = [

    { name: 'Dan Mani Binu', position: 'Chairperson', image: Dan, linkedin: 'https://www.linkedin.com/in/dan-mani-binu-8389b4205' },
    { name: 'Linda Mary Zacharia', position: 'Vice Chairperson', image: Linda, linkedin: 'https://www.linkedin.com/in/linda-mary-zacharia-379962266' },
    { name: 'Afshan Abbas', position: 'Secretary', image: Afshan, linkedin: 'https://www.linkedin.com/in/afshan-abbas-8a2ab3230' },
    { name: 'Sourab M Kalliyan', position: 'Joint Secretary', image: Sourab, linkedin: 'https://www.linkedin.com/in/sourab-m-kalliyan' },
    { name: 'Aabid Mohamed A', position: 'Technical Coordinator', image: Aabid, linkedin: 'https://www.linkedin.com/in/aabid-mohamed-a-b22a02229' },

];
const societyMembers_CS = [

    // { name: '#', position: 'Chairperson', image: null, linkedin: null },
    { name: 'Vishnu Mohan E S', position: 'Vice Chairperson', image: Vishnu, linkedin: 'https://www.linkedin.com/in/vishnu-mohan-e-s-15b793228' },
    // { name: '#', position: 'Secretary', image: null, linkedin: null },
    // { name: '#', position: 'Joint Secretary', image: null, linkedin: null },
    { name: 'Mohd Rehan Ansari', position: 'Webmaster', image: Rehan, linkedin: 'https://www.linkedin.com/in/mohd-rehan-ansari-58bab0247' },

];
const societyMembers_CAS = [

    { name: 'Melvin Manoj', position: 'Chairperson', image: Melvin, linkedin: 'https://www.linkedin.com/in/melvin-manoj-84a38120a/' },
    { name: 'Adithyan R', position: 'Vice Chairperson', image: AdithyanR, linkedin: 'https://www.linkedin.com/in/adithiyan-r-825558224' },
    { name: 'Gautham Babu Maveli', position: 'Secretary', image: Gautham, linkedin: 'https://www.linkedin.com/in/maveli' },
    { name: 'Anakha Pramod', position: 'Joint Secretary', image: Anakha, linkedin: 'https://www.linkedin.com/in/anakha-pramod-5ab7a2243' },
    { name: 'Piyush Soni', position: 'Webmaster', image: Piyush, linkedin: 'https://www.linkedin.com/in/haruki25' },

];
const societyMembers_SIGHT = [

    // { name: '#', position: 'Chairperson', image: null, linkedin: null },
    { name: 'Nandhana P', position: 'Vice Chairperson', image: Nandhana, linkedin: 'https://www.linkedin.com/in/nandanapradeep' },
    { name: 'Tilottama Basu', position: 'Secretary', image: Tilottama, linkedin: 'https://www.linkedin.com/in/tilottama-basu-71001427b/' },
    { name: 'Akash E K', position: 'Treasurer', image: Akash, linkedin: 'https://www.linkedin.com/in/akash-e-k-b47458249' },
    { name: 'Stuthy K Sudheer', position: 'Project Coordinator', image: Stuthy, linkedin: 'https://www.linkedin.com/in/stuthy-k-sudheer-03b80b224' },


];
const societyMembers_EdSoc = [
    { name: 'Arathy Sunil', position: 'Joint Secretary', image: Arathy, linkedin: 'https://www.linkedin.com/in/arathy-sunil-12b337244/' },
];
const Content = () => {
    return (
        <>
            <div className="heading">
                <Container sx={{ py: 18 }} maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h3"
                        align="center"
                        fontWeight="600"
                        color="text.primary"
                        gutterBottom
                    >
                        IEEE SB NITC
                    </Typography>
                    {/* <div className="heading">
                        <h1>IEEE SB NITC</h1>
                    </div> */}
                    <Typography component="h1"
                        variant="h4"
                        align="center"
                        fontWeight="400"
                        color="text.primary"
                        gutterBottom>
                        EXECOM 2023-24
                    </Typography>
                    {/* <div className="heading2"><h2>EXECOM 2023-24</h2></div> */}
                    <Typography variant="h6" align="center" color="#1D1D1F" paragraph>
                        "Where passion meets technology, we pave the way for engineering excellence."
                    </Typography>
                    {/* <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        fontWeight="600"
                        color="text.primary"
                        gutterBottom
                        
                    >
                        Meet the Team
                    </Typography> */}

                </Container>
            </div >
        </>
    );
}
const TeamMemberCard = ({ member }) => {
    const { name, position, image, linkedin } = member;
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const top = window.pageYOffset + window.innerHeight;
            const cardOffset = document.getElementById(name).offsetTop;

            if (top > cardOffset) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [name]);

    return (

        <Card id={name} sx={{
            width: { xs: '250px', sm: '300px', md: '300px' }, height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '30px', opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-in-out', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)'
        }} className="reveal-card fade-in" >
            <CardMedia
                component="div"
                sx={{
                    position: 'relative',
                    height: '0',
                    paddingTop: '120%',

                }}
                className='photo'
            ><img
                    src={image || 'https://via.placeholder.com/240'}
                    alt={name}
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '106%',
                        objectFit: 'cover',
                    }}
                /></CardMedia>
            <CardContent sx={{ flexGrow: 1, paddingTop: '40px' }} className="scrollable-content">
                <Typography variant="h5" component="h2" fontWeight="600" className='Name' >
                    {position}
                    <IconButton aria-label="LinkedIn" href={linkedin} target="_blank" rel="noopener noreferrer" className="iconButton" sx={{ paddingTop: '3px' }}>
                        <LinkedInIcon fontSize="large" style={{ color: "#0077B5" }} />
                    </IconButton>
                </Typography>

                <Typography variant="h6" component="h3" color="textPrimary" >
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
};

const Execom = () => {

    return (
        <React.Fragment>
            <Content />
            <CssBaseline />
            {/* maxWidth="lg" sx={{ py: 9 }} */}
            <Container sx={{ py: 9, maxWidth: 'md' }}  >

                <Typography component="h2"
                    variant="h3"
                    align="center"
                    fontWeight="600"
                    color="#F5F5F7"
                    sx={{ py: 2, padding: '2%', border: '2px solid black', background: '#1D1D1F', borderRadius: '25px' }}>
                    General Members

                </Typography>

                <Stack spacing={{ xs: 10, sm: 3, md: 4 }} sx={{ pt: 4 }} xs={12} sm={6} md={4}>
                    <Grid container direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 12, md: 10, lg: 8 }}  >
                        {generalMembers.map((member, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <TeamMemberCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                <Typography component="h2"
                    variant="h4"
                    align="center"
                    fontWeight="600"
                    color="#F5F5F7"
                    gutterBottom
                    sx={{ py: 2, marginTop: '15%', marginBottom: '4%', padding: '2%', border: '2px solid black', background: '#1D1D1F', borderRadius: '25px' }}>
                    Women in Engineering Society(WIE)
                </Typography>
                <Stack spacing={{ xs: 10, sm: 3, md: 4 }} sx={{ pt: 4 }} xs={12} sm={6} md={4}>
                    <Grid container direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 12, md: 10, lg: 8 }} >
                        {societyMembers_WIE.map((member, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <TeamMemberCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
                <Typography component="h2"
                    variant="h4"
                    align="center"
                    fontWeight="600"
                    color="#F5F5F7"
                    gutterBottom
                    sx={{ py: 2, marginTop: '20%', marginBottom: '4%', padding: '2%', border: '2px solid black', background: '#1D1D1F', borderRadius: '25px' }}>
                    Industrial Application Society(IAS)
                </Typography>
                <Stack spacing={{ xs: 10, sm: 3, md: 4 }} sx={{ pt: 4 }} xs={12} sm={6} md={4}>
                    <Grid container direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 12, md: 10, lg: 8 }} >
                        {societyMembers_IAS.map((member, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <TeamMemberCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
                <Typography component="h2"
                    variant="h4"
                    align="center"
                    fontWeight="600"
                    color="#F5F5F7"
                    gutterBottom
                    sx={{ py: 2, marginTop: '20%', marginBottom: '4%', padding: '2%', border: '2px solid black', background: '#1D1D1F', borderRadius: '25px' }}>
                    Electron Devices Society (EDS)
                </Typography>
                <Stack spacing={{ xs: 10, sm: 3, md: 4 }} sx={{ pt: 4 }} xs={12} sm={6} md={4}>
                    <Grid container direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 12, md: 10, lg: 8 }} >
                        {societyMembers_EDS.map((member, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <TeamMemberCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
                <Typography component="h2"
                    variant="h4"
                    align="center"
                    fontWeight="600"
                    color="#F5F5F7"
                    gutterBottom
                    sx={{ py: 2, marginTop: '20%', marginBottom: '4%', padding: '2%', border: '2px solid black', background: '#1D1D1F', borderRadius: '25px' }}>
                    Computer Society(CS)
                </Typography>
                <Stack spacing={{ xs: 10, sm: 3, md: 4 }} sx={{ pt: 4 }} xs={12} sm={6} md={4}>
                    <Grid container direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 12, md: 10, lg: 8 }} >
                        {societyMembers_CS.map((member, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <TeamMemberCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
                <Typography component="h2"
                    variant="h4"
                    align="center"
                    fontWeight="600"
                    color="#F5F5F7"
                    gutterBottom
                    sx={{ py: 2, marginTop: '20%', marginBottom: '4%', padding: '2%', border: '2px solid black', background: '#1D1D1F', borderRadius: '25px' }}>
                    Circuits and Systems Society(CAS)
                </Typography>
                <Stack spacing={{ xs: 10, sm: 3, md: 4 }} sx={{ pt: 4 }} xs={12} sm={6} md={4}>
                    <Grid container direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 12, md: 10, lg: 8 }} >
                        {societyMembers_CAS.map((member, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <TeamMemberCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
                <Typography component="h2"
                    variant="h4"
                    align="center"
                    fontWeight="600"
                    color="#F5F5F7"
                    gutterBottom
                    sx={{ py: 2, marginTop: '20%', marginBottom: '4%', padding: '2%', border: '2px solid black', background: '#1D1D1F', borderRadius: '25px' }}>
                    Special Interest Group on Humanitarian Technology (SIGHT)
                </Typography>
                <Stack spacing={{ xs: 10, sm: 3, md: 4 }} sx={{ pt: 4 }} xs={12} sm={6} md={4}>
                    <Grid container direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 12, md: 10, lg: 8 }} >
                        {societyMembers_SIGHT.map((member, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <TeamMemberCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
                <Typography component="h2"
                    variant="h4"
                    align="center"
                    fontWeight="600"
                    color="#F5F5F7"
                    gutterBottom
                    sx={{ py: 2, marginTop: '20%', marginBottom: '4%', padding: '2%', border: '2px solid black', background: '#1D1D1F', borderRadius: '25px' }}>

                    Education Society (EdSoc)
                </Typography>
                <Stack spacing={{ xs: 10, sm: 3, md: 4 }} sx={{ pt: 4 }} xs={12} sm={6} md={4}>
                    <Grid container direction={{ xs: "column", sm: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 12, md: 10, lg: 8 }} >
                        {societyMembers_EdSoc.map((member, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} >
                                <TeamMemberCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </React.Fragment>
    );
};

export default Execom;
