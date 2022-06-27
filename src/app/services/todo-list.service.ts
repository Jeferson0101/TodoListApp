import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { IList, IListItem } from '../components/list/models/list.model';

@Injectable({providedIn: 'root'})
export class TodoListService {

    public api: string = 'http://localhost:3000';
    
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(private http: HttpClient) { }
     
    public addNewTodoList(newList: IList): Observable<any> {
        return this.http.post(`${this.api}/tasks`, newList, {observe: 'response', responseType: 'json'})
            .pipe(
                takeUntil(this.ngUnsubscribe),
                map(response => response.body)
            );
    }

    public addNewListItem(listId: string, newListItem: IListItem): void {
        this.http.post(`${this.api}/tasks/${listId}`, newListItem);
    }

    public getAllLists(): Observable<any> {
        return this.http.get(`${this.api}/tasks`, {observe: 'response', responseType: 'json'})
        .pipe(
            takeUntil(this.ngUnsubscribe),
            map(response => response.body)
        );
    }

    public removeList(id: string): Observable<any> {
        return this.http.delete(`${this.api}/tasks/${id}`, {observe: 'response', responseType: 'json'})
        .pipe(
            takeUntil(this.ngUnsubscribe),
            map(response => response.ok)
        );
    }
}