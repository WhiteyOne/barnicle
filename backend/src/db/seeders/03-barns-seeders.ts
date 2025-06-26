'use strict';

import { OptionsInterface } from "../../typings/seeders";

let options: OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
    up: async (queryInterface: any, Sequelize: any) => {
        options.tableName = 'Barns';
        return queryInterface.bulkInsert(options, [
            {
                name: "Jerry's Farm",
                about: "We have a wonderful faucility with a beautiful 10 acre property. There are loads of activites, animals and events we hold here.",
                domain: "@jfarms",
                previewImg: "https://storytellerphotographyimagesbyrebecca.com/wp-content/uploads/2019/03/9F4A3921THISLogoONE.jpg",
                ownerId: 1
            },
            {
                name: "Ruger Ranch",
                about: "We have been ranching since 1925, this is a s authentic as cowboys can get.",
                domain: "@rugerranchin",
                previewImg: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-8292480/original/1da681a9-cf7b-42e4-8c0b-42311ac12adb.jpeg?im_w=720",
                ownerId: 4
            },
            {
                name: "Schrute Farms",
                about: "If you're looking for a barn to put hair back on your chest, look no further.",
                domain: "@dwightskingdom",
                previewImg: "https://apis.xogrp.com/media-api/images/f0b0e3cb-1fe6-11e7-b589-12072ec58d1a",
                ownerId: 3
            },
            {
                name: "DND Quincy's Tavern",
                about: "Looking for a barn to experience the lores of 5E table top games? Look no further, you're about to depart into the mystics of adventure.",
                domain: "@quinkey",
                previewImg: "https://ilona-andrews.com/wp-content/uploads/2024/03/tavern.jpg",
                ownerId: 2
            },
            {
                name: "Willow Creek Stables",
                about: "A peaceful retreat where horses roam free and guests can relax by the willow trees.",
                domain: "@willowcreek",
                previewImg: "https://wyomingdra.com/wp-content/uploads/2020/04/red-rock-ranch-6.jpg",
                ownerId: 19
            },
            {
                name: "Red Rock Ranch",
                about: "Surrounded by red cliffs, our ranch offers unforgettable trail rides and western cookouts.",
                domain: "@redrockranch",
                previewImg: "https://images.squarespace-cdn.com/content/v1/64598a48becbcc130dbf2c03/215aa51f-54ca-47c2-b66f-526aac00792e/677_Barn-Photography-Art.jpg?format=1000w",
                ownerId: 5
            },
            {
                name: "Lazy Pine Farmstead",
                about: "Tucked in the forest, this cozy farm features fresh eggs, goats, and quiet mornings.",
                domain: "@lazypinefarm",
                previewImg: "https://t3.ftcdn.net/jpg/05/26/78/16/360_F_526781659_0WCJ8oO4Kn39l5F2lqEKLPTkJtigN1VN.jpg",
                ownerId: 6
            },
            {
                name: "Cedar Hollow Ranch",
                about: "Generations of family ranchers call this scenic hollow home. Come see why.",
                domain: "@cedarhollow",
                previewImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERow4hV5FWigW_Mrvn-T3-_-daFfkHq3SDg&s",
                ownerId: 7
            },
            {
                name: "Twin Oaks Homestead",
                about: "Experience real homesteading life under the shade of two great oaks.",
                domain: "@twinoaksfarm",
                previewImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGo_lSOg8X8KkV2fy3O6S8gd6nDdstxxm98w&s",
                ownerId: 8
            },
            {
                name: "Whispering Winds Ranch",
                about: "The breeze carries tales of wild mustangs and starry nights across these open plains.",
                domain: "@whisperwinds",
                previewImg: "https://alansfactoryoutlet.com/wp-content/uploads/2023/12/exploring-barn-types-styles.jpeg",
                ownerId: 9
            },
            {
                name: "Blue Sky Acres",
                about: "With nothing but sky above and green pastures below, our acres are your playground.",
                domain: "@blueskyacres",
                previewImg: "https://extension.usu.edu/smallfarms/images/barn.jpg",
                ownerId: 10
            },
            {
                name: "Golden Gate Farm",
                about: "Nestled near the coast, we blend agriculture, sustainability, and hospitality in one place.",
                domain: "@goldengatefarm",
                previewImg: "https://st.hzcdn.com/simgs/pictures/sheds/tjch-barn-tim-jackson-custom-homes-img~58d17fc109139959_14-8494-1-3afd9a5.jpg",
                ownerId: 11
            },
            {
                name: "Shadow Valley Ranch",
                about: "Ride through rolling shadows and warm sunsets in our hidden valley haven.",
                domain: "@shadowvalley",
                previewImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4934Eea6SOiH0EiikllliOWt3ezxXfo5_g&s",
                ownerId: 12
            },
            {
                name: "Maple Ridge Farm",
                about: "Famous for our syrup and fall festivals, this ridge lights up with color every October.",
                domain: "@mapleridge",
                previewImg: "https://www.triplecreekranch.com/wp-content/uploads/2021/04/Website2560x1422_-2.jpg",
                ownerId: 13
            },
            {
                name: "Broken Spur Ranch",
                about: "Rough, rugged, and authentic — this is cowboy country at its finest.",
                domain: "@brokenspurranch",
                previewImg: "https://www.siwashlake.com/media2/images/crop_1200_630/lodge/horses-galloping-by-lodge-at-siwash-lake.jpg",
                ownerId: 14
            },
            {
                name: "Honeybee Hollow",
                about: "A sweet little farm buzzing with life, bees, blooms, and community.",
                domain: "@honeybeehollow",
                previewImg: "https://cdn.prod.website-files.com/63d34df62762eff4536de2c6/679014d64ec3af4ee17a1a38_LVR-01.jpg",
                ownerId: 15
            },
            {
                name: "Highland Haven",
                about: "Perched in the hills, this is a paradise for nature lovers and livestock alike.",
                domain: "@highlandhaven",
                previewImg: "https://www.vistaverde.com/wp-content/uploads/2021/03/dude-ranch-horses-730x365.jpg",
                ownerId: 16
            },
            {
                name: "Prairie Sun Farm",
                about: "Sunsets blaze across the wide prairie here — home to our crops and cattle.",
                domain: "@prairiesun",
                previewImg: "https://www.mountainsky.com/wp-content/uploads/2018/03/Main-Lodge-Exterior.jpg",
                ownerId: 17
            },
            {
                name: "Rustic Roots Ranch",
                about: "Back to basics with modern charm — where every fence post has a story.",
                domain: "@rusticroots",
                previewImg: "https://onekindesign.com/wp-content/uploads/2021/12/Modern-Ranch-Style-Home-J-Christopher-Architecture-01-1-Kindesign.jpg",
                ownerId: 18
            },

        ], {});
    },

    down: async (queryInterface: any, Sequelize: any) => {
        options.tableName = 'Barns';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
            username: { [Op.in]: [''] }
        }, {});
    }
};
