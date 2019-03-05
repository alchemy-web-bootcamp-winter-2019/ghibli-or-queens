const test = QUnit.test;

QUnit.module('Template Detail');

const champion = {
    "id": "Aatrox",
    "name": "Aatrox",
    "title": "the Darkin Blade",
    "lore": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's seemingly living blade drinks in their blood, empowering him and fueling his brutal, elegant campaign of slaughter.<br><br>The earliest tale of Aatrox is as old as recorded history. It tells of a war between two great factions remembered only as the Protectorate and the Magelords. Over time, the Magelords won a series of crushing victories, leaving them on the brink of obliterating their sworn enemy forever. On the day of their final confrontation, the Protectorate army found themselves outnumbered, exhausted, and poorly equipped. They braced for inevitable defeat.<br><br>Just when all hope seemed lost, Aatrox appeared among the ranks of the Protectorate. With but a few words, he urged the soldiers to fight to the last before throwing himself into battle. His presence inspired the desperate warriors. At first, they could only watch in awe as this unknown hero cleaved through their enemies, his body and blade moving in unison as if one being. Soon, the warriors found themselves imbued with a potent thirst for battle. They followed Aatrox into the fray, each fighting with the furious strength of ten until they had won a most unlikely victory.<br><br>Aatrox vanished after that battle, but the Protectorate army's newfound fury did not. Their surprising triumph led to many more until they were able to finally return home victorious. Their countrymen hailed them as heroes, but though they had saved their entire civilization from destruction, darkness lingered in the mind of each warrior. Something within them had changed. Over time, their memories of battle faded, only to be replaced with a grim revelation: their acts of heroism were, in fact, brutal atrocities committed by their own hands.<br><br>Tales like these appear among the myths of many cultures. If they are all to be believed, Aatrox's presence has changed the course of some of the most important wars in history. Though these stories remember him as a savior in dark times, Aatrox's true legacy may be a world filled with conflict and strife.<br><br>''Some fight for honor, some fight for glory. It matters only that you fight.''<br>-- Aatrox"
};

function makeDetailsHeaderTemplate(champion) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div>
            <h1>${champion.name}</h1>
            <h2>${champion.title}</h2>
            <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg">
        </div>
    `;
    return template.content;
}

test('<header> test', assert => {
    // Arrange
    const expected = `
        <div>
            <h1>Aatrox</h1>
            <h2>the Darkin Blade</h2>
            <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg">
        </div>
    `;

    // Act
    const result = makeDetailsHeaderTemplate(champion);

    // Assert
    assert.htmlEqual(result, expected);
});

function makeDetailsMainTemplate(champion) {
    const template = document.createElement('template');
    template.innerHTML = `
        <section id="lore">
            <h3>Lore</h3>
            <p>
                ${champion.lore}
            </p>
        </section>
    `;
    return template.content;
}


test('<main> test', assert => {
    // Arrange
    const expected = `
        <section id="lore">
            <h3>Lore</h3>
            <p>
                Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's seemingly living blade drinks in their blood, empowering him and fueling his brutal, elegant campaign of slaughter.<br><br>The earliest tale of Aatrox is as old as recorded history. It tells of a war between two great factions remembered only as the Protectorate and the Magelords. Over time, the Magelords won a series of crushing victories, leaving them on the brink of obliterating their sworn enemy forever. On the day of their final confrontation, the Protectorate army found themselves outnumbered, exhausted, and poorly equipped. They braced for inevitable defeat.<br><br>Just when all hope seemed lost, Aatrox appeared among the ranks of the Protectorate. With but a few words, he urged the soldiers to fight to the last before throwing himself into battle. His presence inspired the desperate warriors. At first, they could only watch in awe as this unknown hero cleaved through their enemies, his body and blade moving in unison as if one being. Soon, the warriors found themselves imbued with a potent thirst for battle. They followed Aatrox into the fray, each fighting with the furious strength of ten until they had won a most unlikely victory.<br><br>Aatrox vanished after that battle, but the Protectorate army's newfound fury did not. Their surprising triumph led to many more until they were able to finally return home victorious. Their countrymen hailed them as heroes, but though they had saved their entire civilization from destruction, darkness lingered in the mind of each warrior. Something within them had changed. Over time, their memories of battle faded, only to be replaced with a grim revelation: their acts of heroism were, in fact, brutal atrocities committed by their own hands.<br><br>Tales like these appear among the myths of many cultures. If they are all to be believed, Aatrox's presence has changed the course of some of the most important wars in history. Though these stories remember him as a savior in dark times, Aatrox's true legacy may be a world filled with conflict and strife.<br><br>''Some fight for honor, some fight for glory. It matters only that you fight.''<br>-- Aatrox
            </p>
        </section>
    `;

    // Act
    const result = makeDetailsMainTemplate(champion);

    // Assert
    assert.htmlEqual(result, expected);
});