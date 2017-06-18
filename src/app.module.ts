import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GeneralEntryComponent } from './entry.component';
import { BookmarksListComponent } from './components/bookmarkslist.component';
import { BookmarkUpdateComponent } from './components/update.bookmarks.component';

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule],
	declarations: [GeneralEntryComponent, BookmarksListComponent, BookmarkUpdateComponent],
	bootstrap: [GeneralEntryComponent]
})
export class AppModule { }
