import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { ShowHideDirective } from './showhide.directive';


@Component({
  selector: 'search',
  templateUrl: "./search.component.html",
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent {
	collection;
	queryString;
	timeoutId;

	constructor(private _searchService: SearchService) {}

	searchHandler(event) {
		// return if query is empty
		if(this.queryString === '' || this.queryString === undefined) {
			return;
		}
		// added clear timeout to avoid api calls spamming 
		clearTimeout(this.timeoutId);
		this.timeoutId = setTimeout(() => { 
			this.getSearch(this.queryString);
		}, 500);
	} 

	getSearch(query) {
		this._searchService.getResults(query)
			.subscribe(
				data => this.collection = data,
				error => console.log(error),
					() => console.log(this.collection.results)
			)
	}
}
