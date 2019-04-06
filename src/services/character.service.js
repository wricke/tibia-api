const { GetDomFromURL } = require('../utils/dom.utils');

const Character = require('../models/Character');

const GetCharacterInfos = async (playerName) => {
  if (!playerName) throw new Error('Player name is required');

  const url = `https://secure.tibia.com/community/?subtopic=characters&name=${playerName}`;
  const dom = await GetDomFromURL(url);
  
  const character = new Character(dom);

  console.log(character.name);
}

module.exports = {
  GetCharacterInfos,
}
