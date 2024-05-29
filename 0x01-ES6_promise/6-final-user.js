import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const results = Promise.allSettled(promises)
    .then((data) => data.map((result) => {
      if (result.status === 'rejected') return ({ status: result.status, value: String(result.reason) });
      return ({ status: result.status, value: result.value });
    }));
  return results;
}
