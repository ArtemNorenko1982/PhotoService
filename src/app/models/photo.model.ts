import { BaseModel } from '../models/base.model';

export class PhotoModel extends BaseModel{
    id: number;
    cropped_picture: string;
}