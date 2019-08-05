import React, { useState } from 'react';
import './stat-block.scss';

import useDataFetcher from '../../utils/use-data-fetcher';
import monsterUtils from '../../utils/monster-utils';

const StatBlock = ({ monsterId }) => {
    const [ id, setId ] = useState(monsterId);
    const [ val, setVal ] = useState();
    const { monster, fetching } = useDataFetcher({ type: 'monsters', id });

    if (!id) {
        return (
            <div>
                <input type='text' value={val} onChange={(e) => { setVal(e.target.value); }} />
                <button type='button' onClick={() => { setId(val); }}>Go</button>
            </div>
        );
    }

    return (!fetching && monster
        ? <div className='stat-block'>
            <h1>{monster.name}</h1>
            <div className='size'>{monster.size} {monster.type}, {monster.alignment}</div>
            <ul className='block'>
                <li><strong>Armor Class</strong> {monster.armor_class}</li>
                <li><strong>Hit Points</strong> {monster.hit_points}</li>
                <li>
                    <strong>Speed</strong>
                    {Object.keys(monster.speed).map(moveType => (
                        <span key={moveType}> {moveType}: {monster.speed[moveType]}</span>
                    ))}
                </li>
            </ul>
            <div className='ability-scores'>
                <div className='ability'>
                    <div className='ability-name'>STR</div>
                    <div className='ability-value'>{monster.strength} ({monsterUtils.scoreToMod(monster.strength)})</div>
                </div>
                <div className='ability'>
                    <div className='ability-name'>DEX</div>
                    <div className='ability-value'>{monster.dexterity} ({monsterUtils.scoreToMod(monster.dexterity)})</div>
                </div>
                <div className='ability'>
                    <div className='ability-name'>CON</div>
                    <div className='ability-value'>{monster.constitution} ({monsterUtils.scoreToMod(monster.constitution)})</div>
                </div>
                <div className='ability'>
                    <div className='ability-name'>INT</div>
                    <div className='ability-value'>{monster.intelligence} ({monsterUtils.scoreToMod(monster.intelligence)})</div>
                </div>
                <div className='ability'>
                    <div className='ability-name'>WIS</div>
                    <div className='ability-value'>{monster.wisdom} ({monsterUtils.scoreToMod(monster.wisdom)})</div>
                </div>
                <div className='ability'>
                    <div className='ability-name'>CHA</div>
                    <div className='ability-value'>{monster.charisma} ({monsterUtils.scoreToMod(monster.charisma)})</div>
                </div>
            </div>
            <ul className='block'>
                {monster.damage_vulnerabilities.length ? <li><strong>Damage Vulnerabilities</strong> {monster.damage_vulnerabilities.join(', ')}</li> : null}
                {monster.damage_resistances.length ? <li><strong>Damage resistances</strong> {monster.damage_resistances.join(', ')}</li> : null}
                {monster.damage_immunities.length ? <li><strong>Damage immunities</strong> {monster.damage_immunities.join(', ')}</li> : null}
                {monster.condition_immunities.length ? <li><strong>Condition immunities</strong> {monster.condition_immunities.join(', ')}</li> : null}
                {monster.senses ? <li><strong>Senses</strong> {monster.senses}</li> : null}
                {monster.languages ? <li><strong>Languages</strong> {monster.languages}</li> : null}
                <li><strong>Challenge</strong> {monster.challenge_rating}</li>
            </ul>
             { monster.special_abilities ?
                <ul className='special'>
                    {monster.special_abilities.map(ability => (
                        <div key={ability.name}>
                            <strong>{ability.name}</strong>
                            <pre>{ability.desc}</pre></div>
                    ))}
                </ul> : null }
            <h2>Actions</h2>
            <div className='action'>
                {monster.actions.map(action => (
                    <p key={action.name}>
                        <strong>{action.name}</strong> {action.desc}
                    </p>
                ))}
            </div>
        </div>
        : null);
};

export default StatBlock;