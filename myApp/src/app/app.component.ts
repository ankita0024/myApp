import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  cityId: string;
  cityForm: FormGroup;
  errorMessage = "";
  message: string;
  categoryList: any;
  restroList = [];
  constructor(private appService: AppService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.fetchCategory();
    this.initialize();
    this.cityForm.valueChanges.subscribe(() => {
      this.errorMessage = null;
    });
  }
  initialize(): void {
    this.cityForm = this.fb.group({
      cityName: ["", Validators.required],
      selectedCategory: ["", Validators.required]
    });
  }
  fetchCategory(): void {
    this.appService.getCategories().subscribe(
      result => {
        this.categoryList = result.categories;
      },
      error => {
        console.log(error);
      }
    );
  }
  fetchCity(): void {
    if (this.cityForm.valid) {
      this.appService.getCities(this.cityForm.get("cityName").value).subscribe(
        result => {
          if (
            result.status === "success" &&
            result.location_suggestions &&
            result.location_suggestions.length === 1
          ) {
            this.errorMessage = null;
            this.getResult(
              result.location_suggestions[0].id,
              this.cityForm.get("selectedCategory").value
            );
          } else {
            this.errorMessage = "Enter valid values.";
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.errorMessage = "Enter valid values.";
    }
  }
  saveDetails(): void {
    this.appService.saveResult(this.restroList).subscribe(
      result => {
        this.message = "Saved";
      },
      error => {
        this.message = "Failed to save";
      }
    );
  }
  getResult(cityId: number, selectedCategory: string) {
    this.appService.getResult(cityId, selectedCategory).subscribe(result => {
      this.restroList = result.restaurants;
    });
  }
}
