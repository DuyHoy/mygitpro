import React from 'react';
import TeamName from './components/TeamName';
import TeamCharacter from './components/TeamCharacter';
import TeamMore from './components/TeamMore';
import TeamExpand from './components/TeamExpand';
TierGroup.propTypes = {

};

function TierGroup({ divStyle2 }) {
    const characterList = [
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Kalista.png",
            name: "Kalista",
            cost: 1,
            childCharacterList: [
                {
                    img: "https://rerollcdn.com/items/GiantsBelt.png",
                    name: "Giant's Belt",
                },
                {
                    img: "https://rerollcdn.com/items/NeedlesslyLargeRod.png",
                    name: "Needlessly Large Rod",
                },
            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Brand.png",
            name: "Brand",
            cost: 2,
            childCharacterList: [
                {
                    img: "https://rerollcdn.com/items/BansheesClaw.png",
                    name: "Banshee's Claw",
                },
            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Nunu.png",
            name: "Nunu",
            cost: 3,
            childCharacterList: [
                {
                    img: "https://rerollcdn.com/items/SunfireCape.png",
                    name: "Sunfire Cape",
                },
            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Ivern.png",
            name: "Ivern",
            cost: 4,
            childCharacterList: [
            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Fiddlesticks.png",
            name: "Fiddlesticks",
            cost: 4,
            childCharacterList: [

            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Gwen.png",
            name: "Gwen",
            cost: 4,
            childCharacterList: [
            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Volibear.png",
            name: "Volibear",
            cost: 5,
            childCharacterList: [
            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Heimerdinger.png",
            name: "Heimerdinger",
            cost: 5,
            childCharacterList: [
                {
                    img: "https://rerollcdn.com/items/ArchangelsStaff.png",
                    name: "Archangel's Staff",
                },
                {
                    img: "https://rerollcdn.com/items/GuinsoosRageblade.png",
                    name: "Guinsoo's Rageblade",
                },
                {
                    img: "https://rerollcdn.com/items/SpearofShojin.png",
                    name: "Spear of Shojin",
                },
            ]
        },
    ]
    const characterExpandList = [
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Kalista.png",
            name: "Kalista",
            cost: 1,
            childCharacterList: [

            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Brand.png",
            name: "Brand",
            cost: 2,
            childCharacterList: [

            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Sett.png",
            name: "Sett",
            cost: 2,
            childCharacterList: [

            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Nunu.png",
            name: "Nunu",
            cost: 3,
            childCharacterList: [

            ]
        },
        {
            img: "https://rerollcdn.com/characters/Skin/5.5/Zyra.png",
            name: "Zyra",
            cost: 3,
            childCharacterList: [

            ]
        },
    ]
    const traitList = [

        {
            img: "https://rerollcdn.com/icons/caretaker.png",
            name: "Caretaker",
            rank: "gold",
            champQty: 1,
        },
        {
            img: "https://rerollcdn.com/icons/inanimate.png",
            name: "Inanimate",
            rank: "gold",
            champQty: 1,
        },
        {
            img: "https://rerollcdn.com/icons/abomination.png",
            name: "Abomination",
            rank: "silver",
            champQty: 4,
        },
        {
            img: "https://rerollcdn.com/icons/revenant.png",
            name: "Revenant",
            rank: "silver",
            champQty: 3,
        },
        {
            img: "https://rerollcdn.com/icons/mystic.png",
            name: "Mystic",
            rank: "bronze",
            champQty: 2,
        },
        {
            img: "https://rerollcdn.com/icons/brawler.png",
            name: "Brawler",
            rank: "bronze",
            champQty: 2,
        },
        {
            img: "https://rerollcdn.com/icons/renewer.png",
            name: "Renewer",
            rank: "bronze",
            champQty: 2,
        },

    ]

    const carouselList = [
        {
            img: "https://rerollcdn.com/items/TearoftheGoddess.png",
            name: "Tear of the Goddess",
            childCarouselList: [
                {
                    img: "https://rerollcdn.com/items/ArchangelsStaff.png",
                    name: "Archangel's Staff",
                },
            ],
        },
        {
            img: "https://rerollcdn.com/items/NeedlesslyLargeRod.png",
            name: "Needlessly Large Rod",
            childCarouselList: [
                {
                    img: "https://rerollcdn.com/items/ArchangelsStaff.png",
                    name: "Archangel's Staff",
                },
            ],
        },
        {
            img: "https://rerollcdn.com/items/GiantsBelt.png",
            name: "Giant's Belt",
            childCarouselList: [
                {
                    img: "https://rerollcdn.com/items/SunfireCape.png",
                    name: "Sunfire Cape",
                },
            ],
        },
    ]

    return (
        <div className="tier-group">
            <div className="characters-list">
                <div className="team-portrait up">
                    <TeamName />
                    <TeamCharacter characterList={characterList} />
                    <TeamMore />
                    <TeamExpand divStyle2={divStyle2} characterExpandList={characterExpandList} traitList={traitList} carouselList={carouselList} />
                </div>

            </div>
        </div>

    );
}

export default TierGroup;