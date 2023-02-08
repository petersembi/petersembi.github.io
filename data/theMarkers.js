// get coordinates of major cities in every country here:
// https://www.countrycoordinate.com/

var markers = [
    {
        country_name : 'Burundi',
        contact_person : 'Ms. Sandrine Nkurunziza',
        contact_description : 'Contact Person, GNRC Burundi',
        latitude :'-3.361378',
        longitude : '29.359878', 
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Sandrine_Nkurunziza.jpg'

    },
    { 
        country_name : 'Cameroon',
        contact_person : 'Mr. Alexander Gwanvalla',
        contact_description : 'Contact Person, GNRC Cameroon.',
        latitude : '7.3697',
        longitude : '12.3547', 
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Alexander_Gwanvalla.jpg'

    },
    { 
        country_name : 'Comoros',
        contact_person : 'Mr. Akim Said M’changama',
        contact_description : 'Coordinator, GNRC Comoros.',
        latitude : '-11.6455',
        longitude : '43.3333', 
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Akim_Mchangama.jpg'

    },
    { 
        country_name : ' DR Congo',
        contact_person : 'Mr. Jonas Habimana',
        contact_description : 'Contact Person, GNRC DR Congo',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Jonas_Habimana.jpg',
        latitude : '-4.0383',
        longitude : '21.7587'

    },
    { 
        country_name : 'DR Congo',
        contact_person : 'Ms. Yvette Munyerenkana',
        contact_description : 'Contact Person, GNRC DR Congo',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Ms.-Yvette-Munyerenkana-Contact-Person-DRC.jpg',
        latitude : '-4.1383',
        longitude : '21.7587'

    },
    { 
        country_name : 'Ethiopia',
        contact_person : 'Mr. Eyob Yishak',
        contact_description : 'Contact Person, GNRC Ethiopia',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Eyob_Yishak.jpg',
        latitude : '8.980603',
        longitude : '38.757761'

    },
    { 
        country_name : 'Ghana',
        contact_person : 'Mr. Emmanuel Ametepey',
        contact_description : 'Contact Person, GNRC Ghana',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Emmanuel_Ametepey.jpg',
        latitude : '5.603717',
        longitude : '-0.186964'

    },
    { 
        country_name : 'Kenya ',
        contact_person : 'Sh. Ramadhan Aula',
        contact_description : 'Coordinator, GNRC Kenya ',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Ramadhan_Aula.jpg',
        latitude : '-1.292066',
        longitude : '36.821946'

    },
    { 
        country_name : 'Mauritius',
        contact_person : 'Mr. Belall Maudarbux',
        contact_description : 'Contact Person, GNRC Mauritius',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Belall_Maudarbux.jpg',
        latitude : '-20.160891',
        longitude : '57.501222'
    },
    { 
        country_name : 'Mozambique',
        contact_person : 'Mr. Muhammad Yassine',
        contact_description : 'Contact Person, GNRC Mozambique',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Muhammad_Yassine.jpg',
        latitude : '-25.891968',
        longitude : '32.605135'
    },
    { 
        country_name : 'Namibia',
        contact_person : 'Ms. Natasha Kanguatjivi',
        contact_description : 'Contact Person, GNRC Namibia',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Natasha_Kanguatjivi.jpg',
        latitude : '-22.560881',
        longitude : '17.065755'
    },
    { 
        country_name : 'Nigeria',
        latitude : '6.524379',
        longitude : '3.379206',
        contact_person : 'Sr. Agatha Chikelue',
        contact_description : 'Contact Person, GNRC Nigeria',
        img_url : ' 	https://gnrc.net/wp-content/uploads/2022/10/Agatha_Chikelue.jpg'
       
    },
    { 
        country_name : 'Rwanda ',
        latitude : '-1.970579',
        longitude : '30.104429',
        contact_person : 'Ayoub Nsanzintwali',
        contact_description : 'Contact Person, GNRC Rwanda ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Ayoub_Nsanzintwali.jpg'
       
    },
    { 
        country_name : 'Senegal ',
        latitude : '14.4974',
        longitude : '-14.4524',
        contact_person : 'Mr. Ba Abdoul Aziz',
        contact_description : 'Contact Person, GNRC Senegal ',
        img_url : ' 	https://gnrc.net/wp-content/uploads/2022/10/Ba_Abdoul_Aziz.jpg'
       
    },
    { 
        country_name : 'Sierra Leone ',
        latitude : '8.465677',
        longitude : ' -13.231722',
        contact_person : 'Ptr. Peter Alfred',
        contact_description : 'Coordinator, GNRC Sierra Leone ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Peter_Alfred.jpg'
       
    },
    { 
        country_name : 'Somalia',
        latitude : '2.046934',
        longitude : ' 45.318162',
        contact_person : 'Mr. Abdiweli Waberi',
        contact_description : 'Coordinator, GNRC Somalia',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Abdiweli_Waberi.jpg'
       
    },
    { 
        country_name : 'South Africa',
        latitude : '-33.924869',
        longitude : '18.424055',
        contact_person : 'Ms. Saydoon Nisa Sayed',
        contact_description : 'Coordinator, South Africa',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Saydoon_Nisa_Sayed.jpg'
       
    },
    { 
        country_name : 'South Sudan',
        latitude : '4.859363',
        longitude : '31.571250',
        contact_person : 'Bishop Martin Mogga Ifoga',
        contact_description : 'Coordinator, South Sudan',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Martin_Ifoga.jpg'
       
    },
    { 
        country_name : 'Tanzania',
        latitude : '	-6.162959',
        longitude : '35.751607',
        contact_person : 'Ms. Joyce Mdachi',
        contact_description : 'Coordinator, GNRC Tanzania',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Joyce_Mdachi.jpg'
       
    },
    { 
        country_name : 'Uganda',
        latitude : '0.34759',
        longitude : ' 32.582520',
        contact_person : 'Geoffrey Omony',
        contact_description : 'Coordinator, GNRC Uganda ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Geoffrey_Omony.jpg'
       
    },
    { 
        country_name : 'Argentina ',
        latitude : '-34.603684',
        longitude : '-58.381559',
        contact_person : 'Ana de Medio',
        contact_description : 'Coordinator, GNRC Argentina  ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Ana_de_Medio.jpg'

    },
    { 
        country_name : 'Brasil  ',
        latitude : '-15.794229',
        longitude : '-47.882166',
        contact_person : 'Rabbi Pablo Berman',
        contact_description : 'Coordinator, GNRC Brazil   ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Pablo_Berman.jpg'

    },
    { 
        country_name : 'Chile',
        latitude : '-33.448890',
        longitude : '-70.669265',
        contact_person : 'María José Ananías',
        contact_description : 'Coordinator, GNRC Chile ',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Mari%CC%81a_Anani%CC%81as.jpg'

    },
    { 
        country_name : 'Colombia',
        latitude : '4.710989',
        longitude : '-74.072092',
        contact_person : 'Luis Alberto Rubiano',
        contact_description : 'Coordinator, GNRC Colombia ',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Luis_Alberto_Rubiano.jpg'

    },
    { 
        country_name : 'Cuba ',
        latitude : '23.113592',
        longitude : '-82.366596',
        contact_person : 'Alicia Sevila',
        contact_description : 'Coordinator, GNRC Cuba  ',
        img_url : '		https://gnrc.net/wp-content/uploads/2022/10/Alicia_Sevila.jpg'

    },
    { 
        country_name : 'Cuba ',
        latitude : '23.113592',
        longitude : '-82.366596',
        contact_person : 'Alicia Sevila',
        contact_description : 'Coordinator, GNRC Cuba  ',
        img_url : '		https://gnrc.net/wp-content/uploads/2022/10/Alicia_Sevila.jpg'

    },
    { 
        country_name : 'Dominican Republic ',
        latitude : '18.486058',
        longitude : '-69.931212',
        contact_person : 'Cándido Heredia',
        contact_description : 'Coordinator, GNRC Dominican Republic',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Ca%CC%81ndido_Heredia.jpg'

    },
    { 
        country_name : 'Dominican Republic ',
        latitude : '18.486058',
        longitude : '-69.931212',
        contact_person : 'Cándido Heredia',
        contact_description : 'Coordinator, GNRC Dominican Republic',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Ca%CC%81ndido_Heredia.jpg'

    },
    { 
        country_name : 'Ecuador ',
        latitude : '-0.180653',
        longitude : '-78.467838',
        contact_person : 'Mr. Marco Laguatasi',
        contact_description : 'Coordinator, GNRC Ecuador',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Marco_Laguatasi.jpg'

    },
    { 
        country_name : ' El Salvador ',
        latitude : '13.692940',
        longitude : '-89.218191',
        contact_person : 'Larry Madrigal',
        contact_description : 'Coordinator, El Salvador',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Larry_Madrigal.jpg'

    },
    { 
        country_name : ' Guatemala ',
        latitude : '14.634915',
        longitude : '-90.506882',
        contact_person : 'Lorena Coy',
        contact_description : 'Coordinator, Guatemala',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Lorena_Coy.jpg'

    },
    { 
        country_name : 'Mexico ',
        latitude : '19.432608',
        longitude : '-99.133208',
        contact_person : 'Sr. Diana Garcia',
        contact_description : 'Coordinator, Mexico',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Diana_Garcia.jpg'

    },
    { 
        country_name : 'Nicaragua',
        latitude : '12.114993',
        longitude : '-86.236174',
        contact_person : 'Azucena Lopez',
        contact_description : 'Coordinator, Nicaragua',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Azucena_Lopez.jpg'

    },
    { 
        country_name : 'Panama',
        latitude : '8.982379',
        longitude : ' -79.519870',
        contact_person : 'Isis Navaro',
        contact_description : 'Coordinator, Panama',
        img_url : ' 	https://gnrc.net/wp-content/uploads/2022/10/Isis_Navaro.jpg'

    },
    { 
        country_name : 'Peru',
        latitude : '	-12.046373',
        longitude : ' -77.042754',
        contact_person : 'Esperanza Principiom',
        contact_description : 'Coordinator, Peru',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Esperanza_Principiom.jpg'

    },
    { 
        country_name : 'Uruguay ',
        latitude : '-34.901113',
        longitude : ' -56.164531',
        contact_person : 'John Hamilton',
        contact_description : 'Coordinator, Uruguay ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/12/John-Hamilton.jpg'

    },
    { 
        country_name : 'Bosnia and Herzegovina ',
        latitude : '43.856259',
        longitude : '18.413076',
        contact_person : 'Ms. Ismeta Begic',
        contact_description : 'Coordinator, Bosnia and Herzegovina',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Ismeta_Begic.jpg'

    },
    { 
        country_name : 'Bosnia and Herzegovina ',
        latitude : '43.856259',
        longitude : '18.413076',
        contact_person : 'Ms. Ismeta Begic',
        contact_description : 'Coordinator, Bosnia and Herzegovina',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Ismeta_Begic.jpg'

    },
    { 
        country_name : ' Croatia ',
        latitude : '45.815011',
        longitude : '15.981919',
        contact_person : 'Coordinator, Croatia',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Ana_C%CC%8Cuc%CC%8Ckovic%CC%81.jpg',
        contact_description : 'Ms. Ana Žnidarec Čučković'

    },
    { 
        country_name : 'Germany',
        latitude : '52.520007',
        longitude : '13.404954',
        contact_person : 'Ms. Natalia Seriakovac',
        contact_description : 'Coordinator, Germany ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Natalia_Seriakova.jpg'

    },
    { 
        country_name : 'Macedonia',
        latitude : '41.997346',
        longitude : '21.427996',
        contact_person : 'Mr. Dragi Zmijanac',
        contact_description : 'Coordinator, Macedonia ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Dragi_Zmijanac.jpg'

    },
    { 
        country_name : 'Moldova',
        latitude : '47.010453',
        longitude : '28.863810',
        contact_person : 'Ms. Angela Chicu',
        contact_description : 'Coordinator, GNRC Moldova ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Angela_Chicu.jpg'

    },
    { 
        country_name : 'Romania ',
        latitude : '44.426767 ',
        longitude : '26.102538',
        contact_person : 'Ms. Laura Molnar',
        contact_description : 'Coordinator, GNRC Romania  ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Laura_Molnar.jpg'

    },
    { 
        country_name : 'Serbia  ',
        latitude : '44.786568',
        longitude : '20.448922',
        contact_person : 'Mr. Srdjan Vlaskalic',
        contact_description : 'Coordinator, GNRC Serbia   ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Srdjan_Vlaskalic.jpg'

    },
    { 
        country_name : 'Spain  ',
        latitude : '40.416775',
        longitude : '-3.703790',
        contact_person : 'Ms. Sonia de la Puente',
        contact_description : 'Coordinator, GNRC Spain   ',
        img_url : ' '

    },
    { 
        country_name : 'Egypt',
        latitude : '30.044420',
        longitude : '31.235712',
        contact_person : 'Dr. Reham Abdullah',
        contact_description : 'Contact Person, GNRC Egypt   ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Reham_Abdullah.jpg'

    },
    { 
        country_name : 'Jordan',
        latitude : '31.945367',
        longitude : '35.928372',
        contact_person : 'Mr. Khaled Batarseh',
        contact_description : 'Coordinator, GNRC Jordan   ',
        img_url : '  https://gnrc.net/wp-content/uploads/2022/10/Khaled_Batarseh.jpg'

    },
    { 
        country_name : 'Iraq',
        latitude : '33.312806',
        longitude : '44.361488',
        contact_person : 'Mr. Jameel Hassan Faraj',
        contact_description : 'Contact Person, GNRC Iraq   ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Mr.-Jameel-Hassan-Faraj-Contact-Person-Iraq-768x768.jpg'

    },
    { 
        country_name : 'Lebanon ',
        latitude : '33.893791 ',
        longitude : '35.501777',
        contact_person : 'Fr. Abdo Raad',
        contact_description : 'Coordinator, GNRC Lebanon  ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Abdo_Raad.jpg'

    },
    { 
        country_name : 'Palestine',
        latitude : '31.78336',
        longitude : '35.23388',
        contact_person : 'Mr. Rojer Salameh',
        contact_description : 'Coordinator, GNRC Palestine ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Rojer_Salameh.jpg'

    },
    { 
        country_name : 'Palestine',
        latitude : '31.78336',
        longitude : '35.23388',
        contact_person : 'Mr. Rojer Salameh',
        contact_description : 'Coordinator, GNRC Palestine ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Rojer_Salameh.jpg'

    },
    { 
        country_name : 'Sudan ',
        latitude : ' 15.500654',
        longitude : '32.559899',
        contact_person : 'Ms. Marian Iskander',
        contact_description : 'Contact Person, GNRC Sudan  ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Marian_Iskander.jpg'

    },
    { 
        country_name : 'Yemen  ',
        latitude : ' 15.369445',
        longitude : '44.191007',
        contact_person : 'Mr. Tariq Al Amri',
        contact_description : 'Coordinator, GNRC Yemen   ',
        img_url : ' https://gnrc.net/wp-content/uploads/2022/10/Tariq_Al_Amri.jpg'

    },
    { 
        country_name : 'Canada   ',
        latitude : ' 45.421530',
        longitude : '-75.697193',
        contact_person : 'Dr. Fozia Alvi',
        contact_description : 'Contact Person, GNRC Canada    ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Fozia_Alvi.jpg'

    },
    { 
        country_name : 'USA    ',
        latitude : ' 43.610150',
        longitude : ' -122.201516',
        contact_person : 'Rabbi Diana Gerson',
        contact_description : 'Coordinator, GNRC USA     ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Diana_Gerson.jpg'

    },
    { 
        country_name : 'USA    ',
        latitude : ' 47.610150',
        longitude : '-122.201516',
        contact_person : 'Sage Williams',
        contact_description : 'Contact Person, GNRC USA     ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Sage_Williams.jpg'

    },
    { 
        country_name : 'Bhutan ',
        latitude : ' 27.472792 ',
        longitude : '89.639286',
        contact_person : 'Mr. Phurba Sonam Waiba',
        contact_description : 'Coordinator, GNRC Bhutan      ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Phurba_Waiba.jpg'

    },
    { 
        country_name : 'India ',
        latitude : ' 19.075984',
        longitude : '72.877656',
        contact_person : 'Mr. Gopal Vijayaragavan',
        contact_description : 'Coordinator, GNRC India ',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Gopal_Vijayaragavan.jpg'

    },
    { 
        country_name : 'India ',
        latitude : ' 19.075984',
        longitude : '72.877656',
        contact_person : 'Mr. Gopal Vijayaragavan',
        contact_description : 'Coordinator, GNRC India ',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Gopal_Vijayaragavan.jpg'

    },
    { 
        country_name : 'Indonesia  ',
        latitude : '-6.175110',
        longitude : ' 106.865039',
        contact_person : 'Ms. Nerlian Gogali',
        contact_description : 'Coordinator, GNRC Indonesia ',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Nerlian_Gogali.jpg'

    },
    { 
        country_name : 'Malaysia   ',
        latitude : '3.139003 ',
        longitude : ' 101.686855',
        contact_person : 'Dr. Shazmin Rafeeq',
        contact_description : 'Coordinator, GNRC Malaysia  ',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Shazmin_Rafeeq.jpg'

    },
    { 
        country_name : 'Maldives   ',
        latitude : '4.175496 ',
        longitude : ' 73.509347',
        contact_person : 'Ms. Fathimath Afiya',
        contact_description : 'Contact Person, GNRC Maldives',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Fathimath_Afiya.jpg'

    },
    { 
        country_name : 'Nepal    ',
        latitude : '27.717245 ',
        longitude : ' 85.323960',
        contact_person : 'Dr. Chintamani Yogi',
        contact_description : 'Coordinator, Nepal ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Chintamani_Yogi.jpg'

    },
    { 
        country_name : 'Pakistan',
        latitude : '33.660036',
        longitude : ' 73.229354',
        contact_person : 'Mr. Iftikhar Mubarik',
        contact_description : 'Contact Person, GNRC Pakistan',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Iftikhar_Mubarik.jpg'

    },
    { 
        country_name : 'Pakistan',
        latitude : '33.660036',
        longitude : ' 72.229354',
        contact_person : 'Mr. David Paul',
        contact_description : 'Contact Person, GNRC Pakistan',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/David_Paul.jpg'

    },
    { 
        country_name : 'Philippines ',
        latitude : '	14.599512',
        longitude : '  120.984219',
        contact_person : 'Bai Rohaniza Sumundad-Usman',
        contact_description : 'Contact Person, GNRC Philippines ',
        img_url : 'https://gnrc.net/wp-content/uploads/2022/10/Bai_Rohaniza.jpg'

    },
    { 
        country_name : 'Sri Lanka ',
        latitude : ' 6.927079',
        longitude : ' 79.861243',
        contact_person : 'Ms. Lakshman Sashikala',
        contact_description : 'Coordinator, GNRC Sri Lanka ',
        img_url : '	https://gnrc.net/wp-content/uploads/2022/10/Lakshman_Sashikala.jpg'

    },


];