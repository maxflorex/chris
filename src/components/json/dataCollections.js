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
        link: '/collections/abstract'
    },
    {
        title: 'Catboats & Fishing',
        image: catboatsfishingimg,
        qty: (dataFishing.length),
        link: '/collections/catboats-fishing'
    },
    {
        title: 'Cayman Memories',
        image: caymanmemoriesimg,
        qty: (dataCaymanMemories.length),
        link: '/collections/cayman-memories'
    },
    {
        title: 'Liquid Flow',
        image: liquidimg,
        qty: (dataLiquid.length),
        link: '/collections/liquid-flow'
    },
    {
        title: 'Woman',
        image: womanimg,
        qty: (dataWoman.length),
        link: '/collections/woman'
    },
    {
        title: 'Fauna',
        image: faunaimg,
        qty: (dataFauna.length),
        link: '/collections/fauna'
    },
    {
        title: 'Family Tree',
        image: familytreeimg,
        qty: (dataFamily.length),
        link: '/collections/family-tree'
    },
    {
        title: 'Beach',
        image: beachimg,
        qty: (dataBeach.length),
        link: '/collections/beach'
    },
]