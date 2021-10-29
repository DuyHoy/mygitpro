import React from "react";

export const Filter = [
    {
        id: 1,
        filterTitle: 'Cost',
        subFilter: [
            { id: 1, filterItem: '1', icon: 'https://rerollcdn.com/ui/icon-gold.svg' },
            { id: 2, filterItem: '2', icon: 'https://rerollcdn.com/ui/icon-gold.svg' },
            { id: 3, filterItem: '3', icon: 'https://rerollcdn.com/ui/icon-gold.svg' },
            { id: 4, filterItem: '4', icon: 'https://rerollcdn.com/ui/icon-gold.svg' },
            { id: 5, filterItem: '5', icon: 'https://rerollcdn.com/ui/icon-gold.svg' },
        ]
    },
    {
        id: 2,
        filterTitle: 'Origin',
        subFilter: [
            { id: 1, filterItem: 'Abomination', icon: 'https://rerollcdn.com/icons/abomination.png' },
            { id: 2, filterItem: 'Dawnbringer', icon: 'https://rerollcdn.com/icons/dawnbringer.png' },
            { id: 3, filterItem: 'Draconic', icon: 'https://rerollcdn.com/icons/draconic.png' },
            { id: 4, filterItem: 'Forgotten', icon: 'https://rerollcdn.com/icons/forgotten.png' },
            { id: 5, filterItem: 'Hellion', icon: 'https://rerollcdn.com/icons/hellion.png' },
        ]
    },
    {
        id: 3,
        filterTitle: 'Class',
        subFilter: [
            { id: 1, filterItem: 'Assasin', icon: 'https://rerollcdn.com/icons/assassin.png' },
            { id: 2, filterItem: 'Brawler', icon: 'https://rerollcdn.com/icons/brawler.png' },
            { id: 3, filterItem: 'Cannoneer', icon: 'https://rerollcdn.com/icons/cannoneer.png' },
            { id: 4, filterItem: 'Cavalier', icon: 'https://rerollcdn.com/icons/cavalier.png' },
            { id: 5, filterItem: 'Cruel', icon: 'https://rerollcdn.com/icons/cruel.png' },
        ]
    },
]


export const ChampList = [
    {
        id: 1,
        url: '/CharacterItem',
        name: 'Aatrox',
        cost: 1,
        origin:'Abomination',
        class:'Assasin', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Aatrox.png'
    },
    {
        id: 2,
        url: '/CharacterItem',
        name: 'Velkoz',
        cost: 1,
        origin:'Dawnbringer',
        class:'Brawler', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Velkoz.png'
    },
    {
        id: 3,
        url: '/CharacterItem',
        name: 'Gwen',
        cost: 2,
        origin:'Draconic',
        class:'Cannoneer', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Gwen.png'
    },
    {
        id: 4,
        url: '/CharacterItem',
        name: 'Kennen',
        cost: 2,
        origin:'Forgotten',
        class:'Cavalier', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Kennen.png'
    },
    {
        id: 5,
        url: '/CharacterItem',
        name: 'Aatrox',
        cost: 3,
        origin:'Abomination',
        class:'Assasin', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Aatrox.png'
    },
    {
        id: 6,
        url: '/CharacterItem',
        name: 'Velkoz',
        cost: 3,
        origin:'Hellion',
        class:'Cruel', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Velkoz.png'
    },
    {
        id: 7,
        url: '/CharacterItem',
        name: 'Aatrox',
        cost: 4,
        origin:'Hellion',
        class:'Cruel', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Gwen.png'
    },
    {
        id: 8,
        url: '/CharacterItem',
        name: 'Kennen',
        cost: 4,
        origin:'Abomination',
        class:'Assasin', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Kennen.png'
    },
    {
        id: 9,
        url: '/CharacterItem',
        name: 'Nautilus',
        cost: 5,
        origin:'Abomination',
        class:'Assasin', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Nautilus.png'
    },
    {
        id: 10,
        url: '/CharacterItem',
        name: 'Draven',
        cost: 5,
        origin:'Abomination',
        class:'Assasin', 
        img: 'https://rerollcdn.com/characters/Skin/5.5/Draven.png'
    },
]