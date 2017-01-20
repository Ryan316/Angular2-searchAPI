import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { URLSearchParams } from "@angular/http";

@Injectable()
export class SearchService {
	constructor(private _http: Http) {}

	getResults(query) {
		// attaching params to url
		let params = new URLSearchParams();
		params.set('api_key', '42b3e60b6636f50062f6d3579100d83f');
		params.set('query', query);

		return this._http.get("http://api.themoviedb.org/3/search/movie", {search: params})
			.map(function (res) {
				console.log(res.json());
				return res.json();
			});
	}
}