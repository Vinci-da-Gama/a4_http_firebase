import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GeneralEntryComponent } from './entry.component';
import { BookmarksContainerComponent } from './components/bookmarks.container.component';
import { BookmarksListComponent } from './components/bookmarks.list.component';
import { BookmarkEditComponent } from './components/bookmarks.edit.component';
import { BookmarkErrHandlerComponent } from './components/bookmarks.ErrorHandling.component';

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule],
	declarations: [
		GeneralEntryComponent,
		BookmarksListComponent,
		BookmarksContainerComponent,
		BookmarkErrHandlerComponent,
		BookmarkEditComponent],
	bootstrap: [GeneralEntryComponent]
})
export class AppModule { }
