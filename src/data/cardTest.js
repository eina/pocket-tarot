const _cards = [
    {
        "name": "Seven of Wands",
        "name_short": "wa07",
        "value": "seven",
        "value_int": 7,
        "suit": "wands",
        "type": "minor",
        "meaning_up": "It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.",
        "meaning_rev": "Perplexity, embarrassments, anxiety. It is also a caution against indecision.",
        "desc": "A young man on a craggy eminence brandishing a staff; six other staves are raised towards him from below."
    },
    {
        "name": "Nine of Pentacles",
        "name_short": "pe09",
        "value": "nine",
        "value_int": 9,
        "suit": "pentacles",
        "type": "minor",
        "meaning_up": "Prudence, safety, success, accomplishment, certitude, discernment.",
        "meaning_rev": "Roguery, deception, voided project, bad faith.",
        "desc": "A woman, with a bird upon her wrist, stands amidst a great abundance of grapevines in the garden of a manorial house. It is a wide domain, suggesting plenty in all things. Possibly it is her own possession and testifies to material well-being."
    },
    {
        "name": "Nine of Wands",
        "name_short": "wa09",
        "value": "nine",
        "value_int": 9,
        "suit": "wands",
        "type": "minor",
        "meaning_up": "The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment.",
        "meaning_rev": "Obstacles, adversity, calamity.",
        "desc": "The figure leans upon his staff and has an expectant look, as if awaiting an enemy. Behind are eight other staves--erect, in orderly disposition, like a palisade."
    },
    {
        "name": "Page of Swords",
        "name_short": "swpa",
        "value": "page",
        "value_int": 11,
        "suit": "swords",
        "type": "minor",
        "meaning_up": "Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.",
        "meaning_rev": "More evil side of these qualities; what is unforeseen, unprepared state; sickness is also intimated.",
        "desc": "A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment."
    },
    {
        "type": "major",
        "name_short": "ar13",
        "name": "Death",
        "value": "13",
        "value_int": 13,
        "meaning_up": "End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.",
        "meaning_rev": "Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.",
        "desc": "The veil or mask of life is perpetuated in change, transformation and passage from lower to higher, and this is more fitly represented in the rectified Tarot by one of the apocalyptic visions than by the crude notion of the reaping skeleton. Behind it lies the whole world of ascent in the spirit. The mysterious horseman moves slowly, bearing a black banner emblazoned with the Mystic Rose, which signifies life. Between two pillars on the verge of the horizon there shines the sun of immortality. The horseman carries no visible weapon, but king and child and maiden fall before him, while a prelate with clasped hands awaits his end.\nThere should be no need to point out that the suggestion of death which I have made in connection with the previous card is, of course, to be understood mystically, but this is not the case in the present instance. The natural transit of man to the next stage of his being either is or may be one form of his progress, but the exotic and almost unknown entrance, while still in this life, into the state of mystical death is a change in the form of consciousness and the passage into a state to which ordinary death is neither the path nor gate. The existing occult explanations of the 13th card are, on the whole, better than usual, rebirth, creation, destination, renewal, and the rest."
    },
    {
        "type": "major",
        "name_short": "ar07",
        "name": "The Chariot",
        "value": "7",
        "value_int": 7,
        "meaning_up": "Succour, providence also war, triumph, presumption, vengeance, trouble.",
        "meaning_rev": "Riot, quarrel, dispute, litigation, defeat.",
        "desc": "An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.\nIt is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood."
    },
    {
        "name": "Four of Cups",
        "name_short": "cu04",
        "value": "four",
        "value_int": 4,
        "suit": "cups",
        "type": "minor",
        "meaning_up": "Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.",
        "meaning_rev": "Novelty, presage, new instruction, new relations.",
        "desc": "A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment."
    },
    {
        "name": "Six of Cups",
        "name_short": "cu06",
        "value": "six",
        "value_int": 6,
        "suit": "cups",
        "type": "minor",
        "meaning_up": "A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.",
        "meaning_rev": "The future, renewal, that which will come to pass presently.",
        "desc": "Children in an old garden, their cups filled with flowers."
    },
    {
        "name": "Eight of Swords",
        "name_short": "sw08",
        "value": "eight",
        "value_int": 8,
        "suit": "swords",
        "type": "minor",
        "meaning_up": "Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.",
        "meaning_rev": "Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.",
        "desc": "A woman, bound and hoodwinked, with the swords of the card about her. Yet it is rather a card of temporary durance than of irretrievable bondage."
    },
    {
        "name": "Ten of Wands",
        "name_short": "wa10",
        "value": "ten",
        "value_int": 10,
        "suit": "wands",
        "type": "minor",
        "meaning_up": "A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.",
        "meaning_rev": "Contrarieties, difficulties, intrigues, and their analogies.",
        "desc": "A man oppressed by the weight of the ten staves which he is carrying."
    }
];

// random shuffle array for test https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
const _shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export { _cards, _shuffle };