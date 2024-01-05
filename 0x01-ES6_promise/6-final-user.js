import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  let result = [];
  try {
    const signup = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value: signup });
  } catch (e) {
    result.push({ status: 'rejected', value: e.tostring() });
  }
  try {
    const upload = await uploadPhoto(fileName);
    result.push({ status: 'fulfilled', value: upload });
  } catch (e) {
    result.push({ status: 'rejected', value: e.toString() });
  }

  return result;
}
