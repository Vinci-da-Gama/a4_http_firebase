import { Component } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { SingleBookmark } from '../interface/bookmark.interface';
// import { NewBookmark } from '../interface/newbookmark.interface';

// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'bookmark-container',
	providers: [BookmarksService],
	template: `
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<bookmark-edit (saveBmEventEmit)="SaveBookmark($event)"
					[newBookmark]="editableBookmark" (clearBmEventEmit)="ClearFields()">
				</bookmark-edit>
			</div>
			<!-- <div class="col-xs-12 col-sm-6">
				<bookmark-error-handling></bookmark-error-handling>
			</div> -->
		</div>
		<bookmark-list [bookmarksList]="bookmarks" (updateBmEventEmit)="UpdateBookmark($event)"
			(removeBmEventEmit)="RemoveSelectedBookmark($event)">
		</bookmark-list>
  	`,
})
export class BookmarksContainerComponent {

	bookmarks: SingleBookmark[] = [];
	editableBookmark: Object = {};

	constructor(private bookmarkService: BookmarksService) {
		this.bmReload();
	}

	SaveBookmark(bookmark: SingleBookmark) {
		let isUpdate: Boolean = bookmark.id !== '' && bookmark.id !== null && bookmark.id !== undefined;
		isUpdate = isUpdate && bookmark.id.length > 10;
		if (isUpdate) {
			////////////////////////////////////
			// only existing bookmark has id, //
			// so it is update.               //
			////////////////////////////////////
			this.bookmarkService.updateBookmark(bookmark)
			.then(() => this.bmReload());
		} else {
			this.bookmarkService.postNewBookmark(bookmark)
			.then(() => this.bmReload());
		}
		this.ClearFields();
	}

	private ClearFields() {
		this.editableBookmark = new Object();
	}

	UpdateBookmark(bookmark: SingleBookmark) {
		//////////////////////////////////////////////////////////////
		// use Object.assign to create new obj, otherwise, it will  //
		// modified both field, cause they share same memery block. //
		//////////////////////////////////////////////////////////////
		this.editableBookmark = Object.assign({}, bookmark);
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
