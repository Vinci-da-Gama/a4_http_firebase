import { Component, Input } from '@angular/core';
import { SingleBookmark } from '../interface/bookmark.interface';

// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'bookmark-list',
	template: `
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th>Id</th>
					<th>Title</th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="let eachBookmark of bookmarksList" >
					<td>{{eachBookmark.id}}</td>
					<td>
						<a [href]="eachBookmark.url" target="_blank">
							{{eachBookmark.title}}
						</a>
					</td>
					<td>
						<button (click)="onBmarkRemove(eachBookmark)" type="button" class="btn btn-danger">
							Update
						</button>
					</td>
					<td>
						<button (click)="onBmarkEdit(eachBookmark)" type="button" class="btn btn-warning">
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
  	`,
})
export class BookmarksListComponent {

	@Input() bookmarksList: SingleBookmark[] = [];

}
