import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { SingleBookmark } from '../interface/bookmark.interface';

// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'bookmark-error-handling',
	providers: [BookmarksService],
	template: `
		<div class="panel panel-primary">
			<div class="panel-heading">
					<h3 class="panel-title">CRUD-Error-Handling</h3>
			</div>
			<div class="panel-body">
					<form class="form-horizontal" role="form" novalidate name="editBookmarksForm">

						<div class="form-group">
							<label class="sr-only" for="EditBookmarkTitle">Title</label>
							<input type="text" class="form-control" id="EditBookmarkTitle" name="bookmarkTitleEidtField" [(ngModel)]="newBookmark.title" placeholder="Title..." />
						</div>
						<div class="form-group">
							<label class="sr-only" for="EditBookmarkUrl">Url</label>
							<input type="text" class="form-control" id="EditBookmarkUrl" name="bookmarkUrlEidtField"  [(ngModel)]="newBookmark.url" placeholder="Url..." />
						</div>
						<div class="form-group">
							<div class="col-xs-12 col-sm-10 col-sm-offset-2 text-right">
								<button (click)="onBookmarkSave()" type="submit" class="btn btn-primary">Submit</button>
							</div>
						</div>

					</form>
			</div>
		</div>
  	`,
})
export class BookmarkErrHandlerComponent {

	@Input() newBookmark: SingleBookmark = {
		id: '',
		title: '',
		url: ''
	};

	@Output() save = new EventEmitter();

	onBookmarkSave() {
		this.save.emit(this.newBookmark);
	}

}
