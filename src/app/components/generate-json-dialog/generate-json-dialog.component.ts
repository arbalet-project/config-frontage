import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { GenerateJsonService } from "src/app/core/generate-json.service";

@Component({
  selector: "app-generate-json-dialog",
  templateUrl: "./generate-json-dialog.component.html",
  styleUrls: ["./generate-json-dialog.component.scss"],
})
export class GenerateJsonDialogComponent implements OnInit {
  public uri: SafeUrl;

  constructor(
    public dialogRef: MatDialogRef<GenerateJsonDialogComponent>,
    private sanitizer: DomSanitizer,
    public generate: GenerateJsonService,
  ) { }

  ngOnInit(): void {
    this.uri = this.sanitizer.bypassSecurityTrustUrl(
      "data:text/json;charset=UTF-8,"
      + encodeURIComponent(JSON.stringify(this.generate.generate()))
    );

  }
}
