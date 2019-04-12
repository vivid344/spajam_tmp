import { firestore } from 'firebase'

export const REQUEST_INPUT = 'REQUEST_INPUT';
export const SUCCESS_INPUT = 'SUCCESS_INPUT';
export const FAILED_INPUT = 'FAILED_INPUT';

export const input = {
  [REQUEST_INPUT] ({ commit }, keyword) {
    commit(REQUEST_INPUT);
    const userCollection = firestore().collection('users');
    userCollection.doc().set({name: keyword}).then(() => {
      userCollection.get().then((querySnapshot) => {
        let name = '';
        querySnapshot.forEach(user => {
          name += ' '+ user.data().name;
        });

        commit(SUCCESS_INPUT, {name, keyword})
      }).catch(() => {
        commit(FAILED_INPUT)
      });
    });
  },
};
