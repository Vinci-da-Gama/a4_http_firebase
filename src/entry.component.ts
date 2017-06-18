import { Component } from '@angular/core';

@Component({
	selector: 'general-entry',
	template: `
		<div class="page-header">
			<h4>Shared Bookmarks
				<small> Entry-Component</small>
			</h4>
		</div>
		<bookmark-container></bookmark-container>
  	`,
})
export class GeneralEntryComponent {

	constructor() {
	}

}
