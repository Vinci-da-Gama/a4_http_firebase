import { Component } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { SingleBookmark } from '../interface/bookmark.interface';
import { NewBookmark } from '../interface/newbookmark.interface';

// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'bookmark-container',
	providers: [BookmarksService],
	template: `
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<bookmark-edit (saveBmEventEmit)="SaveBookmark($event)"></bookmark-edit>
			</div>
			<!-- <div class="col-xs-12 col-sm-6">
				<bookmark-error-handling></bookmark-error-handling>
			</div> -->
		</div>
		<bookmark-list [bookmarksList]="bookmarks" (removeBmEventEmit)="RemoveSelectedBookmark($event)">
		</bookmark-list>
  	`,
})
export class BookmarksContainerComponent {

	bookmarks: SingleBookmark[] = [];
	editableBookmark: Object = {};

	constructor(private bookmarkService: BookmarksService) {
		this.bmReload();
	}

	// onBmarkEdit(bm: SingleBookmark) {
	// 	console.log('60 -- bm is: ', bm);
	// 	this.editableBookmark = Object.assign({}, bm);
	// }

	SaveBookmark(bookmark: NewBookmark) {
		this.bookmarkService.postNewBookmark(bookmark)
		.then(() => this.bmReload());
	}

	RemoveSelectedBookmark(bookmark: SingleBookmark) {
		this.bookmarkService.removeBookmark(bookmark)
		.subscribe(() => this.bmReload());
	}

	private bmReload() {
		return this.bookmarkService.getBookmarks()
		.subscribe(
			(res: SingleBookmark[]) => this.bookmarks = res//,
			// error...
		);
	}

}
