import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { SingleBookmark } from '../interface/bookmark.interface';

// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'bookmark-edit',
	providers: [BookmarksService],
	template: `
		<div class="panel panel-primary">
			<div class="panel-heading">
					<h3 class="panel-title">Edit-Bookmark-CURD</h3>
			</div>
			<div class="panel-body">
					<form class="form-horizontal" role="form" novalidate name="editBookmarksForm">

						<div class="form-group">
							<label class="sr-only" for="EditBookmarkTitle">Title</label>
							<input type="text" class="form-control" id="EditBookmarkTitle"
							name="bookmarkTitleEidtField" [(ngModel)]="newBookmark.title" placeholder="Title..." />
						</div>
						<div class="form-group">
							<label class="sr-only" for="EditBookmarkUrl">Url</label>
							<input type="text" class="form-control" id="EditBookmarkUrl" name="bookmarkUrlEidtField"
							[(ngModel)]="newBookmark.url" placeholder="Url..." />
						</div>
						<div class="form-group">
							<div class="col-xs-12 col-sm-10 col-sm-offset-2 text-right">
								<button (click)="onBookmarkSave()" type="submit" class="btn btn-primary">
									<i class="glyphicon glyphicon-pencil"></i>
									<span class="hidden-xs">Save</span>
								</button>
								<button (click)="onFieldsClear()" type="button" class="btn btn-warning">
									<i class="glyphicon glyphicon-trash"></i>
									<span class="hidden-xs">Clear</span>
								</button>
							</div>
						</div>
					</form>
			</div>
		</div>
  	`,
})
export class BookmarkEditComponent {

	@Input() newBookmark: SingleBookmark = {
		id: '',
		title: '',
		url: ''
	};
	@Output() saveBmEventEmit = new EventEmitter();
	@Output() clearBmEventEmit = new EventEmitter();

	onBookmarkSave() {
		this.saveBmEventEmit.emit(this.newBookmark);
	}

	onFieldsClear() {
		////////////////////////////////////////////////////////
		// emit must pass sth, if nothing need to be passed,  //
		// please pass {}.                                    //
		////////////////////////////////////////////////////////
		this.clearBmEventEmit.emit({});
	}

}
