import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MatModule } from "./modules/mat.module";
import { SettingChangeColorSchemeComponent } from "./components/settings/setting-change-color-scheme/setting-change-color-scheme.component";

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatModule],
  declarations: [AppComponent, SettingChangeColorSchemeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
