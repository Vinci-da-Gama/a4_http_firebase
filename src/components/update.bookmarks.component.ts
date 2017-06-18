import { Component } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { SingleBookmark } from '../interface/bookmark.interface';

// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'bookmark-update',
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
  	`,
})
export class BookmarkUpdateComponent {

	bookmarks: SingleBookmark[] = [];

	constructor(private bookmarkService: BookmarksService) {
		this.bookmarkService.getBookmarks()
		.subscribe(
			(res: SingleBookmark[]) => this.bookmarks = res//,
			// error...
		);
	}

}
