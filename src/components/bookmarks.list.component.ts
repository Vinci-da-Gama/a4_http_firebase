import { Component, EventEmitter, Input, Output } from '@angular/core';
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
						<!-- <button (click)="onBmEdit(eachBookmark)" type="button" class="btn btn-danger">
							Update
						</button> -->
					</td>
					<td>
						<button (click)="onBmRemove(eachBookmark)" type="button" class="btn btn-warning">
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
	@Output() removeBmEventEmit = new EventEmitter();

	onBmRemove(culledBookmark: SingleBookmark) {
		console.log('45 -- list -- culledBookmark is: ', culledBookmark);
		this.removeBmEventEmit.emit(culledBookmark);
	}

}
