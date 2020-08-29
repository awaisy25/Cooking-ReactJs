import Recipe from "../dataModel/Recipe";
import Category from "../dataModel/Category";
import ingredient from "../dataModel/ingredient";
import Dietary from "../dataModel/Dietary";
// creating a custom array of our data for display purposes
export const Categories = [
    new Category("itl", "Italian"),
    new Category("pas", "Pasta"),
    new Category("Q&E", "Quick and Easy"),
];

export const Dietaries = [
    new Dietary("vg", "Vegan"),
    new Dietary("veg", "Vegetarian"),
    new Dietary("gf", "Gluten Free"),
    new Dietary("pf", "Peanut Free")
]
export const Ingredients = [
    new ingredient("Tomato Sauce", 
    "Prego Pasta Sauce, Traditional Italian Tomato Sauce", 
    4.37, 
    "67 oz", 
    "https://www.walmart.com/ip/Prego-Pasta-Sauce-Traditional-Italian-Tomato-Sauce-67-Ounce-Jar/15529694", 
    "https://i5.walmartimages.com/asr/0d34c3d2-e734-4a98-a185-6df693eaf789_1.66f1eb1837da2a674538fe0310246381.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"),
    new ingredient("Spaghetti Noodles",
    "Barilla Classic Blue Box Thin Spaghetti",
    1.28,
    "16 oz",
    "https://www.walmart.com/ip/Barilla-Classic-Blue-Box-Pasta-thick-Spaghetti-16-oz/10309154?selected=true",
    "https://i5.walmartimages.com/asr/24ddc1f6-4187-49b0-b896-0e735216bdc2.0a7a8ffe4103902a426dbe722eae4175.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
    ),
    new ingredient("Olive Oil",
    "Pompeian Extra Light Tasting Olive Oil", 
    7.62,
    "32 oz", 
    "https://www.walmart.com/ip/Pompeian-Extra-Light-Tasting-Olive-Oil-32-fl-oz/22257654?wpa_bd=&wpa_pg_seller_id=F55CDC31AB754BB68FE0B39041159D63&wpa_ref_id=wpaqs:SStoKjr0qQETECLeleBLT7-ge6GrP-dfpZGFTMHq8U5IYPgQAsp6jmUmkwzZFwGZ9YYJoTUwhNTE3zkULQJUAzPjGwTJGt3YqBvmvGoC5iqn6x6VrZZZox8hCXEpjkEPbNL2JE_LndtrkxU5F6tKhWlzFz4NFFrYa6It51qH3XsOcSqEK915hb0oQqywMSUkF78gh2p78fAAVl1p1qu1stOSY_gcvTynDGdpOZQmKcTi3U4K0P1YqwapHJ8_j2T3&wpa_tag=&wpa_aux_info=&wpa_pos=1&wpa_plmt=1145x1145_T-C-IG_TI_1-2_HL-INGRID-GRID-NY&wpa_aduid=8302e7eb-096b-4656-9242-73459db4943a&wpa_pg=search&wpa_pg_id=olive%20oil&wpa_st=olive%2Boil&wpa_tax=976759_976786_2569148&wpa_bucket=__bkt__",
    "https://i5.walmartimages.com/asr/00da9cbe-3ec8-4552-80e8-db8138876718.4021cfd1fdb60ee3d7840d98e44d4c6e.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
    ),
    new ingredient("Onion", 
    "Yello Onions", 
    0.98, 
    "1 lb", 
    "https://www.walmart.com/ip/Yellow-Onions-Each/51259212",
    "https://i5.walmartimages.com/asr/33813ffc-7fc4-4ff5-8667-897307ca4054_3.c1faf49fe38fb5e447847773284aaafd.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
    ),
    new ingredient("Parmesan Cheese",
    "Kraft Grated Cheese, Parmesan Cheese",
    6.28,
    "16 oz",
    "https://www.walmart.com/ip/Kraft-Grated-Cheese-Parmesan-Cheese-16-oz-Jar/10295354",
    "https://i5.walmartimages.com/asr/042a1ae9-450a-4a25-b1b3-faf34d97a7b7_1.846995b5957fa165f2a7756a6ed11652.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
    ),
    new ingredient("White Bread",
    "Wonder Classic White",
    2.18,
    "20 oz",
    "https://www.walmart.com/ip/Wonder-Classic-White-Bread-20-oz-Loaf/37858875",
    "https://i5.walmartimages.com/asr/b095e852-b047-4227-b7d4-6a7b2b697949.91094ffd161b9eb8eca15635931f4856.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
    ),
    new ingredient("Ham",
    "Spam Classic",
    5.46,
    "12 oz",
    "https://www.walmart.com/ip/Spam-Classic-12-0-OZ/159980722",
    "https://i5.walmartimages.com/asr/9b8c3144-7ce5-4dd5-a8e6-8b111b5bfb55_1.5147f881918ee0147562e3b012553750.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
    ),
    new ingredient("Pineapple",
    "Dole Crushed Pineapple in 100% Pineapple Juice, Canned Pineapple",
    1.48,
    "20 oz",
    "https://www.walmart.com/ip/Dole-Crushed-Pineapple-in-100-Pineapple-Juice-Canned-Pineapple-20-Oz/10304331?selected=true",
    "https://i5.walmartimages.com/asr/0245fe61-0dfe-4b63-ac45-5127177e7ca2_2.863755228741098a579c8121c8837ada.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
    ),
    new ingredient("Cheese",
    "Kraft Singles Cheese Slices, White American Cheese",
    3.28,
    "12 oz",
    "https://www.walmart.com/ip/Kraft-Singles-Cheese-Slices-White-American-Cheese-16-ct-12-oz-Wrapper/12018245",
    "https://i5.walmartimages.com/asr/dce8525b-b180-447e-8432-e3e2a575ab14.d984f0851b9043fa4dfe6d8a53d7b673.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
    )
]
export const AllRecipes = [
    new Recipe(
        1,
        ["itl", "pas", "Q&E"],
        "Spaghetti with Tomato Sauce",
        "Easy",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
        20,
        ["vg","pf"],
        [
        'Cut the tomatoes and the onion into small pieces.',
        'Boil some water - add salt to it once it boils.',
        'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
        'In the meantime, heaten up some olive oil and add the cut onion.',
        'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
        'The sauce will be done once the spaghetti are.',
        'Feel free to add some cheese on top of the finished dish.'
        ],
        [
        {'id':'Tomato Sauce','description':'10 oz Tomato Sauce'},
        {'id': 'Olive Oil', 'description':'1 Tablespoon of Olive Oil'},
        {'id': 'Onion', 'description': '0.2 pound Onion'},
        {'id': 'Spaghetti Noodles', 'description': '8 oz Spaghetti'},
        {'id': 'Parmesan Cheese', 'description': 'Some Parmesan Cheese'},
        ],
        600
    ),
    new Recipe(
        2,
        ["Q&E"],
        "Toast Hawaii",
        "Easy",
        "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
        10,
        [],
        [
            'Butter one side of the white bread',
            'Layer ham, the pineapple and cheese on the white bread',
            'Bake the toast for round about 10 minutes in the oven at 200°C'  
        ],
        [
        {'id': 'White Bread', 'description': '1 Slice White Bread'},
        {'id': 'Ham', 'description': '1 Slice Ham'},
        {'id': 'Pineapple', 'description': '1 Slice Pineapple'},
        {'id': 'Cheese', 'description': '1-2 Slices of Cheese'}   
        ],
        900

    )

]