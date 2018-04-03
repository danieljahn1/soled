
const initialState = {
    listings: [
        {
            id: 10,
            brand:'Jordan', 
            size:'10.5',
            model:'Platinum Pinnacle Air Jordan 6',
            style:'Mid',
            version:'', 
            condition:'Excellent',
            description:'The Air Jordan 6 “Pinnacle” doesn’t feature any actual 24K gold accents like its predecessors; instead, a premium Metallic Gold patent leather wraps around the entirety of the Air Jordan 6 while contrasting white makes for a smooth transition to the midsole and outsole unit.',
            sneakerImage:'https://poshmark.com/listing/Platinum-Pinnacle-Air-Jordan-6-59f763c6f092820c850b2302', 
        },
        {
            id: 11,
            brand:'Jordan', 
            size:'8',
            model:'Jordan 11 Heiress Stingray',
            style:'Mid',
            version:'', 
            condition:'Good',
            description:'Made exclusively in women’s sizes, this new Air Jordan 11 colorway dubbed “Heiress” comes dressed in a mix of Black, Metallic Gold and White. What really helps the shoe stand out is the swapping of the mesh and patent leather upper for a premium suede construction that features glitter accents, Gold detailing and Black stingray detailing on the mudguard. Finishing things off are a White midsole and translucent Black outsole.',
            sneakerImage:'https://poshmark.com/listing/Jordan-11-heiress-stingray-5ac3aeae3afbbdea3eed8b5e', 
        },
        {
            id: 12,
            brand:'Adidas', 
            size:'11.5',
            model:'NMD Trail',
            style:'Low',
            version:'Pharrell Wiliam Human Race', 
            condition:'Excellent',
            description:'Shoes are brand new never been worn. Comes with the original box(slightly damaged).',
            sneakerImage:'https://www.kixify.com/product/adidas-pharrell-williams-human-race-nmd-trail-n-e-r', 
        },
        {
            id: 13,
            brand:'Adidas', 
            size:'9',
            model:'NMD R1 PK NYC',
            style:'Low',
            version:'Red Apple', 
            condition:'Good',
            description:'adidas has enlisted Joey Bada$$ and his Pro Era crew members for a special edition zine showcasing how Brooklyn has shaped them as creatives to accompany the release of this adidas NMD R1 pair. The head-turning colorway utilizes a vibrant red ‘camouflaged’ Primeknit upper in honor of the city’s Big Apple nickname and a black heel with ‘New York’ instead of the usual international thematic elements. Each pair is tagged with a number 1 through 200.',
            sneakerImage:'https://www.kixify.com/product/adidas-nmd-r1-pk-nyc-red-apple-size-9us', 
        },
        {
            id: 14,
            brand:'Nike',
            size:'10',
            model:'Air Max',
            style:'Low',
            version:'270 Gold',
            condition:'Excellent',
            description:'Taking design cues from the iconic Air Max 180 and Air Max 93, the all-new Air Max 270 features the first-ever air unit designed expressly for a lifestyle shoe, a unit that clocks in as the tallest-ever at 32-mm. Filled with fresh Oregon air right down the road from the main Nike campus, the Air Max 270 blends elements from the Air Max family.',
            sneakerImage:'https://www.kixify.com/product/nike-air-max-270-black-university-gold',
        },
        {
            id: 15,
            brand:'Nike',
            size:'10.5',
            model:'Air Max',
            style:'High',
            version:'Express',
            condition:'Good',
            description:'The Nike Air Max Express is an aggressive new look from Nike that is dropping in a few equally aggressive colorways. This colorway is probably going to be a Miami Dolphins fan’s best friend with it’s liberal use of sport turquoise and team orange but even if you aren’t into football chances are you can get behind this colorway. They are available now at select retailers including Premier.',
            sneakerImage:'https://www.kixify.com/node/14897096',
        },
        {
            id: 16,
            brand:'Saucony',
            size:'8.5',
            model:'Bodega x Saucony',
            style:'Low',
            version:'Elite Shadow 5000',
            condition:'Good',
            description:'We’re happy to say, even six years later, that the Bodega entry into the Saucony Elite series, the suede, color-blocked Shadow 5000 remains a coveted property.  As part of our ongoing tenth anniversary celebrations, the cavernous Bodega vaults have been entered, a la Tomb Raiders or Indiana Jones, and combed through.  Intrepid explorers have returned to the surface with the Saucony Elite Shadow 5000.',
            sneakerImage:'https://www.kixify.com/product/bodega-x-saucony-elite-shadow-5000-0',
        },
    ]
}

const rootReducer = (state = initialState, action) => {


}

export default rootReducer;