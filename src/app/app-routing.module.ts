import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/welcome" },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then(m => m.WelcomeModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "customers",
    loadChildren: () =>
      import("./customer/customer.module").then(m => m.CustomerModule)
  },
  {
    path: "posts",
    loadChildren: () => import("./post/post.module").then(m => m.PostModule)
  },
  {
    path: "comments",
    loadChildren: () =>
      import("./comment/comment.module").then(m => m.CommentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
