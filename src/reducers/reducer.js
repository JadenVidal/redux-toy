import produce from 'immer';

const initialState = {
  hunger: 50,
  engagement: 50,
  wellbeing: 50,
  emoji: 2
};


const Reducer = (state = initialState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case 'FEED':
          if(draftState.hunger >= 1){
            draftState.hunger = draftState.hunger-10
          }
        break;
      case 'PLAY':
          if(draftState.engagement >= 100){
            draftState.engagement = 100
          } else {
            draftState.engagement = draftState.engagement+10
          }
      break;
      case 'TICK':
          if(draftState.wellbeing >= 0 || draftState.wellbeing <= 100){
            draftState.wellbeing = 50 - draftState.hunger + draftState.engagement
          }
          draftState.hunger = draftState.hunger + 5
          draftState.engagement = draftState.engagement - 5
          if(draftState.wellbeing <= 25 && draftState.wellbeing >= 1){
            draftState.emoji = 1
          } else if(draftState.wellbeing <= 99 && draftState.wellbeing >= 75){
            draftState.emoji = 3
          } else if(draftState.wellbeing >= 100){
            draftState.emoji = 4
          } else if(draftState.wellbeing <= 74 && draftState.wellbeing >= 26){
            draftState.emoji = 2
          } else if (draftState.hunger >= 100){
            draftState.emoji = 0
          }
          
        break;
      default:
        break;
    }
      });
};

export default Reducer;
