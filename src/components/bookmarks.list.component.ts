import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleBookmark } from '../interface/bookmark.interface';

// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'bookmark-list',
	template: `
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th class="hidden-xs">Id</th>
					<th>Title</th>
					<th>Update</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="let eachBookmark of bookmarksList" >
					<td class="hidden-xs">{{eachBookmark.id}}</td>
					<td>
						<a [href]="eachBookmark.url" target="_blank">
							{{eachBookmark.title}}
						</a>
					</td>
					<td>
						<button (click)="onBmEdit(eachBookmark)" type="button" class="btn btn-danger">
							<i class="glyphicon glyphicon-upload"></i>
							<span class="hidden-xs">Update</span>
						</button>
					</td>
					<td>
						<button (click)="onBmRemove(eachBookmark)" type="button" class="btn btn-warning">
							<i class="glyphicon glyphicon-remove"></i>
							<span class="hidden-xs">Delete</span>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
  	`,
})
export class BookmarksListComponent {

	@Input() bookmarksList: SingleBookmark[] = [];
	@Output() updateBmEventEmit = new EventEmitter();
	@Output() removeBmEventEmit = new EventEmitter();

	onBmEdit(culledBookmark: SingleBookmark) {
		this.updateBmEventEmit.emit(culledBookmark);
	}

	onBmRemove(culledBookmark: SingleBookmark) {
		this.removeBmEventEmit.emit(culledBookmark);
	}

}
