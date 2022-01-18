import abstractimg from '../../images/Collections/abstract/abs-wavy.jpg'
import catboatsfishingimg from '../../images/Collections/fishing-catboats/bc-turtlecrawl3.jpg'
import caymanmemoriesimg from '../../images/Collections/cayman-memories/cm-bp2.jpg'
import liquidimg from '../../images/Collections/liquid-flow/lf-liquid2.jpg'
import womanimg from '../../images/Collections/woman/w-meaningfullmemories.jpg'
import faunaimg from '../../images/Collections/fauna/f-blueiguana.jpg'
import familytreeimg from '../../images/Collections/family-tree/ft-us2.jpg'
import beachimg from '../../images/Collections/beach/beach-sevenmilebeach2.jpg'


import dataAbstract from './collections/DataAbstractColl'
import dataBeach from './collections/DataBeachColls';
import dataFishing from './collections/DataFishingCatboatsColl.js'
import dataCaymanMemories from './collections/DataCaymanMemoriesColl';
import dataLiquid from './collections/DataLiquidColl'
import dataFamily from './collections/DataFamilyTreeColl'
import dataWoman from './collections/DataWomanColl'
import dataFauna from './collections/DataFaunaColl'

export const data = [
    {
        title: 'Abstract',
        image: abstractimg,
        qty: (dataAbstract.length),
        link: '/abstract'
    },
    {
        title: 'Catboats & Fishing',
        image: catboatsfishingimg,
        qty: (dataFishing.length),
        link: '/catboats-fishing'
    },
    {
        title: 'Cayman Memories',
        image: caymanmemoriesimg,
        qty: (dataCaymanMemories.length),
        link: '/cayman-memories'
    },
    {
        title: 'Liquid Flow',
        image: liquidimg,
        qty: (dataLiquid.length),
        link: '/liquid-flow'
    },
    {
        title: 'Woman',
        image: womanimg,
        qty: (dataWoman.length),
        link: '/woman'
    },
    {
        title: 'Fauna',
        image: faunaimg,
        qty: (dataFauna.length),
        link: '/fauna'
    },
    {
        title: 'Family Tree',
        image: familytreeimg,
        qty: (dataFamily.length),
        link: '/family-tree'
    },
    {
        title: 'Beach',
        image: beachimg,
        qty: (dataBeach.length),
        link: '/beach'
    },
]