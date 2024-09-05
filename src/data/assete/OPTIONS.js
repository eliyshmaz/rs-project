import photo1 from './assete/Jette-home-for-sale-0_0002_2-1024x683.jpg'
import photo2 from './assete/im-569452.png'
import photoa from './assete/imagereader.png'
import Map from './assete/map.jpg'

export const OPTIONS = [
    {
        id: 1,
        model: 'house',
        size: 41,
        balcony: false,
        bedroom: 9,
        price: 198,
        image: photo1,
        codepsotal: 1000,
        buildingmaintenancefee: 120,
        smoking: true,
        people: 1,
        city: 'brussels',
        map: Map,
        adress: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5038.312362407071!2d4.349860676847822!3d50.846792058747134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47f4614f1f1%3A0xb03c355d8fe2cfb6!2sGrand%20Place!5e0!3m2!1sen!2sbe!4v1720865630799!5m2!1sen!2sbe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'


    },
    {
        id: 3,
        model: 'studio',
        size: 41,
        balcony: false,
        bedroom: 9,
        price: 981,
        image: photo2,
        codepsotal: 1000,
        city: 'brussels',
        smoking: true,
        people: 2,
        map: Map,
        adress: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5038.312362407071!2d4.349860676847822!3d50.846792058747134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4823c776081%3A0xc04f02e7e8a20983!2sRoyal%20Park%20Theatre!5e0!3m2!1sen!2sbe!4v1720865817553!5m2!1sen!2sbe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
        id: 2,
        model: 'studio',
        size: 41,
        price: 100,
        image: photoa,
        balcony: true,
        bedroom: 9,
        buildingmaintenancefee: 120,
        codepsotal: 1030,
        smoking: true,
        city: 'brussels',
        people: 9,
        map: Map,
        adress: 'none'

    },
]