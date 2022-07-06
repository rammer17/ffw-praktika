import { Injectable } from "@angular/core";
import { IDino } from "../_models/dino.model";

@Injectable({
    providedIn: 'root'
})
export class DinoService {
    DinoList: IDino[] = [
        {
            id: 1,
            title: 'Бронтозавър',
            description: 'Описание',
            price: 1201
        }
    ];
}