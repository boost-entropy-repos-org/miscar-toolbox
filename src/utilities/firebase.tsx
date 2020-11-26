import firebase from "firebase";
import User = firebase.User;

export function withToken(user: User): Promise<string> {
    return user.getIdToken().then((token) => {
        return "Bearer: " + token;
    });
}
