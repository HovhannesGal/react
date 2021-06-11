import {firebase, FieldValue} from "../lib/firebase"

export const doesUserNameExist = async (userName)=>{
    const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", userName)
    .get();


    return result.docs.length !== 0;
};