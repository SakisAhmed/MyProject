import {
    ADD_ITEM,
    DELETE_ITEM
} from "../Constants/actionsTypes";
const initialState = {
    menuList: [
        {
            id: 1,
            title:"WHOPPER®",
            description: "Une viande de bœuf grillée à la flamme, des tomates fraîches, une salade croquante",
            cathegorie:"Burger",
            imageURL:"/images/b1.png",
            price: 15
            
        },
        {
            id: 2,
            title:"STEAKHOUSE",
            description: "bacon, oignons , une viande de bœuf grillée à la flamme et du fromage fondu",
            cathegorie:"Burger",
            imageURL:"/images/b2.png",
            price: 17
            
        },
        {
            id: 3,
            title:"BIG KING®",
            description: "deux viandes de bœuf origine Tunisie grillées à la flamme et son fromage fondant",
            cathegorie:"Burger",
            imageURL:"/images/b3.png",
            price: 18
            
        },
        {
            id: 4,
            title:"CHICKEN BBQ",
            description: "Un poulet pané et une délicieuse sauce barbecue.",
            cathegorie:"Burger",
            imageURL:"/images/b4.png",
            price: 13
            
        },
        {
            id: 5,
            title:"BIG FISH",
            description: "Un filet de poisson pané croustillant, de la salade croquante",
            cathegorie:"Burger",
            imageURL:"/images/b5.png",
            price: 14
            
        },
        {
            id: 6,
            title:"DOUBLE STEAKHOUSE",
            description: "Deux viandes de boeuf grillées à la flamme, du bacon, des oignons croustillants",
            cathegorie:"Burger",
            imageURL:"/images/b6.png",
            price: 23
            
        },
        {
            id: 7,
            title:"Coca.Cola",
            description: "25 cl ",
            cathegorie:"Boisson",
            imageURL:"/images/bo1.png",
            price: 2.5
            
        },
        {
            id: 8,
            title:"Coca.Cola Light",
            description: "25 cl",
            cathegorie:"Boisson",
            imageURL:"/images/bo2.png",
            price: 2.5
            
        },
        {
            id: 9,
            title:"Coca.Cola zero",
            description: "25 cl",
            cathegorie:"Boisson",
            imageURL:"/images/bo3.png",
            price: 2.5
            
        },
        {
            id: 10,
            title:"Fanta",
            description: "25 cl",
            cathegorie:"Boisson",
            imageURL:"/images/bo4.png",
            price: 2.5
            
        },
        {
            id: 11,
            title:"Sprite",
            description: "25 cl",
            cathegorie:"Boisson",
            imageURL:"/images/bo5.png",
            price: 2.5
            
        },
        
        {
            id: 13,
            title:"MENU BIG KING",
            description: "Fondez pour ses deux viandes de bœuf grillées à la flamme et son fromage fondant",
            cathegorie:"Menu",
            imageURL:"/images/m1.png",
            price: 20
            
        },
        {
            id: 14,
            title:"MENU BBQ CHEESE & BACON",
            description: " du fromage fondu, du bacon, des oignons et évidemment sa viande grillée à la flamme",
            cathegorie:"Menu",
            imageURL:"/images/m2.png",
            price: 23
            
        },
        {
            id: 15,
            title:"MENU DOUBLE WHOPPER® CHEESE",
            description: "Deux savoureuses viandes de boeuf grillées et une tranche de fromage",
            cathegorie:"Menu",
            imageURL:"/images/m3.png",
            price: 26
            
        },
        {
            id: 16,
            title:"MENU CRISPY CHICKEN",
            description: "Un délicieux burger au poulet (très !) croustillant, accompagné de tomates fraîches et de salade",
            cathegorie:"Menu",
            imageURL:"/images/m4.png",
            price: 18
            
        },
        {
            id: 17,
            title:"MENU BIG FISH",
            description: "Un poisson pané croustillant, des tomates, du fromage et une salade croquante",
            cathegorie:"Menu",
            imageURL:"/images/m5.png",
            price: 19
            
        },
        {
            id: 18,
            title:"MENU DOUBLE STEAKHOUSE",
            description: "Deux viandes de boeuf grillées à la flamme, du bacon, des oignons croustillants ",
            cathegorie:"Menu",
            imageURL:"/images/m6.png",
            price: 28
            
        },
        {
            id: 19,
            title:"MOYENNES FRITES",
            description: "Dorées, croustillantes et surtout généreuses… nos frites sont parfaites!",
            cathegorie:"Snack",
            imageURL:"/images/s1.png",
            price: 4
            
        },
        {
            id: 20,
            title:"ONION RINGS",
            description: "La boucle est bouclée! Croustillants et fondants, à dévorer seul ou à partager",
            cathegorie:"Snack",
            imageURL:"/images/s2.png",
            price: 4
            
        },
        {
            id: 21,
            title:"KING NUGGETS",
            description: " Une panure ultra croustillante et un poulet 100% issus de filet d'origine Tunisien",
            cathegorie:"Snack",
            imageURL:"/images/s3.png",
            price: 6
            
        },
        {
            id: 22,
            title:"CHILI CHEESE NUGGETS",
            description: " Généreusement garnis de fromage fondant et de piment",
            cathegorie:"Snack",
            imageURL:"/images/s4.png",
            price: 5
            
        },
        {
            id: 23,
            title:"KING WINGS",
            description: "Des ailes de poulet dorées, tendres et délicatement épicées",
            cathegorie:"Snack",
            imageURL:"/images/s5.png",
            price: 7
            
        },
        {
            id: 24,
            title:"CAESAR CHEESY BOWL ",
            description: " salades, des penne façon Napolitaine, des tomates marinées, Grana Padano, fromage !",
            cathegorie:"Salade",
            imageURL:"/images/sa1.png",
            price: 10
            
        },
        {
            id: 25,
            title:"CAESAR CHICKEN BOWL",
            description: " salades, des penne façon Napolitaine, des tomates marinées, du Grana Padano, du poulet pané",
            cathegorie:"Salade",
            imageURL:"/images/sa2.png",
            price: 11
            
        },
        {
            id: 26,
            title:"ENERGY CHICKEN BOWL",
            description: "salades, des lentilles Corail et épeautre, des tomates marinées, Mozzarella, du poulet pané",
            cathegorie:"Salade",
            imageURL:"/images/sa3.png",
            price: 13
            
        },
        {
            id: 27,
            title:"ENERGY CHEESY BOWL",
            description: "salades, des lentilles Corail et épeautre, des tomates marinées, Mozzarella, des bouchées au fromage",
            cathegorie:"Salade",
            imageURL:"/images/sa4.png",
            price: 12
            
        },
        {
            id: 28,
            title:"PETITE SALADE",
            description: "salades, des morceaux de Grana Padano et des tomates séchées ",
            cathegorie:"Salade",
            imageURL:"/images/sa5.png",
            price: 10
            
        },
        {
            id: 24,
            title:"Fondant",
            description: "Fondant chocolat ou noisette",
            cathegorie:"Dessert",
            imageURL:"/images/d1.png",
            price: 4.5
            
        },
        {
            id: 25,
            title:"Muffin",
            description: "Muffin aux choix",
            cathegorie:"Dessert",
            imageURL:"/images/d2.png",
            price: 4
            
        },
        {
            id: 26,
            title:"Donnuts",
            description: "Donnuts aux choix",
            cathegorie:"Dessert",
            imageURL:"/images/d3.png",
            price: 3
            
        },
        {
            id: 27,
            title:"Smoothie",
            description: "Smoothie aux fruits",
            cathegorie:"Dessert",
            imageURL:"/images/d4.png",
            price: 6
            
        },
        {
            id: 28,
            title:"Sundae",
            description: "Chantilly speculose caramel",
            cathegorie:"Dessert",
            imageURL:"/images/d5.png",
            price: 5
            
        },
    ],
    panier:[]
};
export const menuReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, panier: [...state.panier, action.payload] };
        case DELETE_ITEM:
            return {
                ...state,
                panier: state.panier.filter(
                    (item) => item.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
/*return { ...state, panier: [...state.panier, action.payload] };*/ 