import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SingleBookmark } from '../interface/bookmark.interface';
import { NewBookmark } from '../interface/newbookmark.interface';

import 'rxjs/add/operator/toPromise';

// import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookmarksService {

    private baseUrl = 'https://a4-test-db-14june2017.firebaseio.com';

    constructor(private http: Http) { }

    postNewBookmark(bookmark: NewBookmark) {
        const bmJson = JSON.stringify(bookmark);
        return this.http.post(`${this.baseUrl}/bookmarks.json`, bmJson)
        .toPromise();
    }

    getBookmarks(): Observable<SingleBookmark[]> {
        return this.http.get(`${this.baseUrl}/bookmarks.json`)
            .map((res: Response) => this.convertFirebaseObjToArray(res.json()))
            .catch((err: Response) => { throw err; });
    };



    removeBookmark(bookmark: SingleBookmark) {
        const bmJson = JSON.stringify(bookmark);
        return this.http.delete(`${this.baseUrl}/bookmarks/${bookmark.id}.json`, bmJson)
        .toPromise();
    }

    private convertFirebaseObjToArray(parseResponse) {
        return Object.keys(parseResponse)
            .map((id: string) => {
                return {
                    id: id,
                    title: parseResponse[id].title,
                    url: parseResponse[id].url
                };
            })
            .sort((a: SingleBookmark, b: SingleBookmark) => a.title.localeCompare(b.title));
    }

    // getBookmarks(): Promise<SingleBookmark[]> {
    //     return this.http.get(`${this.baseUrl}/bookmarks.json`)
    //         .toPromise()
    //         .then((res: Response) => this.convertFirebaseObjToArray(res.json()));
    //         // .catch(this.handleError);

    // };

    // private convertFirebaseObjToArray(parseResponse) {
    //     return Object.keys(parseResponse)
    //         .map((id: string) => {
    //             return {
    //                 id: id,
    //                 title: parseResponse[id].title,
    //                 url: parseResponse[id].url
    //             };
    //         })
    //         .sort((a: SingleBookmark, b: SingleBookmark) => a.title.localeCompare(b.title));
    // }

}
