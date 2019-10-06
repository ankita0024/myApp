import { Injectable } from "@angular/core";
import { Categories, City, Search } from "./models";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

const KEY = "ebce07efec80d0017e1a3ee7173cdbd6";
const URL = "https://developers.zomato.com/api/v2.1/";

@Injectable({
  providedIn: "root"
})
export class AppService {
  headers = new HttpHeaders()
    .set("user-key", KEY)
    .set("Content-type", "application/json");
  constructor(protected httpClient: HttpClient) {}

  getCities(cityName?: string): Observable<City> {
    const params = new HttpParams().set("q", cityName.toString());
    return this.httpClient.get<City>(`${URL}cities`, {
      headers: this.headers,
      params
    });
  }

  getCategories(): Observable<Categories> {
    return this.httpClient.get<Categories>(`${URL}categories`, {
      headers: this.headers
    });
  }

  getResult(cityId: number, selectedCategory: string): Observable<Search> {
    const params = new HttpParams()
      .set("entity_type", "city")
      .set("entity_id", cityId.toString())
      .set("category", selectedCategory);
    return this.httpClient.get<Search>(`${URL}search`, {
      headers: this.headers,
      params
    });
  }

  saveResult(fileContent: any): Observable<any> {
    return this.httpClient.post<Search>(
      `http://localhost:3000/save`,
      fileContent
    );
  }
}
