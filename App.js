import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import Tuotelista from './pages/Tuotelista';
//import Homescreen from './pages/Homescreen';
//import Tabs1 from './Navigation/Tabs1';
import Navitabs from './Navigation/Navitabs';
//import StackPerus from './Navigation/StackPerus';


const data = [
  {
    quantity: 0,
     _id: 1,
    hinta: '129,90€',
    hintaI: 129.90,
    otsikko: 'Näppäimistö',
    paiva: '6.6.2019',
    kuvaus:
      'Razer Ornata Chroma ja sen upouusi Razer Mecha-Membrane yhdistävät kumikupukytkimien ja mekaanisten kytkimien parhaimmat puolet...',
    kuva:
      'https://www.pngarts.com/files/4/Gaming-Keyboard-Transparent-Background-PNG.png',
  },
  {
    quantity: 0,
    _id: 2,
    hinta: '189,78€',
    hintaI: 189.78,
    otsikko: 'Samsung puhelin',
    paiva: '8.6.2019',
    kuvaus:
      'Galaxy S7:n muotoilussa ei ole tehty kompromisseja. Tuloksena on verraton käytettävyys, jossa edistykselliset...',

    kuva: 'http://pngies.com/wp-content/uploads/edd/2015/10/iphone6s.png',
  },
  {
    quantity: 0,
    _id: 3,
    hinta: '89,79€',
    hintaI: 89.79,
    otsikko: 'Peli hiiri',
    paiva: '20.6.2019',
    kuvaus:
      'Logitechin lippulaivahiiri on suunniteltu tehokäyttäjille ja alansa parhaille...',

    kuva:
      'https://cdn.shopify.com/s/files/1/1693/6515/products/fanduco-mice-demon-hunter-gaming-mouse-with-9-programmable-buttons-27424611219_2000x.jpg?v=1509179865',
  },
  {
    quantity: 0,
    _id: 4,
    hinta: '101,00€',
    hintaI: 101.00,
    otsikko: 'Kuulokkeet',
    paiva: '8.6.2019',
    kuvaus:
      'Kasvatettu malli Sennheiser Momentum kuulokkeista on vihdoin täällä...',

    kuva:
      'https://www.beatsbydre.com/content/dam/beats/web/pcp/headphones/pro/_0002_overear-pro-black-rgb-thrqrtleft.png.small.2x.png',
  },
];


const gamedata = [
  {
    quantity: 0,
    _id: 1,
    hintaI: 49.90,
    hinta: '49,90€',
    otsikko: 'Resident Evil 2 Remake PS4',
    paiva: '6.6.2019',
    kuvaus:
      'Resident Evil 2, klassikko joka määritteli genren, tulee takaisin. Nyt voit selvittää ongelmia, kokea klassisen toiminnan sekä hyytävän kauhun täysin uusissa kuteissa...',
    kuva:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255294_sd.jpg;maxHeight=640;maxWidth=550',
  },
  {
    quantity: 0,
    _id: 2,
    hintaI: 54.90,
    hinta: '54,90€',
    otsikko: 'Red Dead Redemption 2',
    paiva: '8.6.2019',
    kuvaus:
      'Villin lännen aikakausi on saapumassa päätökseensä viranomaisten metsästäessä viimeisiä lainsuojattomia jengejä. Antautumattomat ja taipumattomat tapetaan...',

    kuva: 'https://psking.nl/wp-content/uploads/2018/10/Red-dead-redemption-2.png',
  },
  {
    quantity: 0,
    _id: 3,
    hintaI: 43.90,
    hinta: '43,90€',
    otsikko: 'Dark Souls III - The Fire Fades Edition',
    paiva: '20.6.2019',
    kuvaus:
      'Arvostelijoiden ylistämä Dark Souls III palaa nyt Game of the Year -versiona sisältäen Dark Souls III -pelin, Ashes of Ariandel lisäosan ja The Ringed City -lisäosan...',

    kuva:
      'https://dustinweb.azureedge.net/image/352712/400/320/namco-dark-souls-3-goty-edition---ps4-sony-playstation-4.png',
  },
  {
    quantity: 0,
    _id: 4,
    hintaI: 19.90,
    hinta: '19,90€',
    otsikko: 'Bloodborne PS4',
    paiva: '8.6.2019',
    kuvaus:
      'Anna pelkosi johdattaa sinua. Bloodborne on legendaarisen Souls-pelisarjan tekijöiden Hidetaka Miyazakin ja FromSoftwaren timanttinen luomus...',

    kuva:
      'https://i5.walmartimages.com/asr/3237a1ba-bdc1-4a16-9f47-e254faf62395_1.0f0c007bb931f3094db3bfa9b3894211.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
  },
];


const consoledata = [
  {
    quantity: 0,
    _id: 1,
    hintaI: 399.90,
    hinta: '399,90€',
    otsikko: 'Sony PlayStation 4 Pro',
    paiva: '6.6.2019',
    kuvaus:
      'Uskomattomia peli- ja viihde-elämyksiä: Sykkivän energiset pelit, uskomattoman terävät elokuvat ja ällistyttävän tarkka kuva...',
    kuva:
      'https://backgroundcheckall.com/wp-content/uploads/2017/12/ps4-transparent-background-1.jpg',
  },
  {
    quantity: 0,
    _id: 2,
    hintaI: 429.90,
    hinta: '429,90€',
    otsikko: 'Microsoft Xbox One X',
    paiva: '8.6.2019',
    kuvaus:
      'Kuuden teraflopin grafiikkapiirin ansiosta pelit toimivat paremmin kuin koskaan ennen...',

    kuva: 'https://www.mobilux.lv/img_goods/kg90i20x_full.jpg',
  },
  {
    quantity: 0,
    _id: 3,
    hintaI: 329.90,
    hinta: '329,90€',
    otsikko: 'Nintendo Switch -pelikonsoli',
    paiva: '20.6.2019',
    kuvaus:
      'Onko sinun joskus täytynyt lopettaa pelaaminen, koska sinulla ei ole ollut tarpeeksi aikaa pelata? Nintendo Switch voi muuttua tilanteesi mukaan, jolloin se vastaa parhaiten tarpeitasi...',

    kuva:
      'https://media.wired.com/photos/5a3b0971eb4788232f94236e/master/w_2400,c_limit/nintendo-TA.jpg',
  },
  {
    quantity: 0,
    _id: 4,
    hintaI: 149.90,
    hinta: '149,90€',
    otsikko: 'Nintendo 2DS XL -pelikonsoli',
    paiva: '8.6.2019',
    kuvaus:
      'New Nintendo 2DS XL -käsikonsolissa on kosketusnäyttö, peliohjaimet ja useita painikkeita, joten voit helposti pelata sekä yksinkertaisia että monipuolisempia pelejä...',

    kuva:
      'https://cdn02.nintendo-europe.com/media/images/01_website_elements/hardware_1/hardware_2015_NewNintendo3DSXL_Blue.png',
  },
];


const tuolidata = [
  {
    quantity: 0,
    _id: 1,
    hintaI: 549.99,
    hinta: '549,99€',
    otsikko: 'AKRacing Onyx DELUXE',
    paiva: '6.6.2019',
    kuvaus:
      'AKRacing Onyx -tuolin tyylikäs musta väri yhdessä laadukkaan viimeistelyn kanssa takaa ensimmäisen luokan ilmeen...',
    kuva:
      'https://tietokonekauppa.fi/uploads/image/large_460299_AKRACING_ONYX_Deluxe_Full_Leather_Gaming_Chair_Black_AK_ONYX_DELUXE_0769498677810.jpg?1495105252',
  },
  {
    quantity: 0,
    _id: 2,
    hintaI: 249.99,
    hinta: '249,99€',
    otsikko: 'Arozzi Torretta Gaming Chair',
    paiva: '8.6.2019',
    kuvaus:
      'Arozzi Torretta -perheen tuolit tarjoavat merkittäviä rakenteellisia parannuksia istumamukavuuteen, jonka ansiosta voit mennä syvemmälle lempipeliisi, tai olla tuottavampi työssäsi...',

    kuva: 'https://arozzi.se/wp-content/uploads/2018/10/Torretta-xl-green.jpg?gid=11',
  },
  {
    quantity: 0,
    _id: 3,
    hintaI: 219.90,
    hinta: '219,90€',
    otsikko: 'L33T Gaming Elite V3',
    paiva: '20.6.2019',
    kuvaus:
      'Elite V3 on kunnianosoitus kaikille pelaajille ja harrastajille, jotka haluavat laadukkaan pelituolin mistään tinkimättä...',

    kuva:
      'https://kauppa.telia.fi/yksityisille/images/product/500x500/01_L33TGamingEliteV3PU_green.png',
  },
  {
    quantity: 0,
    _id: 4,
    hintaI: 329.99,
    hinta: '329,99€',
    otsikko: 'AKRacing Nitro Gaming Chair',
    paiva: '8.6.2019',
    kuvaus:
      'Toimistotyön tai pitkien pelisessioiden aiheuttamat selkävaivat johtuvat usein huonosta ryhdistä istuttaessa...',

    kuva:
      'https://www.akracing.com/wp-content/uploads/2015/01/HS8A6041.jpg',
  },
];



const laptopdata = [
  {
    quantity: 0,
    _id: 1,
    hintaI: 899.90,
    hinta: '899,90€',
    otsikko: 'Acer Nitro 5 15,6',
    paiva: '6.6.2019',
    kuvaus:
      'Nitro 5 on tinkimätön ja tyylikäs 15,6-tuumainen kannettava tietokone, joka soveltuu erinomaisesti pelaamiseen...',
    kuva:
      'https://static.acer.com/up/Resource/Acer/Laptops/NITRO_5_2018/Gallery/20180619/An_AN515-42_52_bk-photogallery-05.png',
  },
  {
    quantity: 0,
    _id: 2,
    hintaI: 899.90,
    hinta: '899,90€',
    otsikko: 'HP Pavilion Gaming 15-cx0006no 15,6',
    paiva: '8.6.2019',
    kuvaus:
      'HP Pavilion Gaming -kannettava suoriutuu tehtävästä kuin tehtävästä: pelaamisesta, sisällönluonnista ja viihteestä. Intel Core -prosessori ja erillinen näytönohjain takaavat erinomaisen suorituskyvyn kaikkiin tilanteisiin...',

    kuva: 'https://media.power.fi/images/products/903873/903873_1_600x600_w_g.jpg',
  },
  {
    quantity: 0,
    _id: 3,
    hintaI: 5115.90,
    hinta: '5115,90€',
    otsikko: 'MSI GT83 TITAN 8RG 18,4',
    paiva: '20.6.2019',
    kuvaus:
      'MSI on valmistanut maailman ensimmäisen pelikannettaville tarkoitetun mekaanisen näppäimistön, joka kiehtoi pelaajia kaikkialla maailmassa...',

    kuva:
      'https://www.data-systems.fi/wp-content/uploads/2018/11/62201747_6228701133.png',
  },
  {
    quantity: 0,
    _id: 4,
    hintaI: 3599.90,
    hinta: '3599,90€',
    otsikko: 'Asus ROG G703 17,3',
    paiva: '8.6.2019',
    kuvaus:
      'Korkealuokkaisella metallisella rakenteella ja ensiluokkaisilla komponenteilla varustettu uuden sukupolven ASUS ROG G703 edustaa järeiden pelikannettavien terävintä kärkeä...',

    kuva:
      'https://cdn.verk.net/images/9/2_471287-1104x760.jpeg',
  },
];





class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navitabs screenProps={{data, gamedata, consoledata, tuolidata, laptopdata}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default App;
