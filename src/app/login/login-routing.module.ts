import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogInPageComponent } from "./log-in-page/log-in-page.component";

const routes: Routes = [
  { path: "", redirectTo: "sign-in", pathMatch: "full" },
  { path: "sign-in", component: LogInPageComponent, data: { breadcrumb: "Login" } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
