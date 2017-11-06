import { User } from './user-info';

export class ResponseObject {
    total: number;
    success: boolean;
    message: string;
    data: User;
}
