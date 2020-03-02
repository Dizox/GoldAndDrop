import React, {useState} from 'react';
import './Inventory.css';
import gloves from './img/gloves.png'
import weapon from './img/weapon.png' 
import helmet from './img/helmet.png'
import shoulders from './img/shoulders.png'
import breastplate from './img/breastplate.png'
import boots from './img/boots.svg'

export function Inventory() {
  const [currentItem, setCurrentItem] = useState(null);

  //take current item after add store
  const items = [
    {
      id: '0',
      type: 'weapon',
      baseInfo: {
        name: 'Wounding Needle',
        rarity: 'Мифическое',
        price: '56000',
      },
      stats: {
        minDamage: '10',
        maxDamage: '12',
      },
      mods: {
        hp : '50',
        attackSpeed: '1.2',
        critChance: '1.4'
      },
    },

    {
      id: '1',
      type: 'gloves',
      baseInfo: {
        name: 'Torn Gloves',
        rarity: 'Дешевка',
        price: '3000',
      },
      stats: {
        physicalDefence: '10',
        dodge: '15'
      },
      mods: {
        hp : '120',
        attackSpeed: '1.1',
        critChance: '1.6'
      }
    }
  ]; 

  //lang for keys
  const itemsAssociate = {
    id: 'Идентификатор',
    type: 'Оружие',
    baseInfo: {
      name: 'Название',
      rarity: 'Редкость',
      price: 'Цена',
    },
    stats: {
      minDamage: 'Минимальный урон',
      maxDamage: 'Максимальный урон',
      physicalDefence: 'Физическая защита',
      dodge: 'Уклонение'
    },
    mods: {
      hp: 'Здоровье',
      attackSpeed: 'Скорость атаки',
      critChance: 'Шанс критического удара'
    }
  }; 

  //find the desired item and set state
  const FindAndSetItem = (neededType) => {
    const findedItem = Object.values(items).find(({ type }) => type === neededType);
    setCurrentItem(findedItem);
    return null;
  };

  //item description generation
  const infoFactory = (key, directory = false) => {
    let infoName;
    let infoValue;

    if (directory) {
      infoName = itemsAssociate[directory][key];
      infoValue = currentItem[directory][key];
    } else {
      infoName = itemsAssociate[key];
      infoValue = currentItem[key];
    }

    return `${infoName}: ${infoValue}`;
  };

  return (
    <div className="Inventory">
      <div className="Inventory__wrapper">
        <div className="Inventory__equipment">
          <div className="Inventory__column">
            <div className="Inventory__item">
              <img className="Inventory__img" src={gloves} alt={"gloves"} onClick={() => FindAndSetItem('gloves')}/> 
            </div>
            <div className="Inventory__item Inventory__item_weapon">
              <img className="Inventory__img" src={weapon} alt={"weapon"} onClick={() => FindAndSetItem('weapon')}/> 
            </div>
          </div>
          <div className="Inventory__column">
            <div className="Inventory__item">
              <img className="Inventory__img" src={helmet} alt={"helmet"}/> 
            </div>
            <div className="Inventory__item">
              <img className="Inventory__img" src={breastplate} alt={"breastplate"}/> 
            </div>
            <div className="Inventory__item">
              <img className="Inventory__img" src={boots} alt={"boots"}/> 
            </div>
          </div>
          <div className="Inventory__column">
            <div className="Inventory__item">
              <img className="Inventory__img" src={shoulders} alt={"shoulders"}/> 
            </div>
            <div className="Inventory__item Inventory__item_weapon">
              <img className="Inventory__img" src={weapon} alt={"weapon"}/> 
            </div>
          </div>
        </div>
        {currentItem && 
          <div className="Inventory__aboutEquip">
            <div className="Inventory__infoblock">
              <div className="Inventory__title">Характеристики: </div>
              {Object.keys(currentItem['baseInfo']).map(statName => (
                <div className="Inventory__info">{infoFactory(statName, 'baseInfo')}</div>
              ))}
              {Object.keys(currentItem['stats']).map(statName => (
                <div className="Inventory__info">{infoFactory(statName, 'stats')}</div>
              ))}
            </div>

            <div className="Inventory__infoblock">
              <div className="Inventory__title">Модификаторы: </div>
              {Object.keys(currentItem['mods']).map(statName => (
                <div className="Inventory__info">{infoFactory(statName, 'mods')}</div>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

