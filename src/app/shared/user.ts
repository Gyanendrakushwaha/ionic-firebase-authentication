
// Create a shared folder, create auth.ts file in it, we define the data types for the user object. Add the following code in the shared/user.ts file:


export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}