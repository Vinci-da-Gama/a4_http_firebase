import { Component } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { SingleBookmark } from '../interface/bookmark.interface';

// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'bookmark-container',
	providers: [BookmarksService],
	template: `
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th>Id</th>
					<th>Title</th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="let eachBookmark of bookmarks">
					<td>{{eachBookmark.id}}</td>
					<td>
						<a [href]="eachBookmark.url" target="_blank">
							{{eachBookmark.title}}
						</a>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<div class="container-fluid">
					<span class="label label-warning">update-bookmark</span>
				</div>
				<bookmark-update></bookmark-update>
			</div>
			<div class="col-xs-12 col-sm-6">
				<div class="container-fluid">
					<span class="label label-warning">update-bookmark</span>
				</div>
				<bookmark-update></bookmark-update>
			</div>
		</div>
  	`,
})
export class BookmarksListComponent {

	bookmarks: SingleBookmark[] = [];

	constructor(private bookmarkService: BookmarksService) {
		this.bookmarkService.getBookmarks()
		.subscribe(
			(res: SingleBookmark[]) => this.bookmarks = res//,
			// error...
		);
	}

}
