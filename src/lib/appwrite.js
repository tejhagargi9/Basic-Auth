import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ed5d9ad29235e43629'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
