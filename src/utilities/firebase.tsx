export function withToken(user: any): Promise<string> {
    return user.getIdToken().then((token: string) => {
        return "Bearer " + token;
    });
}
